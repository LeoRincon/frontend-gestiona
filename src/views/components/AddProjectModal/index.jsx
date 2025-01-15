import { forwardRef } from "react";
import { addProjecModalTexts } from "../../../utils/const";

import "./styles.css";

const AddProjectModal = forwardRef(function AddProjectModal ({ onClose }, ref) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Ingresa a la función")
    onClose()
  };
  const handleCancel = (event)=>{
    event.preventDefault()
    onClose()
  }


  return (
    <dialog className="project-modal" ref={ref}>
      <h2>{addProjecModalTexts.title}</h2>
      <p>{addProjecModalTexts.description}</p>
      <form className="project-modal__form" onSubmit={handleSubmit}>
        <label htmlFor="project_name">{addProjecModalTexts.inputLabel}</label>
        <input
          type="text"
          id="project_name"
          name="nombre_proyecto"
          placeholder={addProjecModalTexts.placeholderInput}
        />
        <button type="submit">
          {addProjecModalTexts.confirmButtom}
        </button>
        <button onClick={handleCancel}>{addProjecModalTexts.cancelButtom}</button>
      </form>
    </dialog>
  );
});

export default AddProjectModal;
