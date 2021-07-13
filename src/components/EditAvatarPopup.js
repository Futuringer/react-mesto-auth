import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props){
  const avatarRef = React.useRef();

  function handleSubmit(e) {

    e.preventDefault()
    props.onUpdateAvatar({
      avatar: avatarRef.current.value/* Значение инпута, полученное с помощью рефа */
    });
  } 
  return (
    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      isOpen={props.isOpen} 
      onClose={props.onClose} 
      onSubmit={handleSubmit}
      buttonText='Сохранить'>
    <input 
      className="popup__input popup__input_type_link" 
      type="url" 
      name="avatar" 
      placeholder="Ссылка на аватар" 
      id="image-avatar-input" 
      ref={avatarRef}
      required />
    <span className="image-avatar-input-error"></span>
    </PopupWithForm> 
  )
}

export default EditAvatarPopup;