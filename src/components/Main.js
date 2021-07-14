import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-hover">
          <img
            src={currentUser.avatar}
            alt="Аватар пользователя"
            className="profile__image"
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar-edit-button"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__name-text">{currentUser.name}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-button vector-element-opacity"
              type="button"
            ></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button vector-element-opacity"
          type="button"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {props.cards.map((card) => (
            <Card
              onCardClick={props.onCardClick}
              card={card}
              key={card._id}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
