import successSign from './../images/success-sign.png';
import React from 'react';


function ConfirmationPopup(props){
  return(
    <div className={`popup popup_type_status ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container status-popup-container">
      <button className="popup__close-button vector-element-opacity" type="button" onClick={props.onClose}>
      </button>
        <img src={successSign} className="popup-status-image" alt="Success"/>
        <h3 className="popup__header status-popup__header">Вы успешно зарегистрировались!</h3>
      </div>
</div>
  )
}

export default ConfirmationPopup;