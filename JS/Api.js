export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Erro: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error("Erro ao buscar os cards iniciais:", err);
      });
  }

  createCard(card){
    return fetch( `${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(card),
    })
    .then(this._checkResponse)
    .then((createdCard) => {
        return createdCard;
    })
    .catch((err) => {
      console.error("Erro ao criar o card:", err);
    });
}

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error("Erro ao excluir o card:", err);
      });
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: 'PUT',
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error("Erro ao curtir o card:", err);
      });
  }

  unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error("Erro ao descurtir o card:", err);
      });
  }

  getCardLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error("Erro ao buscar os likes do card:", err);
      });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error("Erro ao buscar informações do usuário:", err);
      });
  }

  updateUserInfo(userInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(userInfo),
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error("Erro ao atualizar as informações do usuário:", err);
      });
  }

  updateUserAvatar(avatarUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatarUrl }),
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error("Erro ao atualizar o avatar do usuário:", err);
      });
  }
}