
export const FormLogin = () => {
  return (
    <form className="cardform__form">
      <label className="form__label--required" htmlFor="email">Correo</label>
      <input className="form__input" type="email" id="email" name="email" placeholder="Ingrese su correo"
          required />
      <label className="form__label--required" htmlFor="password">Contraseña</label>
      <input className="form__input" type="password" id="password" name="password"
          placeholder="Ingrese su contraseña" required />
      <button className="form__button" type="submit">Iniciar Sesión</button>
    </form>
  )
}
