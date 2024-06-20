export default class Card {
  constructor({ name, link, likes, id, userId, api, ownerId, popupWithConfirmation }) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = id;
    this._userId = userId;
    this._api = api;
    this._ownerId = ownerId;
    this._popupWithConfirmation = popupWithConfirmation;
    this._element = this._getTemplate();
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(".places_card_template")
      .content
      .querySelector(".places__card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    const cardImage = this._element.querySelector('.places__image');
    const cardTitle = this._element.querySelector('.places__title');
    const likeCount = this._element.querySelector('.places__like-counter');
    const likeButton = this._element.querySelector('.places__button');
    const buttonDelete = this._element.querySelector('.places__button_delete');

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;
    this._updateLikes(this._likes);
    likeCount.textContent = this._likes.length;
    
    this._element.setAttribute("data-card-id", this._id);

    // Verifique se o card pertence ao usuário atual para mostrar o botão de deletar
    if (this._userId === this._ownerId) {
      buttonDelete.classList.add("fade");
      buttonDelete.addEventListener("click", this._handleDeleteClick.bind(this));
      console.log("Classe 'fade' adicionada ao botão de deletar.");
    }

    this._setEventListeners();
    
    return this._element;
  }

  _updateLikes(likes) {
    const likeButton = this._element.querySelector(".places__button");
    const likeCounter = this._element.querySelector(".places__like-counter");

    likeButton.classList.toggle("places__button-active", likes.some(user => user._id === this._userId));
    likeCounter.textContent = `${likes.length}`;
  }

  _likeButtonAction() {
    const likeButton = this._element.querySelector(".places__button");
    if (likeButton.classList.contains("places__button-active")) {
      this._api.unlikeCard(this._id)
        .then((updatedCard) => {
          this._updateLikes(updatedCard.likes);
          likeButton.classList.remove("places__button-active");
        })
        .catch((err) => {
          console.error("Erro ao descurtir o card:", err);
        });
    } else {
      this._api.likeCard(this._id)
        .then((updatedCard) => {
          this._updateLikes(updatedCard.likes);
          likeButton.classList.add("places__button-active");
        })
        .catch((err) => {
          console.error("Erro ao curtir o card:", err);
        });
    }
  }

  _handleDeleteClick(event) {
    const cardElement = event.target.closest(".places__card");
    const cardId = cardElement.getAttribute("data-card-id");
    const buttonConfirm = document.querySelector(".popup-cards__delete-confirm")

    buttonConfirm.textContent = "Sim";
    
    this._popupWithConfirmation.setSubmitAction(() => {
      buttonConfirm.textContent = "Excluindo...";
      this._api.deleteCard(cardId)
      .then(() => {
        setTimeout(() => {
          cardElement.remove();
          this._popupWithConfirmation.close();
        }, 1000)
      }).catch((err) => {
        console.error("Erro ao excluir o card:", err);
      });
    });

    this._popupWithConfirmation.open();
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".places__button");
    if (likeButton) {
      likeButton.addEventListener("click", () => this._likeButtonAction());
    } else {
      console.error("Botão de Like não foi encontrado!");
    }
  }
}
