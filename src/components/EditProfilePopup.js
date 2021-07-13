import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup(props){

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser,props.isOpen]); 

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleDescriptionChange(e){
    setDescription(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    })
  } 

  return(
    <PopupWithForm 
      name="edit" 
      title="Редактировать профиль" 
      isOpen={props.isOpen} 
      onClose={props.onClose} 
      buttonText='Сохранить' 
      onSubmit={handleSubmit}>
    <input 
      className="popup__input popup__input_type_name" 
      type="text"
      name="user-name"
      id="name-input"
      placeholder="Имя" 
      minLength="2" 
      maxLength="40"  
      required 
      value={name} 
      onChange={handleNameChange}/>
    <span className="name-input-error"></span>
    <input 
      className="popup__input popup__input_type_description" 
      type="text"
      name="description" 
      id="description-input" 
      placeholder="Вид деятельности" 
      minLength="2" 
      maxLength="200" 
      required 
      value={description} 
      onChange={handleDescriptionChange}/>
    <span className="description-input-error"></span>
  </PopupWithForm>)
}

export default EditProfilePopup;