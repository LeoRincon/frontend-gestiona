import "./styles.css";

export const FormLogin = () => {
  const email = "Correo";
  const password = "Contraseña";
  const login = "Iniciar Sesión";

  return (
    <form className="cardform__form">
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
        {login}
      </button>
    </form>
  );
};
