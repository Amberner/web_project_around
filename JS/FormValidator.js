export default class Validation {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = this._formElement.querySelectorAll(this._config.inputSelector);
        this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this._checkFormValidity();
        });

        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._checkFormValidity();
            });
        });
    };

    _checkFormValidity() {
        let isFormValid = true;

        this._inputList.forEach((input) => {
            if (!input.checkValidity()) {
                isFormValid = false;
               // this._inputList.classList.toggle()
            }
        });
        if (!isFormValid){
            this._submitButton.classList.add(this._config.buttonError)
        } else{
            this._submitButton.classList.remove(this._config.buttonError)
        }
        this._submitButton.disabled = !isFormValid;
    }

    _checkInputValidity(input) {
        const isInputValid = input.checkValidity();
        const errorElement = input.nextElementSibling;

        if (isInputValid) {
            input.classList.remove(this._config.inputErrorClass);
            errorElement.textContent = "";
        } else {
            input.classList.add(this._config.inputErrorClass);
            errorElement.textContent = input.validationMessage;
        }
    }
}

