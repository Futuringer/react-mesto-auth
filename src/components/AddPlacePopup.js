import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props){
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

    function handleSubmit(e){
      e.preventDefault();
      props.onAddPlace({
        name:name,
        link:link
      })
      setName('');
      setLink('');
    }

    function handleNameChange(e){
      setName(e.target.value)
    }

    function handleLinkChange(e){
      setLink(e.target.value)
    }
  
  return(
    <PopupWithForm 
      name="add-card" 
      title="Новое место" 
      isOpen={props.isOpen} 
      onClose={props.onClose} 
      buttonText='Создать'
      onSubmit={handleSubmit}>
    <input 
      className="popup__input popup__input_type_place" 
      type="text" name="name" 
      placeholder="Название" 
      id="place-input" 
      required
      minLength="2" 
      maxLength="30"
      onChange={handleNameChange}
      value={name || ''} />
    <span className="place-input-error"></span>
    <input 
      className="popup__input popup__input_type_link" 
      type="url" name="link" 
      placeholder="Ссылка на картинку" 
      id="image-link-input" 
      required
      onChange={handleLinkChange}
      value={link || ''} />
    <span className="image-link-input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;