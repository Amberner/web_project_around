/*import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(submitCallBack, popupSelection) {
        super(popupSelection)
        this._form = document.querySelector(formSelector);
        this._submitCallBack = submitCallBack;
    }

    _getInputValues() {
        const formData = new FormData(this._form);
        return Object.fromEntries(formData.entries());
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const formData = this._getInputValues();
            this._submitCallBack(formData);
            this.close();
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}*/
