//------------------------------------ importando os metodos --------------------------------------------
import Validation from "./FormValidator.js";
import Card, { initialCards } from "./card.js";
import	Section from "./Section.js"
//import PopupWithForm from "./PopupWithForm.js";

/*const popupProfile = new PopupWithForm (() => {
  
}, ".popups")*/
//------------------------------------ criando o FormValidator com os seus parametros -------------------
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
  formSelector: ".popup__cards-form",
  inputSelector: ".popup__cards-input",
  submitButtonSelector: ".popup__cards-submit",
  buttonError: "popups__cards-submit_error",
  inputErrorClass: "popup__cards-input_error",
}, document.querySelector(".popup__cards-form")); 

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