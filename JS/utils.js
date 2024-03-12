import Popup from "./Popup.js";

const popupFormProfile = new Popup(".popups");
const popupFormCards = new Popup(".popup__cards");
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


//popupFormularios 
const openButton = document.querySelector("#openButton");
const popup = document.querySelector(".popups");
const saveButton = document.querySelector("#saveButtonPopup");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
//popupCards
const popupCards = document.querySelector(".popup__cards");
const popupOpenCards = document.querySelector(".profile__photo-edit");
const popupSaveCards = document.querySelector("#saveButtonCard");

//console.log(popup)

//const popupFormCards = new Popup(".popup")
//----------------------------------------------- funçao fechar e abrir os popups do Profile --------------------------
//abrir o editor do usuario
//function pushOpen(event){
//    event.stopPropagation();
//    popup.classList.add("fade");
//}
//openButton.addEventListener("click", pushOpen);

//fecha o editor do usuario
//function pushClose(){
//    popup.classList.remove("fade");
//}

//----------------------------------------------- funçao fechar ambos editores com esc --------------------------------
//function closeWithEsc(evt){
//  if(evt.key === "Escape"){
//    pushClose()
//    closeCardsEdit()
//  }
//}

//------------------------------------ funçao fecha ambos editores clicando no display ou no botão fechar --------------- 
/*function closeClickOutside(event) {
  if (!event.target.closest(".popups__form") && (!event.target.closest(".popup__cards-form"))){
    popup.classList.remove("fade");
    popupCards.classList.remove("fade");
  };
};

//------------------------------------ event listenners fechar editor de perfil ---------------------------------------
//document.addEventListener("click", closeClickOutside);
//document.addEventListener("keydown", closeWithEsc);
//saveButton.addEventListener("click", pushClose)


//------------------------------------ abrir formulario para criação dos cards (metodo arrow usado) ----------------------
popupOpenCards.addEventListener("click",(event) =>{
  popupCards.classList.add("fade");
  event.stopPropagation();
})

//------------------------------------ fechar formulario para criação dos cards ---------------------------------------
//fechar o formulario card no save
popupSaveCards.addEventListener("click",() => {
  popupCards.classList.remove("fade");
})

//função de fechar o formulario cards 
function closeCardsEdit(){
  popupCards.classList.remove("fade");
}


//------------------------------------ enviar os dados do formulario --------------------------------------------------
saveButton.addEventListener("click", function(event){
  event.preventDefault();
// pegar o valor do nome
    let inputName = document.querySelector("#inputNamePopup");
    let valueName = inputName.value;
// pegar o valor da descrição
    let inputDescription = document.querySelector("#inputDescriptionPopup");
    let valueDescription = inputDescription.value;

    profileName.textContent = valueName;
    profileDescription.textContent = valueDescription;
});*/