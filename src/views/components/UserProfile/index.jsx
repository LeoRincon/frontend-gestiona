import "./styles.css";

const UserProfile = () => {
  return (
    <section className="main-containter__user-profile">
      <header className="user-profile__header">
        <h1>Perfil de usuario</h1>
      </header>
      <form action="./" className="user-profile__form">
        <label htmlFor="user-fullname" className="form__label">Nombres y apellidos</label>
        <input type="text" name="user-fullname" id="user-fullname" className="form__input" defaultValue="Jhon Doe" />
        <label htmlFor="user-email" className="form__label">Correo electrónico</label>
        <input type="email" name="user-email" id="user-email" className="form__input" defaultValue="jhon.doe@correo.com" disabled />
        <label htmlFor="user-telephone" className="form__label">Teléfono</label>
        <input type="number" name="user-telephone" id="user-telephone" className="form__input" defaultValue="9465562123" />
        <h2 className="user-profile__subtitle">Cambiar contraseña</h2>
        <div className="user-profile__change-password">
          <div>
            <label htmlFor="current-password" className="form__label">Contraseña actual</label>
            <input type="password" name="current-password" id="current-password" className="form__input" placeholder="Ingresa tu contraseña" />
          </div>
          <div>
            <label htmlFor="new-password" className="form__label">Nueva contraseña</label>
            <input type="password" name="new-password" id="new-password" className="form__input" placeholder="Ingresa tu nueva contraseña" />
          </div>
          <div>
            <label htmlFor="confirm-password" className="form__label">Confimar contraseña</label>
            <input type="password" name="confirm-password" id="confirm-password" className="form__input" placeholder="Confirma la contraseña" />
          </div>
        </div>
        <button type="submit" className="form__button">Guardar cambios</button>
      </form>
    </section>
  );
};

export default UserProfile;

