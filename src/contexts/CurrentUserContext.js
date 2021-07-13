import React from 'react';

export const CurrentUserContext = React.createContext();
export const defaultUser = {
  about: "Загрузка...",
  avatar: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  name: "Загрузка...",
  _id: ""
}