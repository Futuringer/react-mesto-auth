import successSign from './../images/success-sign.png';
import denielSign from './../images/deniel-sign.png';
import React from 'react';


function InfoToolTip(props){
  return(
    <div className={`popup  ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container status-popup__container">
      <button className="popup__close-button vector-element-opacity" type="button" onClick={props.onClose}>
      </button>
        <img src={props.isRegistered ? successSign : denielSign} className="status-popup__image" alt="Success"/>
        <h3 className="popup__header status-popup__header">{props.isRegistered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h3>
      </div>
</div>
  )
}

export default InfoToolTip;