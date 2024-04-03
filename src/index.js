import "../src/index.css"
//------------------------------------ importando os metodos --------------------------------------------
import Validation from "../JS/FormValidator.js";
import Card, { initialCards } from "../JS/card.js";
import Section from "../JS/Section.js"
import PopupWithForm from "../JS/PopupWithForm.js";
import PopupWithImage from "../JS/PopupWithImage.js";
import UserInfo from "../JS/UserInfo.js";

//-----validação do profile------------//
const validationProfile = new Validation({
  formSelector: ".popups__form",
  inputSelector: ".popups__input",
  submitButtonSelector: ".popups__form-submit",
  buttonError: "popups__form-submit_error",
  inputErrorClass: "popups__input_error",
}, document.querySelector(".popups__form")); 

validationProfile.enableValidation();
//-----validação dos Cards ------------//
const validationCards = new Validation({
  formSelector: ".popup-cards__form",
  inputSelector: ".popup-cards__input",
  submitButtonSelector: ".popup-cards__submit",
  buttonError: "popups__cards-submit_error",
  inputErrorClass: "popup__cards-input_error",
}, document.querySelector(".popup-cards__form")); 

validationCards.enableValidation();

//--------------------------------------------Gerar os cards iniciais-------------------------------------------//
const cardSelector = new Section({
  items: initialCards,
  renderer: (item) =>{
    const card = new Card(item.name, item.link);
    const cardElement = card.generateCard();
    cardSelector.addItem(cardElement);
  },
}, ".places")
cardSelector.rendererItems();


//-------------------------------------- popupWithForm do card ---------------------------------------------//
const handleSubmitFormCard = (formData) => {
  const valueTitle = formData["profile__card_name"];
  const valueUrl = formData["profile__card_url"];

  if(valueTitle && valueUrl) {
    const newCard = new Card(valueTitle, valueUrl);
    const newCardElement = newCard.generateCard();

    const cardSelector = new Section({
      items: [newCardElement],
      renderer: (item) => {
        cardSelector.addItem(item)
      },
    }, ".places"); 

    cardSelector.rendererItems();
  }

}

const popupFormCards = new PopupWithForm(handleSubmitFormCard, ".popup-cards", ".popup-cards__form")


//------------------------------------ popupWithForm do profile ---------------------------------------------//
const handleSubmitFormProfile = (formData) => {
  let userInfo;
  const valueName = formData["profile__name"];
  const valueDescription = formData["profile__description"];

  if(valueName && valueDescription) {
    const profileNameElement = document.querySelector("#inputNamePopup");
    const profileDescriptionElement = document.querySelector("#inputDescriptionPopup")

    profileNameElement.textContent = valueName;
    profileDescriptionElement.textContent = valueDescription;

    userInfo = new UserInfo({
      nameSelector: ".profile__name", 
      descriptionSelector: ".profile__description"
    });

    userInfo.setUserInfo({
      name: valueName,
      description: valueDescription
    })
  }

}

const popupFormProfile = new PopupWithForm(handleSubmitFormProfile, ".popups", ".popups__form");


//------------------------------- botões de abrir e fechar perfil-------------------------------------------
const openButtonProfile = document.querySelector("#openButton");
const closeButtonProfile = document.querySelector("#closeButton");
openButtonProfile.addEventListener("click", () => popupFormProfile.open());
closeButtonProfile.addEventListener("click", () => popupFormProfile.close());


//------------------------------- botões de abrir e fechar cards--------------------------------------------
const openButtonCards = document.querySelector(".profile__photo-edit");
const closeButtonCards = document.querySelector("#closeButtonCards");
openButtonCards.addEventListener("click", () => popupFormCards.open());
closeButtonCards.addEventListener("click", () => popupFormCards.close())


//------------------------------- popup Das Imagens --------------------------------------------------------
const popupWithImage = new PopupWithImage(".image");

//--------passando os parametros e dados para abrir a imagem-----//
const cardElement = document.querySelectorAll(".places__image");
cardElement.forEach( cardElement =>{ 
  cardElement.addEventListener("click", (event) => {
    const clickedCard = event.currentTarget;
    const imageUrl = clickedCard.getAttribute("src");
    const imageAlt = clickedCard.getAttribute("alt");
    const description = clickedCard.nextElementSibling.textContent;
    popupWithImage.open(imageUrl, imageAlt, description);
  });  
});


//--------------------popup para os cards criados individualmente ---//
const placesContainer = document.querySelector(".places");
placesContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  
  if(clickedElement.classList.contains("places__image")){
    const imageUrl = clickedElement.getAttribute("src");
    const imageAlt = clickedElement.getAttribute("alt");
    const description = clickedElement.nextElementSibling.textContent;
    popupWithImage.open(imageUrl, imageAlt, description);
  }
})

//---------botao para fechar a imagem----//
const closeButtonImage = document.querySelector(".image__close");
closeButtonImage.addEventListener("click", () => {
  popupWithImage.close();
});