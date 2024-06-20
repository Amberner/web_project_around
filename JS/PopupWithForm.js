import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(submitCallback, popupSelector, formSelector) {
        super(popupSelector);
        this._formSelector = formSelector; 
        this._submitCallback = submitCallback;
        this._formElement = this._popup.querySelector(this._formSelector);
        this._submitHandler = this._submitHandler.bind(this);
        this._formValues = {}
    }

    open() {
        super.open(); 
        this._formElement.addEventListener("submit", this._submitHandler);
    }
    
    close() {
        super.close();
        if (this._formElement) {
            this._formElement.reset();
        }
        this._formElement.removeEventListener("submit", this._submitHandler);
    }
    
    _submitHandler(evt) {
        evt.preventDefault();
        const formData = this._getInputValues();
        this._submitCallback(formData);
        //delay para fechar
        setTimeout(() => {
            this.close();
        }, 2000);
    }

    _getInputValues() {
        const formData = new FormData(this._formElement);
        return Object.fromEntries(formData.entries());
    }
}