import mestoLogo from './../images/mesto-logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();
  /*return (
    <header className="header">
    <img src={mestoLogo} alt="МЕСТО Россия" className="header__logo"  />
    <NavLink className="header__button"  to="/">Выход</NavLink>
  </header>
  )*/
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

  /*return (
    <header className={loggedIn ? 'header header_row-reverse' : 'header'}>
      {loggedIn &&
        (
          <div
            className={menuIsOpen ? 'header__container header__container_opened' : 'header__container'}
          >
            <address
              className="header__address"
            >
              {authorizationUserEmail && authorizationUserEmail}
            </address>
            <button
              className="header__button"
              type="button"
              onClick={handleSignOut}
            >
              Выйти
            </button>
          </div>
        )
      }
      <div
        className="header__container-main"
      >
        <img className="header__logo" src={logo} alt="логотип сайта" />
        {loggedIn &&
          (
            <button
              className={menuIsOpen ? 'header__menu-button header__menu-button_opened' : 'header__menu-button'}
              type="button"
              aria-label="кнопка меню"
              onClick={handleToggleMenu}
            />
          )
        }
        {!loggedIn &&
          (<nav>
            {location.pathname === '/sign-in' &&
              (
                <NavLink
                  className="header__button"
                  to="/sign-up"
                >
                  Регистрация
                </NavLink>
              )
            }
            {location.pathname === '/sign-up' &&
              (
                <NavLink
                  className="header__button"
                  to="/sign-in"
                >
                  Войти
                </NavLink>
              )
            }
          </nav>
        )
        }
      </div>

    </header>
  )

*/
}

export default Header;