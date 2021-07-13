import React from 'react';
import * as auth from './auth.js';

function Login(props){
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    auth.authorize(password, email)
    .then((data) => {
      if (data.token){
        props.handleLogin();
      }
    })
    .catch(err => console.log(err))
  }

return (
<div className="entrance-container">
  <form className="entrance-form" onSubmit={handleSubmit}>
    <h2 className="entrance-form__header">Вход</h2>
    <input type="text" className="entrance-form__input" placeholder="Email" name="email" type="email" value={email} onChange={handleEmailChange}/>
    <input type="text" className="entrance-form__input" placeholder="Пароль"name="password" type="password" value={password} onChange={handlePasswordChange}/>
    <button className="entrance-form__submit-button vector-element-opacity" type="submit" onSubmit={handleSubmit}>Войти</button>
  </form>
</div>
)
}

export default Login;
