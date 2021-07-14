import React from "react";

function Login(props) {
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
    props.handleLogin(password, email);
  }
  return (
    <div className="entrance-container">
      <form className="entrance-form" onSubmit={handleSubmit}>
        <h2 className="entrance-form__header">Вход</h2>
        <input
          className="entrance-form__input"
          placeholder="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="entrance-form__input"
          placeholder="Пароль"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          className="entrance-form__submit-button vector-element-opacity"
          type="submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
