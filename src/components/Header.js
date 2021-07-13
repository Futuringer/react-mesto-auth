import mestoLogo from './../images/mesto-logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();

return (
  <header className="header">
  <img src={mestoLogo} alt="МЕСТО Россия" className="header__logo"  />
  {location.pathname === '/sign-up' && (
    <NavLink className="header__button vector-element-opacity"  to="/sign-in">Войти</NavLink>
  )}
    {location.pathname === '/sign-in' && (
    <NavLink className="header__button vector-element-opacity"  to="/sign-up">Регистрация</NavLink>
  )}
    {location.pathname === '/' && (
    <div className="header__container">
      <p className="header__Email">{props.userEmail}</p>
      <NavLink className="header__button header__button_shadowed"  onClick={props.onSingOut} to="/sign-in">Выход</NavLink>
    </div>
  )}
  </header>
)
}

export default Header;