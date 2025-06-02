import "./styles.css";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import { AuxiliaryButton, PrimaryButton } from "../Buttons";
import DataTable from "react-data-table-component";
import { useForm } from "react-hook-form";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import { getCategories } from "../../../services/categoryService";
import { createActivity } from "../../../services/activitiesService";


const ActivitiesListModal = ({ isOpen = false, onClose, activities = [] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);

  const columns = [
    { name: "Nombre", selector: (row) => row.name },
    { name: "Descripción", selector: (row) => row.description },
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

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

      reset();
    } catch (error) {
      console.error("Error al agregar la actividad:", error);
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
        <form className="activities-list-modal__form" onSubmit={handleSubmit(onSubmit)}>
          <label className="activities-list-modal__label">Nombre</label>
          <input
            className="activities-list-modal__input"
            type="text"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && <p className="activities-list-modal__error">{errors.name.message}</p>}

          <label className="activities-list-modal__label">Descripción</label>
          <textarea
            className="activities-list-modal__input"
            rows={3}
            {...register("description", { required: "La descripción es obligatoria" })}
          />
          {errors.description && (
            <p className="activities-list-modal__error">{errors.description.message}</p>
          )}

          <label className="activities-list-modal__label">Categoría</label>
          <select
            className="activities-list-modal__input"
            defaultValue=""
            {...register("category", { required: "Seleccione una categoría" })}
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
            <p className="activities-list-modal__error">{errors.category.message}</p>
          )}

          <div className="activities-list-modal__buttons">
            <PrimaryButton type="submit">Agregar actividad</PrimaryButton>
            <SecondaryButton type="button" onClick={handleClose}>
              Cancelar
            </SecondaryButton>
          </div>
        </form>
        <DataTable columns={columns} data={data} />

        <div className="activities-list-modal__buttons">
          <PrimaryButton className={"btn-new-activity"}>
            Nueva Actividad
          </PrimaryButton>
          <AuxiliaryButton onClick={handleClose}>Cerrar</AuxiliaryButton>
        </div>
        {/* TODO: Crear el formulario para añadir actividades */}
      </main>
    </Modal>
  );
};

export default ActivitiesListModal;
