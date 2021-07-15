import React from "react";
import {Link} from "react-router-dom";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegistration({ password, email });
  }

  return (
    <div className="entrance-container">
      <form className="entrance-form" onSubmit={handleSubmit}>
        <h2 className="entrance-form__header">Регистрация</h2>
        <input
          className="entrance-form__input"
          placeholder="Email"
          required
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="entrance-form__input"
          placeholder="Пароль"
          name="password"
          required
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          className="entrance-form__submit-button vector-element-opacity"
          type="submit"
          onSubmit={handleSubmit}
        >
          Зарегистрироваться
        </button>
        <p className="entrance-form__notification">
          Уже зарегистрированы?
          <Link to="/sign-in" className="vector-element-opacity link"> Войти</Link>
        </p>
      </form>
    </div>
  );
}
export default Register;
