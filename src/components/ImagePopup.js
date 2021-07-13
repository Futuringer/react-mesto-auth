function ImagePopup(props){
  return(
    <div className={`popup popup_type_open-image ${props.card.link!=='' && 'popup_opened'}`}>
    <div className="popup__content">
      <button className="popup__close-button vector-element-opacity" type="button" onClick={props.onClose}></button>
      <img src={props.card.link} alt={props.card.name} className="popup__image" />
      <h2 className="popup__image-header">{props.card.name}</h2>
    </div>
  </div>
  )
}
export default ImagePopup;