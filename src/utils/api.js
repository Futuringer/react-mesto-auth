class Api {
  constructor({baseUrl,headers}) {
    this._baseUrl =  baseUrl;
    this._headers = headers;
  }
getUserInfo() {
  return fetch(`${this._baseUrl}/users/me`, {
  headers: this._headers,

})
  .then(this._handleResponse)
}

setUserInfo(data) {
  return fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
  }).then(this._handleResponse)
}

getCardsInfo() {
  return fetch(`${this._baseUrl}/cards`, {
    headers: this._headers,
  })
    .then(this._handleResponse)
}

addCard(data) {
  return fetch(`${this._baseUrl}/cards`, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  }).then(this._handleResponse)
}

deleteCard(data) {
  return fetch(`${this._baseUrl}/cards/${data._id}`, {
    method: 'DELETE',
    headers: this._headers
  }).then(this._handleResponse)
}

changeLikeCardStatus(id, isLiked) {
  return fetch(this._baseUrl + `/cards/likes/${id}`, {
    method: isLiked ? 'PUT' :'DELETE',
    headers: this._headers
  })
  .then(this._handleResponse)
}

changeAvatar(data) {
  return fetch(this._baseUrl + `/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: data.avatar,
    })
  })
  .then(this._handleResponse)
}

_handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-24',
  headers: {
    authorization: '0308ef52-354f-4228-a90e-eeca2348fa65',
    'Content-Type': 'application/json'
  }
})

export default api;