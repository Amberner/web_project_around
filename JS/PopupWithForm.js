import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(submitCallback, popupSelector, formSelector) {
        super(popupSelector);
        this._formElement = this._popup.querySelector(formSelector);
        this._submitCallback = submitCallback;
        this.setEventListeners();
    }
    
    _getInputValues() {
        const formData = new FormData(this._formElement);
        return Object.fromEntries(formData.entries());
    }
    
    close() {
        super.close();
        if (this._formElement) {
            this._formElement.reset();
        }
    }
    
    setEventListeners() {
        super.setEventListeners();
        if (this._formElement) {
            this._formElement.addEventListener("submit", (evt) => {
                evt.preventDefault();
                const formData = this._getInputValues();
                this._submitCallback(formData);
                this.close();
            });
        }
    }
}