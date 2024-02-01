//template 
const cardTemplate = document.querySelector("#placesCardsTemplate");
//imagem FullScreen
const imagemFullOpen = document.querySelector(".image");
const closeImage = document.querySelector(".image__close");
//popupFormularios 
const openButton = document.querySelector("#openButton");
const popup = document.querySelector(".popups");
const closeButton = document.querySelector("#closeButton");
const saveButton = document.querySelector("#saveButtonPopup");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const likeButton = document.querySelectorAll(".places__button");
//popupCards
const placesSection = document.querySelector(".places");
const cardTitle = document.querySelector(".places__title");
const cardUrl = document.querySelector(".places__image")
const placesCardTemplate = document.querySelector("#placesCardsTemplate");
const popupCards = document.querySelector(".popup__cards");
const popupOpenCards = document.querySelector(".profile__photo-edit");
const popupCloseCards = document.querySelector(".popup__cards-close");
const popupSaveCards = document.querySelector("#saveButtonCard");



//abrir o editor do usuario
function pushOpen(event){
    event.stopPropagation();
    popup.classList.add("fade");
}
openButton.addEventListener("click", pushOpen);

//fecha o editor do usuario
function pushClose(){
    popup.classList.remove("fade");
}

//fechar editores com esc
function closeWithEsc(evt){
  if(evt.key === "Escape"){
    pushClose()
    closeCardsEdit()
  }
}

//fecha o editor do usuario e dos cards clicando no display ou no botão fechar 
function closeClickOutside(event) {
  if (!event.target.closest(".popups__form") && (!event.target.closest(".popup__cards-form"))){
    popup.classList.remove("fade");
    popupCards.classList.remove("fade");
  };
};

//fechar editor de perfil
document.addEventListener("click", closeClickOutside);
document.addEventListener("keydown", closeWithEsc);
saveButton.addEventListener("click", pushClose)

//enviar os dados do formulario
saveButton.addEventListener("click", function(event){
  event.preventDefault()

//para pegar o valor do nome
    let inputName = document.querySelector("#inputNamePopup");
    let valueName = inputName.value;
//para pegar o valor da descrição
    let inputDescription = document.querySelector("#inputDescriptionPopup");
    let valueDescription = inputDescription.value;

    profileName.textContent = valueName;
    profileDescription.textContent = valueDescription;
})

//abrir formulario para criação dos cards (metodo arrow usado)
popupOpenCards.addEventListener("click",(event) =>{
  popupCards.classList.add("fade");
  event.stopPropagation();
})

//fechar formulario para criação dos cards
popupSaveCards.addEventListener("click",() => {
  popupCards.classList.remove("fade");
})

//função de fechar o formulario cards com esc
function closeCardsEdit(){
  popupCards.classList.remove("fade");
}


//iniciar os primeiros cards!!!
/*function fistCards(name, link){
  const newCard = cardTemplate.content.cloneNode(true);
  
  // identificador unico a cada card
  const cardId = Date.now()
  newCard.querySelector(".places__card").setAttribute("data-card-id", cardId);
  newCard.querySelector(".places__title").textContent = name;
  newCard.querySelector(".places__image").src = link;
  
  //botão like dos cards padrão
  const likeButton = newCard.querySelector(".places__button");
  likeButton.addEventListener("click", function () {
    if (likeButton.classList.contains("places__button-active")) {
      likeButton.classList.remove("places__button-active");
      likeButton.classList.add("places__button");
    } else {
      likeButton.classList.remove("places__button");
      likeButton.classList.add("places__button-active");
    }
  });

  //evento de clique ao botao deletar
   const deleteButton = newCard.querySelector(".places__button_delete");
   deleteButton.addEventListener("click", function(){
    deleteCard(cardId)
   })

   //abre a imagem se clicar
   const openImage = newCard.querySelector(".places__image");
   openImage.addEventListener("click", function(){
    imagemFullOpen.classList.add("fade")
    openFullscreenImage(link, name) 
   })

   //fechar a imagem
   closeImage.addEventListener("click", function(){
     imagemFullOpen.classList.remove("fade")
   })
   imagemFullOpen.addEventListener("click", function(){
     imagemFullOpen.classList.remove("fade")
   })

  return newCard;
}*/


//função que deleta o cartão
function deleteCard(cardId) {
  //encontra o card pelo ID
  const cardToDelete = document.querySelector(`[data-card-id="${cardId}"]`);

  //remove o card encontrado
  if (cardToDelete) {
    cardToDelete.remove()
  }
}

//função abri imagem correspondente fullScreen
function openFullscreenImage(imageUrl, imageTitle){
  const fullScreenImage = document.querySelector(".image__full");
  const fullScreenImageTitle = document.querySelector(".image__subtitle");

  fullScreenImage.src = imageUrl;
  fullScreenImageTitle.textContent = imageTitle
}


//função de adicionar cards iniciais!!!
/*function addCardsToSection(cards){
  cards.forEach(function (card) {
    const newCard = fistCards(card.name, card.link);
    placesSection.appendChild(newCard)
  });
}
addCardsToSection(initialCards);*/

popupSaveCards.addEventListener("click", (event) => {
  event.preventDefault()

  // Pega os valores dos campos do formulário
  const inputTitle = document.querySelector("#inputCardTitle");
  const valueTitle = inputTitle.value;
  const inputLink = document.querySelector("#inputCardUrl");
  const valueLink = inputLink.value; 

  // Verifica se o título não está vazio 
  if (valueTitle !== "" && valueLink !== ""){
    // Clona o conteúdo do template
    const newCard = document.importNode(cardTemplate.content, true);

    // Preenche as informações no novo card
    newCard.querySelector(".places__title").textContent = valueTitle;
    newCard.querySelector(".places__image").src = valueLink;

    //abrir imagem fullScreen
    const openImage = newCard.querySelector(".places__image");
    openImage.addEventListener("click", function(){
    imagemFullOpen.classList.add("fade") 
    openFullscreenImage(valueLink, valueTitle)
   })

   //fechar a imagem
    closeImage.addEventListener("click", function(){
    imagemFullOpen.classList.remove("fade")
   })
    imagemFullOpen.addEventListener("click", function(){
    imagemFullOpen.classList.remove("fade")
   }) 

    //atribui um identificador unico ao card criado
    const cardId = Date.now();
    newCard.querySelector(".places__card").setAttribute("data-card-id", cardId)

    //evento de clique ao botão deletar por meio do Id
    const deleteButton = newCard.querySelector(".places__button_delete");
    deleteButton.addEventListener("click", function(){
      deleteCard(cardId);
    })
    
    // Adiciona o novo card à seção de lugares
    placesSection.prepend(newCard);
    
    // Limpa os campos do formulário
    inputTitle.value = "";
    inputLink.value = "";
    
  } else {
    popupSaveCards.disabled = true
  }
  
  const likeButton = document.querySelector(".places__button");
  likeButton.addEventListener("click", function (){
    if (likeButton.classList.contains("places__button-active")) {
      likeButton.classList.remove("places__button-active");
      likeButton.classList.add("places__button");
    } else {
      likeButton.classList.remove("places__button");
      likeButton.classList.add("places__button-active");
    }
  })
});


