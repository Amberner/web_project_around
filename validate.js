//função para avisos do formulario
export function showInputError(inputElement, errorMessage) {
    const errorElement = document.querySelector(`[data-error-for="${inputElement.id}"]`);
    if (errorElement) {
      errorElement.textContent = errorMessage;
    }
  }

//função para esconder as messagens de erro
 export function hideInputError(inputElement) {
  const errorElement = document.querySelector(`[data-error-for="${inputElement.id}"]`);
  const errorElementDescription = document.querySelector(`[data-error-for="inputDescriptionPopup"]`);
  if (errorElement || errorElementDescription)  {
    errorElement.textContent = "";
  }
}
//função de validação para o nome do perfil em tempo real
export function inputValidationName(event) {
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

//função para a validação para a descrição do perfil em tempo real
export function inputValidationDescription(event) {
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

//função de verificar o formulario cards TITULO
export function showCardsErrorTitle (inputElement, errorMessage) {
    const errorElementTitle = document.querySelector(`[data-error-for="cardNameError"]`);
    if (errorElementTitle ) {
      errorElementTitle.textContent = errorMessage;
    }
  }

// função para esconder as messagem de error do formulario dos cards TITULO
export function hideCardsErrorTitle(inputElement) {
    const errorElementTitle = document.querySelector(`[data-error-for="cardNameError"]`);
    if (errorElementTitle )  {
      errorElementTitle.textContent = "";
    }
  }

//função doida que eu encontrei na internet para validar o URL
export function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

//função de verificar o formulario cards URL
export function showCardsErrorUrl (inputElement, errorMessage) {
    const errorElementUrl = document.querySelector(`[data-error-for="cardUrlError"]`);
  
    if (errorElementUrl) {
      errorElementUrl.textContent = errorMessage;
    }
  }

//função para esconder as messagem de error do formulario dos cards URL
export function hideCardsErrorUrl() {
    const errorElementUrl = document.querySelector(`[data-error-for="cardUrlError"]`);
    if (errorElementUrl) {
      errorElementUrl.textContent = "";
    }
  }

// função para desativar ou ativa o botão save
export function updateSaveButtonState() {
    const inputTitle = document.querySelector("#inputCardTitle");
    const inputLink = document.querySelector("#inputCardUrl");
    const saveButton = document.querySelector("#saveButtonCard");
  
    if (inputTitle.validity.valid && isValidUrl(inputLink.value)) {
      saveButton.removeAttribute("disabled"); 
      popupSaveCards.classList.remove("popups__cards-submit_error");
      inputElement.classList.remove("popup__cards-input_error");
    } else {
      saveButton.setAttribute("disabled", true); 
      popupSaveCards.classList.add("popups__cards-submit_error");
      inputElement.classList.add("popup__cards-input_error");
    }
  }

//função para avisos do formulario dos cards titulo
export function inputValidationCardTitle(event) {
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
      
      
    } else {
      
      
      hideCardsErrorTitle(errorElementId);
    }
    updateSaveButtonState();
  }

//função para avisos do formularios dos cards Url
export function inputValidationCardUrl(event) {
    const inputElement = event.target;
    const errorElementId = "cardUrlError";
  
      if (!isValidUrl(inputElement.value)) {
      showCardsErrorUrl(inputElement, "URL inválido. Por favor, insira um URL válido.");
    } else {
      hideCardsErrorUrl();
    }
    updateSaveButtonState();
  }
  