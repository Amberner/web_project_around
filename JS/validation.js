function checkFormValidityCards(formElementCards, config) {
    const inputListCard = formElementCards.querySelectorAll(config.inputSelectorCards);
    let isFormValid = true;

    inputListCard.forEach((input) => {
        if (!input.checkValidity()) {
            isFormValid = false;
        }
    });

    const submitElementCards = formElementCards.querySelector(config.submitButtonSelectorCards);

    if (isFormValid) {
        submitElementCards.disabled = false;
    } else {
        submitElementCards.disabled = true;
    }
};

function checkFormValidityProfile(formElement, config) {
    const inputList = formElement.querySelectorAll(config.inputSelectorProfile);
    let isFormValid = true;

    inputList.forEach((input) => {
        if (!input.checkValidity()) {
            isFormValid = false;
        }
    });

    const submitElement = formElement.querySelector(config.submitButtonSelectorProfile);

    if (isFormValid) {
        submitElement.disabled = false;
    } else {
        submitElement.disabled = true;
    }
}

function checkInputValidityCards(input, config) {
    const isInputValid = input.checkValidity();
    const errorElementCards = input.nextElementSibling;
    const buttonDisabledCards = document.querySelector(config.submitButtonSelectorCards)
    if (isInputValid) {
        buttonDisabledCards.classList.remove(config.submitButtonErrorClassProfile)
        input.classList.remove(config.inputErrorClassCard);
        errorElementCards.classList.remove(config.errorClassProfile);
        errorElementCards.textContent = ""
    }else {
        buttonDisabledCards.classList.add(config.submitButtonErrorClassProfile)
        input.classList.add(config.inputErrorClassCard);
        errorElementCards.classList.add(config.errorClassCard);
        errorElementCards.textContent = input.validationMessage
    }

    const formElementCards = input.closest(config.formSelectorCards);
    checkFormValidityCards(formElementCards, config);
}

function checkInputValidityProfile(input, config) {
    const isInputValid = input.checkValidity();
    const errorElement = input.nextElementSibling;
    const buttonDisabled = document.querySelector(config.submitButtonSelectorProfile)
    if (isInputValid) {
        buttonDisabled.classList.remove(config.submitButtonErrorClassProfile)
        input.classList.remove(config.inputErrorClassProfile);
        errorElement.classList.remove(config.errorClassProfile);
        errorElement.textContent = ""
    }else {
        buttonDisabled.classList.add(config.submitButtonErrorClassProfile)
        input.classList.add(config.inputErrorClassProfile);
        errorElement.classList.add(config.errorClassProfile);
        errorElement.textContent = input.validationMessage
    }

    const formElement = input.closest(config.formSelectorProfile);
    checkFormValidityProfile(formElement, config);
}

function enableValidation(config){
    // profile
    const formElementProfile = document.querySelector(config.formSelectorProfile);
    const inputListProfile = formElementProfile.querySelectorAll(config.inputSelectorProfile);
    //cards
    const formElementCards = document.querySelector(config.formSelectorCards);
    const inputListCard = formElementCards.querySelectorAll(config.inputSelectorCards);

    //verificação do profile
    inputListProfile.forEach((input) => {
        input.addEventListener("input", (event) => {
            checkInputValidityProfile(event.target, config);
        });
    });

    //verificação do cards 
    inputListCard.forEach((input) => {
        input.addEventListener("input", (event) => {
            checkInputValidityCards(event.target, config);
        });
    });
}


enableValidation({
    //profile
    formSelectorProfile: ".popups__form",
    inputSelectorProfile: ".popups__input",
    submitButtonSelectorProfile: ".popups__form-submit",
    inactiveButtonClassProfile: ".popups__form-submit",
    submitButtonErrorClassProfile: "popups__form-submit_error",
    //cards
    formSelectorCards: ".popup__cards-form",
    inputSelectorCards: ".popup__cards-input",
    submitButtonSelectorCards: ".popup__cards-submit",
    inactiveButtonClassCards: ".popup__cards-submit",
    //mensagem de erro profile
    inputErrorClassProfile: "popups__input_error",
    errorClassProfile: ".popups__form-error",
    //mensagem de erro cards
    inputErrorClassCard: "popup__cards-input_error",
    errorClassCard: ".popup__cards-error",
  }); 