import "./styles.css";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const ActivitiesListModal = ({ isOpen = false, onClose }) => {
  const [openModal, setOpenModal] = useState(false);

  const columns = [
  { name: 'Nombre', selector: (row) => row.name },
  { name: 'Descripción', selector: (row) => row.description },
  { name: 'Categoria', selector: (row) => row.category },
];

const data = [
  { name: 'unooo', description: 'aaaaaaaaaa', category: 'Admin' },
  { name: 'dosssss', description: 'bbbbbbbbbbb', category: 'Admin' },
  { name: 'tressss', description: 'ccccccccccc', category: 'Admin' },
  { name: 'cuatrooo', description: 'ffffffff', category: 'Admin' },
  { name: 'cincooo', description: 'rrrrrrrrrr', category: 'Admin' }
];

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
        
        <DataTable columns={columns} data={data} />

        {/* TODO: Crear el formulario para añadir actividades */}
      </main>
    </Modal>
  );
};

export default ActivitiesListModal;
