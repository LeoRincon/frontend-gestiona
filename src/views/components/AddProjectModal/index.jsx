import { forwardRef } from "react";
import { addProjecModalTexts } from "../../../utils/const";

import "./styles.css";
import {CloseButton, PrimaryButton, SecondaryButton} from "../Buttons";

const AddProjectModal = forwardRef(({ onClose }, ref) => {
  const {
    title,
    inputLabel,
    placeholderInput,
    confirmButtom,
    cancelButtom,
  } = addProjecModalTexts;
  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };
  const handleCancel = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <dialog className="project-modal" ref={ref}>
      <CloseButton className={"btn-close"} onClick={handleCancel}/>
      <section className="project-modal__container">
        <h2>{title}</h2>
        <form className="project-modal__form" onSubmit={handleSubmit}>
          <label className="project-modal__form__label" htmlFor="project_name">
            {inputLabel}
          </label>
          <input
            className="project-modal__form__input"
            type="text"
            id="project_name"
            name="nombre_proyecto"
            placeholder={placeholderInput}
            required
          />
          <div className="project-modal__form__buttons">
            <PrimaryButton  type={"Submit"}> {confirmButtom} </PrimaryButton>
            <SecondaryButton onClick={handleCancel}>{cancelButtom}</SecondaryButton>
          </div>
        </form>
      </section>
    </dialog>
  );
});

AddProjectModal.displayName = "AddProjectModal";

export default AddProjectModal;
