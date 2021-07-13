import {CurrentUserContext} from '../contexts/CurrentUserContext'
import React from 'react';

function Card (props){

  function handleClick() {
    props.onCardClick(props.card);
  }  

  function handleLikeClick() {
    props.onCardLike(props.card);
  } 

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `elements__delete-button vector-element-opacity ${!isOwn && 'elements__delete-button_hidden'}`
  ); 

const isLiked = props.card.likes.some(i => i._id === currentUser._id);
const cardLikeButtonClassName = `elements__like-button vector-element-opacity ${isLiked && 'elements__like-button_liked'}`; 

  return (
    <li className="elements__item">
      <img src={props.card.link} alt={props.card.name} className="elements__image" onClick={handleClick}/>
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      <div className="elements__footer">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__likes-container">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
          <p className="elements__likes-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;