import "./styles.css";
import Modal from "../Modal";
import { useEffect, useState } from "react";

const ActivitiesListModal = ({ isOpen = false, onClose }) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(()=>{
    if (isOpen)
      setOpenModal(true);
    else
      setOpenModal(false);
  },[isOpen])

  const handleClose = () => {
    setOpenModal(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <Modal
      isOpen={openModal}
      onClose={handleClose}
      className="activities-list-modal"
      containerClassName={"activities-list-modal__container"}
    >
      <header>
        <h2 className="activities-list-modal__title">Actividades</h2>
      </header>
      <main>
        {/* TODO: Crear la tabla de actividades */}

        {/* TODO: Crear el formulario para añadir actividades */}
      </main>
    </Modal>
  );
};

export default ActivitiesListModal;
