import React from 'react';
import { Route, Switch, Redirect, withRouter,useHistory } from 'react-router-dom';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ConfirmationPopup from './ConfirmationPopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import Login from './Login';
import Register from './Register';
import api from '../utils/api.js';
import {CurrentUserContext,defaultUser} from '../contexts/CurrentUserContext';
import ProtectedRoute from './ProtectedRoute';
import * as auth from './auth.js';

function App() {
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = React.useState(true);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard,setSelectedCard] = React.useState({name:'',link:''});
  const [currentUser,setCurrentUser] = React.useState(defaultUser);
  const [loggedIn,setLoggedIn] = React.useState(false);
  const [userEmail,setUserEmail] = React.useState('');
  let history = useHistory();

function closeAllPopups() {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setSelectedCard({name: '', link: ''});
  setIsConfirmationPopupOpen(false);
}

function handleCardClick(card){
  setSelectedCard(card)
}

function handleEditAvatarClick(){
  setIsEditAvatarPopupOpen(true);
}

function handleEditProfileClick(){
  setIsEditProfilePopupOpen(true);
}
  
function handleAddPlaceClick(){
  setIsAddPlacePopupOpen(true);
}

function handleSuccessfulRegister(){
  setIsConfirmationPopupOpen(true);
}

React.useEffect(()=>{
  api.getUserInfo()
  .then(userData => {
    setCurrentUser(userData)
   })
  .catch((err) => {
    console.log(`${err}`);
  });
},[])

function handleUpdateUser(userData) {
  console.log(userData);
  api.setUserInfo(userData)
  .then(res => {
    setCurrentUser(res);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(`${err}`);
  });
}

function handleUpdateAvatar(userData){
  api.changeAvatar(userData)
  .then(res => {
    setCurrentUser(res);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(`${err}`);
  });
}

function handleAddPlace(cardData){
  api.addCard(cardData)
  .then(newCard => {
    setCards([newCard,...cards]);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(`${err}`);
  });
}


const [cards,setCards] = React.useState([]);

React.useEffect(()=>{
  api.getCardsInfo()
  .then(cardData => {
    setCards(cardData);
})
.catch((err) => {
  console.log(`${err}`);
});
},[])

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.changeLikeCardStatus(card._id, !isLiked)
  .then((newCard) => {
    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));//разобрать
  })
  .catch((err) => {
    console.log(`${err}`);
  });
} 

function handleCardDelete(card) {
  api.deleteCard(card)
  .then(() => {
    setCards((state) => state.filter((c) => c._id !== card._id));
  })
  .catch((err) => {
    console.log(`${err}`);
  });
} 

React.useEffect(() => {
  tokenCheck();
},[]);

function tokenCheck () {
  if (localStorage.getItem('jwt')){
    const jwt = localStorage.getItem('jwt');
    auth.getContent(jwt).then((res)=>{
      if (res){
        console.log(res);
        setUserEmail(res.data['email']);
        setLoggedIn(true);
        history.push("/");
      }
    })
  }
}

function handleSignOut(){
  localStorage.removeItem('jwt');
  history.push('/login');
}

function handleLogin(){
setLoggedIn(true)
}


React.useEffect(()=>{//перенесли переадресацию сюда из сабмита Логина(не успевал подгрузиться email)
  history.push('/')
},[userEmail])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
        <Header userEmail={userEmail} onSingOut={handleSignOut}/>
        <Switch>
            <Route path="/sign-up">
              <Register handleSuccessfulRegister={handleSuccessfulRegister}/>
            </Route>
            <Route path="/sign-in">
              <Login handleLogin={handleLogin}/>
            </Route>


          <ProtectedRoute
            path="/"
            loggedIn={loggedIn}
            component={Main}
            onCardClick={handleCardClick} 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
        />
          </Switch>
          {loggedIn && <Footer/>} 
        <ConfirmationPopup isOpen={isConfirmationPopupOpen} onClose={closeAllPopups}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> 
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}/> 
        <PopupWithForm name="confirm" title="Вы уверены?" buttonText='Вы уверены?'>
        </PopupWithForm>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
