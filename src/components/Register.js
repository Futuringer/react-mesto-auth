import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import * as auth from './auth.js';
//import './styles/Login.css';

function Register(props){
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let history = useHistory();

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    auth.register(password, email).then((res) => {if(res){
      props.handleSuccessfulRegister();
      history.push('/sign-in')}})}

    
return (
<div className="entrance-container">
  <form className="entrance-form" onSubmit={handleSubmit}>
    <h2 className="entrance-form__header" >Регистрация</h2>
    <input type="text" className="entrance-form__input" placeholder="Email" require name="email" type="email" value={email} onChange={handleEmailChange}/>
    <input type="text" className="entrance-form__input" placeholder="Пароль"name="password" required type="password" value={password} onChange={handlePasswordChange}/>
    <button className="entrance-form__submit-button vector-element-opacity" type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>
    <p className="entrance-form__notification">Уже зарегистрированы?<a className="vector-element-opacity link" href="/sign-in"> Войти</a></p>
  </form>
</div>
)
}
export default Register;
