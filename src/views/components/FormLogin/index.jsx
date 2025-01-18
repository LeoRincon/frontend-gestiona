import { useForm } from "react-hook-form";
import "./styles.css";
import { fetchUsers } from "../../../services/getUsers";

export const FormLogin = () => {

  const { register, handleSubmit} = useForm();


  const onSubmit = async (data) => {
    console.log("🇨🇴🚨 => FormLogin => data:", data)
    const resp = await fetchUsers()
    console.log("🇨🇴🚨 => onSubmit => resp:", resp)
  };

  const email = "Correo";
  const password = "Contraseña";
  const login = "Iniciar Sesión";

  return (
    <form className="cardform__form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form__label--required" htmlFor="email">
        {email}
      </label>
      <input
      {...register("email")}
        className="form__input"
        type="email"
        id="email"
        name="email"
        placeholder="Ingrese su correo"
        // required
      />
      <label className="form__label--required" htmlFor="password">
        {password}
      </label>
      <input
      {...register("password")}
        className="form__input"
        type="password"
        id="password"
        name="password"
        placeholder="Ingrese su contraseña"
        // required
      />
      <button className="form__button" type="submit">
        {login}
      </button>
    </form>
  );
};
