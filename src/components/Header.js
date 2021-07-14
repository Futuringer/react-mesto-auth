import mestoLogo from "./../images/mesto-logo.svg";
import { Link, Switch, Route } from "react-router-dom";
function Header(props) {
  return (
    <header className="header">
      <img src={mestoLogo} alt="МЕСТО Россия" className="header__logo" />
      <Switch>
        <Route exact path="/">
          <div className="header__container">
            <p className="header__Email">{props.userEmail}</p>
            {console.log(props.userEmail)}
            <Link
              className="header__button header__button_shadowed"
              onClick={props.onSingOut}
              to="/sign-in"
            >
              Выход
            </Link>
          </div>
        </Route>
        <Route path="/sign-up">
          <Link className="header__button vector-element-opacity" to="/sign-in">
            Войти
          </Link>
        </Route>
        <Route path="/sign-in">
          <Link className="header__button vector-element-opacity" to="/sign-up">
            Регистрация
          </Link>
        </Route>
      </Switch>
    </header>
  );
}
export default Header;
