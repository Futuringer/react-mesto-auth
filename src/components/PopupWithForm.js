function PopupWithForm(props) {
  return (
<div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
  <div className="popup__container">
    <button className="popup__close-button vector-element-opacity" type="button" onClick={props.onClose}>
    </button>
    <h3 className="popup__header">{props.title}</h3>
    <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
      {props.children}
      <button className="popup__submit" type="submit">{props.buttonText}</button>
    </form>
  </div>
</div>
  );
}

export default PopupWithForm;