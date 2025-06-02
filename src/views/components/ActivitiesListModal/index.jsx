import "./styles.css";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import { AuxiliaryButton, PrimaryButton, SecondaryButton } from "../Buttons";
import DataTable from "react-data-table-component";
import { set, useForm } from "react-hook-form";
import { getCategories } from "../../../services/categoryService";
import { createActivity } from "../../../services/activitiesService";

const ActivitiesListModal = ({ isOpen = false, onClose, activities = [] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [hiddenElement, setHiddenElement] = useState(true);
  const [created, setCreated] = useState(false);
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

  const onSubmit = async (data) => {
    try {
      const payload = {
        nombre: data.name,
        descripcion: data.description,
        id_categoria: data.category,
      };

      const newActivity = await createActivity(payload);

      setData((prevData) => [...prevData, newActivity]);

      if (newActivity) setCreated(true);

      reset();
      setHiddenElement(true);
    } catch (error) {
      console.error("Error al agregar la actividad:", error);
    }
  };

  const handleOpenForm = () => {
    if (hiddenElement) setHiddenElement(!hiddenElement);
    if (created) setCreated(false);
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
            <PrimaryButton type="submit">Agregar actividad</PrimaryButton>
            <SecondaryButton
              type="button"
              onClick={() => {
                reset();
                setHiddenElement(true);
              }}
            >
              Cancelar
            </SecondaryButton>
          </div>
        </form>
        <div className={`success-message ${created ? "" : "hidden-element"}`}>
          <p>&#x2611; Actividad creada con éxito</p>
        </div>
      </main>
    </Modal>
  );
};

export default ActivitiesListModal;
