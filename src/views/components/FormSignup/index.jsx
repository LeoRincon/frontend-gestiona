import "./styles.css";

export default function FormSignup() {
  const fullname = "Nombre Completo";
  const email = "Correo";
  const password = "Contraseña";
  const createCount = "Crear Cuenta";
  return (
    <form className="cardform__form">
      <label className="form__label--required" htmlFor="fullname">
        {fullname}
      </label>
      <input
        className="form__input"
        type="text"
        id="fullname"
        name="fullname"
        placeholder="Ingrese su nombre completo"
        required
      />
      <label className="form__label--required" htmlFor="email">
        {email}
      </label>
      <input
        className="form__input"
        type="email"
        id="email"
        name="email"
        placeholder="Ingrese su correo"
        required
      />
      <label className="form__label--required" htmlFor="password">
        {password}
      </label>
      <input
        className="form__input"
        type="password"
        id="password"
        name="password"
        placeholder="Ingrese su contraseña"
        required
      />
      <button className="form__button" type="submit">
        {createCount}
      </button>
    </form>
  );
}
