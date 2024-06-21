import Popup from "./Popup.js"

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup-confirm__form');
    this._submitButton = this._form.querySelector('.popup-confirm__delete-button');
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this.setEventListeners();
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    if (this._handleFormSubmit) {
      this._handleFormSubmit();
    }
  }

  setEventListeners() {
    this._submitButton.addEventListener('click', this._handleFormSubmit);
  }

  removeEventListeners() {
    this._submitButton.removeEventListener('click', this._handleFormSubmit);
  }
}