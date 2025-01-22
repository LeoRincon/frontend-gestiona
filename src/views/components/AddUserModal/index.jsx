import "./styles.css";
import {forwardRef} from "react";



const AddUserModal = forwardRef(({onClose}, ref) => {
  return (
    <dialog className="modal add-user" ref={ref}> 
      <button onClick={onClose} className="modal__close" autoFocus>
        <i className="modal__close--icon"></i>
      </button>
      <h2 className="add-user__title">Agregar un Usuario</h2>
      <form action="./" method="post" className="add-user__form">
        <label htmlFor="userName" className="form__label">Nombre Completo</label>
        <input type="text" name="userName" id="userName" className="form__input" placeholder="Ingrese el nombre completo del usuario" />
        <label htmlFor="email" className="form__label">Correo</label>
        <input type="text" name="email" id="email" className="form__input" placeholder="Ingrese el correo del usuario" />
        <label htmlFor="rol" className="form__label">Rol</label>
        <select name="rol" id="rol" className="form__input form__select">
          <optgroup className="form__optgroup" label="Selecciona el rol del usuario">
            <option className="form__option" value="Delegado">Delegado</option>
            <option value="Administrador">Administrador</option>
          </optgroup>
        </select>
        <label className="form__label">Permisos</label>
        <select name="permissions" id="permissions" className="form__input form__select">
          <optgroup className="form__optgroup" label="Selecciona el permiso del usuario">
            <option className="form__option" value="Lector">Ver</option>
            <option value="Editor">Editar</option>
          </optgroup>
        </select>
        <div className="form__container-buttons">
          <button type="submit" className="primary-button">Agregar Usuario</button>
        </div>
      </form>
    </dialog>
  );
});

AddUserModal.displayName = "AddUserModal";

export default AddUserModal;

