import { AuthHeader } from "./components/AuthHeader";
import { FormLogin } from "./components/FormLogin";

export const Login = () => {
  return (
    <div className="container">
        <AuthHeader />
        <main className="container__cardform">
            <h1 className="cardform__title">Inicia Sesión</h1>
            <FormLogin />
            <p className="cardform__text">¿No tienes una cuenta?
                <a href="./sign-up.html" className="card_form__text--link">Registrate</a>
            </p>
        </main>
    </div>
  )
}
