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
const inputName = document.querySelector("#inputNamePopup");
const inputDescription = document.querySelector("#inputDescriptionPopup")
//popupCards
const inputTitle = document.querySelector("#inputCardTitle");
const inputLink = document.querySelector("#inputCardUrl");
const placesSection = document.querySelector(".places");
const cardTitle = document.querySelector(".places__title");
const cardUrl = document.querySelector(".places__image")
const placesCardTemplate = document.querySelector("#placesCardsTemplate");
const popupCards = document.querySelector(".popup__cards");
const popupOpenCards = document.querySelector(".profile__photo-edit");
const popupCloseCards = document.querySelector(".popup__cards-close");
const popupSaveCards = document.querySelector("#saveButtonCard");
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
]


//abrir o editor do usuario
function pushOpen(event){
    event.stopPropagation();
    popup.classList.add("fade");
};
openButton.addEventListener("click", pushOpen);

//fecha o editor do usuario
function pushClose(){
    popup.classList.remove("fade");
};

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

//função para avisos do formulario
function showInputError(inputElement, errorMessage) {
  const errorElement = document.querySelector(`[data-error-for="${inputElement.id}"]`);
  if (errorElement) {
    errorElement.textContent = errorMessage;
  }
}
//função para esconder as messagens de erro
function hideInputError(inputElement) {
  const errorElement = document.querySelector(`[data-error-for="${inputElement.id}"]`);
  const errorElementDescription = document.querySelector(`[data-error-for="inputDescriptionPopup"]`);
  if (errorElement || errorElementDescription)  {
    errorElement.textContent = "";
  }
}

//função para a validação para o nome em tempo real
function inputValidationName(event) {
  const inputElement = event.target;

  if (!inputElement.validity.valid) {
    if (inputElement.validity.valueMissing) {
      showInputError(inputElement, "Campo obrigatório. Preencha este campo.");
    } else if (inputElement.validity.tooShort) {
      showInputError(inputElement, "Caracteres insuficientes. O mínimo é " + inputElement.minLength + " caracteres.");
    } else {
      showInputError(inputElement, "Preencha corretamente este campo.");
    }

    inputName.classList.add("popups__input_error");
    saveButton.classList.add("popups__form-submit_error");
  } else {
    inputName.classList.remove("popups__input_error");
    saveButton.classList.remove("popups__form-submit_error");
    hideInputError(inputElement);
  }
}

//função para a validação para a descrição em tempo real
function inputValidationDescription(event) {
  const inputElement = event.target;

  if (!inputElement.validity.valid) {
    if (inputElement.validity.valueMissing) {
      showInputError(inputElement, "Campo obrigatório. Preencha este campo.");
    } else if (inputElement.validity.tooShort) {
      showInputError(inputElement, "Caracteres insuficientes. O mínimo é " + inputElement.minLength + " caracteres.");
    } else {
      showInputError(inputElement, "Preencha corretamente este campo.");
    }

    inputDescription.classList.add("popups__input_error");
    saveButton.classList.add("popups__form-submit_error");
  } else {
    inputDescription.classList.remove("popups__input_error");
    saveButton.classList.remove("popups__form-submit_error");
    hideInputError(inputElement);
  }
}


//fechar editor de perfil
document.addEventListener("click", closeClickOutside);
document.addEventListener("keydown", closeWithEsc);

//ouvinte de evento dos formularios do perfil
inputName.addEventListener("input", inputValidationName);
inputDescription.addEventListener("input", inputValidationDescription);

//enviar os dados do formulario
saveButton.addEventListener("click", function(){
//para pegar o valor do nome
    let inputName = document.querySelector("#inputNamePopup");
    let valueName = inputName.value.trim();
//para pegar o valor da descrição
    let inputDescription = document.querySelector("#inputDescriptionPopup");
    let valueDescription = inputDescription.value.trim();

    if(!inputName.validity.valid){
      
    }else{
      profileName.textContent = valueName;
      profileDescription.textContent = valueDescription
      pushClose()
    }

});

//abrir formulario para criação dos cards (metodo arrow usado)
popupOpenCards.addEventListener("click",(event) =>{
  event.stopPropagation();
  popupCards.classList.add("fade");
});

//função para fechar cards
function closeCardsEdit() {
  popupCards.classList.remove("fade");
}

//fechar formulario para criação dos cards
popupSaveCards.addEventListener("click", closeCardsEdit)

//fecha o formulario clicando no display e no botao fechar 
document.addEventListener("click", closeClickOutside);

// ouvinte da validação dos card
inputTitle.addEventListener("input", inputValidationCardTitle);
inputLink.addEventListener("input", inputValidationCardUrl)

//iniciar os primeiros cards
function firstCards(name, link){
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
    };
  });

  //evento de clique ao botao deletar
  const deleteButton = newCard.querySelector(".places__button_delete");
  deleteButton.addEventListener("click", function(){
   deleteCard(cardId)
  });

  //abre a imagem se clicar
  const openImage = newCard.querySelector(".places__image");
  openImage.addEventListener("click", function(){
   imagemFullOpen.classList.add("fade")
   openFullscreenImage(link, name) 
  });

  //fechar a imagem
  closeImage.addEventListener("click", function(){
    imagemFullOpen.classList.remove("fade")
  });
  imagemFullOpen.addEventListener("click", function(){
    imagemFullOpen.classList.remove("fade")
  });

 return newCard;
};

//função de adicionar cards iniciais
function addCardsToSection(cards) {
  cards.forEach(function (card) {
    const newCard = firstCards(card.name, card.link); 
    placesSection.appendChild(newCard);
  });
}
addCardsToSection(initialCards);

//função abri imagem correspondente fullScreen
function openFullscreenImage(imageUrl, imageTitle){
  const fullScreenImage = document.querySelector(".image__full");
  const fullScreenImageTitle = document.querySelector(".image__subtitle");

  fullScreenImage.src = imageUrl;
  fullScreenImageTitle.textContent = imageTitle
};

//função que deleta o cartão
function deleteCard(cardId) {
  //encontra o card pelo ID
  const cardToDelete = document.querySelector(`[data-card-id="${cardId}"]`);

  //remove o card encontrado
  if (cardToDelete) {
    cardToDelete.remove()
  };
};

//função de verificar o formulario cards TITULO
function showCardsErrorTitle (inputElement, errorMessage) {
  const errorElementTitle = document.querySelector(`[data-error-for="cardNameError"]`);
  if (errorElementTitle ) {
    errorElementTitle.textContent = errorMessage;
  }
}

//função doida que eu encontrei na internet para validar o URL
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

//função de verificar o formulario cards URL
function showCardsErrorUrl (inputElement, errorMessage) {
  const errorElementUrl = document.querySelector(`[data-error-for="cardUrlError"]`);

  if (errorElementUrl) {
    errorElementUrl.textContent = errorMessage;
  }
}

// função para esconder as messagem de error do formulario dos cards TITULO
function hideCardsErrorTitle(inputElement) {
  const errorElementTitle = document.querySelector(`[data-error-for="cardNameError"]`);
  if (errorElementTitle )  {
    errorElementTitle.textContent = "";
  }
}
//função para esconder as messagem de error do formulario dos cards URL
function hideCardsErrorUrl() {
  const errorElementUrl = document.querySelector(`[data-error-for="cardUrlError"]`);
  if (errorElementUrl) {
    errorElementUrl.textContent = "";
  }
}

//função para avisos do formulario dos cards titulo
function inputValidationCardTitle(event) {
  const inputElement = event.target;
  const errorElementId = "cardTitleError";

  if (!inputElement.validity.valid) {
    if (inputElement.validity.valueMissing) {
      showCardsErrorTitle(inputElement, "Campo obrigatório. Preencha este campo.", errorElementId);
    } else if (inputElement.validity.tooShort) {
      showCardsErrorTitle(inputElement, "Caracteres insuficientes. O mínimo é " + inputElement.minLength + " caracteres.", errorElementId);
    } else {
      showCardsErrorTitle(inputElement, "Preencha corretamente este campo.", errorElementId);
    }
    
    inputElement.classList.add("popup__cards-input_error");
    popupSaveCards.classList.add("popups__cards-submit_error");
  } else {
    inputElement.classList.remove("popup__cards-input_error");
    popupSaveCards.classList.remove("popups__cards-submit_error");
    hideCardsErrorTitle(errorElementId);
  }
}

//função para avisos do formularios dos cards Url
function inputValidationCardUrl(event) {
  const inputElement = event.target;
  const errorElementId = "cardUrlError";

    if (!isValidUrl(inputElement.value)) {
    showCardsErrorUrl(inputElement, "URL inválido. Por favor, insira um URL válido.");
    inputElement.classList.add("popup__cards-input_error");
    popupSaveCards.classList.add("popups__cards-submit_error");
  } else {
    inputElement.classList.remove("popup__cards-input_error");
    popupSaveCards.classList.remove("popups__cards-submit_error");
    hideCardsErrorUrl();
  }
}

//Botão de Save dos cards
popupSaveCards.addEventListener("click", () => {
  // Pega os valores dos campos do formulário
  const valueTitle = inputTitle.value;
  const valueLink = inputLink.value; 

  // Verifica se o título não está vazio 
  if (!valueTitle.validity.valid && !valueLink.validity.valid){
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
   });

   //fechar a imagem
    closeImage.addEventListener("click", function(){
    imagemFullOpen.classList.remove("fade")
   });
    imagemFullOpen.addEventListener("click", function(){
    imagemFullOpen.classList.remove("fade")
   });

    //atribui um identificador unico ao card criado
    const cardId = Date.now();
    newCard.querySelector(".places__card").setAttribute("data-card-id", cardId);

    //evento de clique ao botão deletar por meio do Id
    const deleteButton = newCard.querySelector(".places__button_delete");
    deleteButton.addEventListener("click", function(){
      deleteCard(cardId);
    });
    
    // Adiciona o novo card à seção de lugares
    placesSection.prepend(newCard);
    
    // Limpa os campos do formulário
    inputTitle.value = "";
    inputLink.value = "";
    
  
  }
  
  const likeButton = document.querySelector(".places__button");
  likeButton.addEventListener("click", function (){
    if (likeButton.classList.contains("places__button-active")) {
      likeButton.classList.remove("places__button-active");
      likeButton.classList.add("places__button");
    } else {
      likeButton.classList.remove("places__button");
      likeButton.classList.add("places__button-active");
    };
  });
});