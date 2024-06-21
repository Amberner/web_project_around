import "../src/index.css";

//------------------------------------ importando os métodos --------------------------------------------
import Validation from "../JS/FormValidator.js";
import Card from "../JS/card.js";
import Section from "../JS/Section.js";
import PopupWithForm from "../JS/PopupWithForm.js";
import PopupWithImage from "../JS/PopupWithImage.js";
import PopupWithConfirmation from "../JS/PopupWithConfirmation.js";
import UserInfo from "../JS/UserInfo.js";
import Api from "../JS/Api.js";

//---------------------------- Validações dos Formulários ----------------------------//
const validationProfile = new Validation({
  formSelector: ".popups__form",
  inputSelector: ".popups__input",
  submitButtonSelector: ".popups__form-submit",
  buttonError: "popups__form-submit_error",
  inputErrorClass: "popups__input_error",
}, document.querySelector(".popups__form"));

validationProfile.enableValidation();

const validationProfileAtavar = new Validation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  buttonError: ".popup__button_error",
  inputErrorClass: ".popups__input_error",
}, document.querySelector(".popup__form"));

validationProfileAtavar.enableValidation();

const validationCards = new Validation({
  formSelector: ".popup-cards__form",
  inputSelector: ".popup-cards__input",
  submitButtonSelector: ".popup-cards__submit",
  buttonError: "popups__cards-submit_error",
  inputErrorClass: "popup__cards-input_error",
}, document.querySelector(".popup-cards__form"));

validationCards.enableValidation();

//------------------------------- APIs -----------------------------------------------//
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-10",
  headers: {
    authorization: "efb1f05d-289b-4c85-b51a-6f31e98731ae",
    "Content-Type": "application/json"
  }
});

//---------------------------- Instanciação do UserInfo ----------------------------//
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__description",
  avatarSelector: ".profile__avatar"
});

//-------------Carregar os dados do usuário-----------------//
let currentUserId;

api.getUserInfo().then((userData) => {
  userInfo.setUserInfo({
    name: userData.name,
    description: userData.about,
    avatar: userData.avatar
  });
  currentUserId = userData._id; 
  console.log("Current User ID:", currentUserId);
}).catch((err) => {
  console.error("Erro ao carregar informações do usuário:", err);
});

//----------------------------------------------------------- FUNÇÕES DE POPUP -------------------------------------------------------------//
//------------------------------------- popup para o delete -----------------------------------//

document.addEventListener("DOMContentLoaded", () => {
  const popupWithConfirmation = new PopupWithConfirmation(".popup-cards__confirm");

  const closeDeleteCards = document.querySelector(".popup-cards__close-confirm");
  if (closeDeleteCards) {
    closeDeleteCards.addEventListener("click", () => popupWithConfirmation.close());
  } 

//-------------------------------- popup para criar cards ---------------------------------//
  const openCreateCard = document.querySelector(".profile__card-create");
  const closeCreateCard = document.querySelector(".popup-cards__close");
  openCreateCard.addEventListener("click", () => popupFormCards.open());
  closeCreateCard.addEventListener("click", () => popupFormCards.close());

  const handleSubmitFormCard = (formData) => {
    const valueTitle = formData["profile__card_name"];
    const valueUrl = formData["profile__card_url"];
    const saveButton = document.querySelector("#saveButtonCard");

    if (valueTitle && valueUrl) {
      saveButton.textContent = "Salvando...";

      const newCardData = {
        name: valueTitle,
        link: valueUrl,
      };

      api.createCard(newCardData)
        .then((createdCard) => {
          const newCard = new Card({
            name: createdCard.name,
            link: createdCard.link,
            likes: createdCard.likes,
            id: createdCard._id,
            userId: "664cbfd9889c8e0019de4e1f",
            api: api
          });
          const newCardElement = newCard.generateCard();
          const section = document.querySelector(".places");
          section.prepend(newCardElement);

          addDeleteButtonListeners();

          saveButton.textContent = "Salvar";
        })
        .catch((err) => {
          console.error("Erro ao criar o card:", err);
          saveButton.textContent = "Salvar";
        });
    }
  };

  const popupFormCards = new PopupWithForm(handleSubmitFormCard, ".popup-cards", ".popup-cards__form");



//---------------------------- PopupWithForm do Profile ---------------------------------------------//
  const openButtonProfile = document.querySelector(".profile__button");
  const closeButtonProfile = document.querySelector("#closeButton");

  openButtonProfile.addEventListener("click", () => {
    popupFormProfile.open();
  });
  closeButtonProfile.addEventListener("click", () => popupFormProfile.close());

  const handleSubmitFormProfile = (formData) => {
    const valueName = formData["profile__name"];
    const valueDescription = formData["profile__description"];
    const saveButton = document.querySelector("#saveButtonPopup");
    
    console.log("Nome do perfil:", valueName); // Registra o nome no console
    if (valueName && valueDescription) {
      // Modificar o botão quando for salvar
      
      saveButton.textContent = "Salvando...";

      api.updateUserInfo({
        name: valueName,
        about: valueDescription
      }).then((updatedUserInfo) => {
        // Delay para salvar
        setTimeout(() => {
          const profileNameElement = document.querySelector(".profile__name");
          const profileDescriptionElement = document.querySelector(".profile__description");

          profileNameElement.textContent = updatedUserInfo.name;
          profileDescriptionElement.textContent = updatedUserInfo.about;
          // Restaurar o botão para salvar
          saveButton.textContent = "Salvar";
        }, 2000);
      }).catch((err) => {
        console.error("Erro ao atualizar as informações do usuário:", err);
        // Restaurar o botão em caso de erro
        saveButton.textContent = "Salvar";
      });
    }
  };

  const popupFormProfile = new PopupWithForm(handleSubmitFormProfile, ".popups", ".popups__form");
  
//--------------------------- criação dos cards iniciais---------------------------------------------//

  api.getInitialCards().then((initialCards) => {
    const section = new Section({
      items: initialCards,
      renderer: (item) => {
        const userId = "664cbfd9889c8e0019de4e1f"; // ID do usuário atual
        const { name, link, likes, _id, owner } = item;
        const card = new Card({ 
          name,
          link,
          likes,
          id: _id,
          userId: currentUserId,
          api,
          ownerId: owner._id,
          popupWithConfirmation });
        const cardElement = card.generateCard();
        section.addItem(cardElement);
      },
    }, ".places");
    section.rendererItems();
  }).catch((err) => {
    console.error("Erro ao carregar os cards iniciais:", err);
  });

});

//------------------------------- PopupWithForm do Profile-Avatar -----------------------------------------//
const openButtonAvatarEdit = document.querySelector(".profile__avatar-edit");
const closeButtonAvatarEdit = document.querySelector("#closeButtonEdit");
openButtonAvatarEdit.addEventListener("click", () => popupFormAvatar.open());
closeButtonAvatarEdit.addEventListener("click", () => popupFormAvatar.close());

const handleSubmitFormAvatar = (formData) => {
  const avatarUrl = formData["profile__avatar"];
  const saveButton = document.querySelector("#saveButtonAvatar");

  if (avatarUrl) {
    saveButton.textContent = "Salvando...";

    api.updateUserAvatar(avatarUrl).then((updatedUserInfo) => {
      setTimeout(() => {
        const profileAvatarElement = document.querySelector(".profile__avatar");
        profileAvatarElement.src = updatedUserInfo.avatar;
        saveButton.textContent = "Salvar";
      }, 2000);
    }).catch((err) => {
      console.error("Erro ao atualizar o avatar do usuário:", err);
      saveButton.textContent = "Salvar";
    });
  }
};

const popupFormAvatar = new PopupWithForm(handleSubmitFormAvatar, ".popup", ".popup__form");

//------------------------------- Popup das Imagens --------------------------------------------------------
const popupWithImage = new PopupWithImage(".image");

// Adiciona os eventos aos cards para abrir as imagens
document.querySelector(".places").addEventListener("click", (event) => {
  if (event.target.classList.contains("places__image")) {
    const clickedCard = event.target;
    const imageUrl = clickedCard.getAttribute("src");
    const imageAlt = clickedCard.getAttribute("alt");
    const description = clickedCard.nextElementSibling.textContent;
    popupWithImage.open(imageUrl, imageAlt, description);
  }
});

// Botão para fechar a imagem
const closeButtonImage = document.querySelector(".image__close");
closeButtonImage.addEventListener("click", () => {
  popupWithImage.close();
});
