import "./styles.css";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import {
  AuxiliaryButton,
  PrimaryButton,
  SecondaryButton,
  DeleteButton,
  EditButton,
} from "../Buttons";
import DataTable from "react-data-table-component";
import { set, useForm } from "react-hook-form";
import { getCategories } from "../../../services/categoryService";
import {
  createActivity,
  deleteActivity,
  updateActivity,
} from "../../../services/activitiesService";

const ActivitiesListModal = ({ isOpen = false, onClose, activities = [] }) => {
  const emptyFormValues = {id:"" ,name: "", description: "", category: "" };
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [hiddenElement, setHiddenElement] = useState(true);
  const [created, setCreated] = useState(false);
  const [typeForm, setTypeForm] = useState("create");
  const [formValues, setFormValues] = useState(emptyFormValues);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const columns = [
    { name: "Nombre", selector: (row) => row.name, wrap: true },
    { name: "Descripción", selector: (row) => row.description, wrap: true },
    { name: "Categoria", selector: (row) => row.category },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <EditButton title="Editar Actividad" onClick={() => updateRow(row)} />
          <DeleteButton
            title="Eliminar Actividad"
            onClick={() => deleteRow(row)}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (isOpen) setOpenModal(true);
    else setOpenModal(false);
  }, [isOpen]);

  useEffect(() => {
    if (activities && activities.length > 0) setData(activities);
  }, [activities]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const Categories = await getCategories();
      setCategories(Categories);
    }

    fetchCategories();
  }, []);

  const handleClose = () => {
    setOpenModal(false);
    if (onClose) onClose();
  };
  
  const updateRow = async (row) => {
    if (!confirm(`¿Desea editar la actividad ${row.name}?`)) return;

    setTypeForm("update");
    setFormValues({
      id: row.idActivity,
      name: row.name,
      description: row.description,
      category: row.idCategory,
    });

    if (hiddenElement) {
      setHiddenElement(!hiddenElement);
    }
  };

  const onSubmit = async (formData) => {
    try {
      const payload = {
        nombre: formData.name,
        descripcion: formData.description,
        id_categoria: formData.category,
      };
      let newActivity = {};
      if (typeForm === "create") {
        newActivity = await createActivity(payload);
        setData((prevData) => [...prevData, newActivity]);
      } else if (typeForm === "update") {
        newActivity = await updateActivity(formValues.id, payload);
        if (newActivity) {
          const updatedData = data.map((item) =>
            item.idActivity === newActivity.idActivity ? newActivity : item
          );
          setData(updatedData);
        }
      }

      if (newActivity) setCreated(true);

      reset();
      setFormValues(emptyFormValues);
      setHiddenElement(true);
      setTimeout(() => {
        setCreated(false);
      }, 3000);
    } catch (error) {
      console.error("Error al agregar la actividad:", error);
    }
  };

  const handleOpenForm = () => {
    if (hiddenElement) setHiddenElement(!hiddenElement);
    if (created) setCreated(false);
    setTypeForm("create");
    setFormValues(emptyFormValues);
  };

  const deleteRow = async (row) => {
    if (
      !confirm(
        `¿Desea eliminar la actividad ${row.name}?\n\n¡PRECAUCIÓN!\nEsta acción no se puede deshacer.`
      )
    )
      return;

    const deleteRes = await deleteActivity(row.idActivity);
    if (!deleteRes) {
      const updatedData = data.filter(
        (item) => item.idActivity !== row.idActivity
      );
      setData(updatedData);
      alert(`La actividad ${row.name} fue eliminada con éxito.`);
    }
  };

  return (
    <Modal
      isOpen={openModal}
      onClose={handleClose}
      className="activities-list-modal"
      containerClassName="activities-list-modal__container"
    >
      <header>
        <h2 className="activities-list-modal__title">Actividades</h2>
      </header>
      <main>
        <div className="activities-list-modal__table-container">
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationPerPage={4}
          />
        </div>
        <div className="activities-list-modal__buttons">
          <PrimaryButton
            className={"btn-new-activity"}
            type={"button"}
            onClick={handleOpenForm}
          >
            Nueva Actividad
          </PrimaryButton>
          <AuxiliaryButton onClick={handleClose}>Cerrar</AuxiliaryButton>
        </div>
        <form
          className={`activities-list-modal__form ${
            hiddenElement ? "hidden-element" : ""
          }`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="activities-list-modal__form-field">
            <label className="activities-list-modal__label">Nombre</label>
            <input
              className="activities-list-modal__input"
              type="text"
              placeholder="Nombre de la actividad"
              name="name"
              defaultValue={formValues.name}
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && (
              <p className="activities-list-modal__error">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="activities-list-modal__form-field">
            <label className="activities-list-modal__label">Descripción</label>
            <textarea
              className="activities-list-modal__input"
              placeholder="Descripción de la actividad"
              name="description"
              defaultValue={formValues.description}
              rows={3}
              {...register("description", {
                required: "La descripción es obligatoria",
              })}
            />
            {errors.description && (
              <p className="activities-list-modal__error">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="activities-list-modal__form-field">
            <label className="activities-list-modal__label">Categoría</label>
            <select
              className="activities-list-modal__input"
              defaultValue=""
              value={formValues.category}
              onInput={(e) => {
                setFormValues((prev) => ({
                  ...prev,
                  category: e.target.value,
                }));
              }}
              name="category"
              {...register("category", {
                required: "Seleccione una categoría",
              })}
            >
              <option value="" disabled>
                Seleccione una categoría
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="activities-list-modal__error">
                {errors.category.message}
              </p>
            )}
          </div>

          <div className="activities-list-modal__form-buttons">
            <PrimaryButton type="submit">
              {typeForm === "update" ? "Editar Actividad" : "Agregar actividad"}
            </PrimaryButton>
            <SecondaryButton
              type="button"
              onClick={() => {
                setFormValues(emptyFormValues);
                reset()
                setHiddenElement(true);
              }}
            >
              Cancelar
            </SecondaryButton>
          </div>
        </form>
        <div className={`success-message ${created ? "" : "hidden-element"}`}>
          <p>
            &#x2611; Actividad {typeForm === "update" ? "editada" : "creada"}{" "}
            con éxito
          </p>
        </div>
      </main>
    </Modal>
  );
};

export default ActivitiesListModal;
