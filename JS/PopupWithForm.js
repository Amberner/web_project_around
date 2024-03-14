import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector,handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formElement = this._popup.querySelector(".popup__form");
    }

    _getInputValues(){
        const inputs = Array.from(this._formElement.querySelector(".popup__input"));
        const values = {};
        inputs.forEach(input => {
            values[input.name] = input.value;
        });
        return values;
    };

    setEventListeners(){
        super.setEventListeners("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
        })
    };
    
    close(){
        super.close();
        this._formElement.reset();
    };

    
}