export default class Popup {
  constructor(popupSelector) {
      if (!popupSelector) {
          throw new Error("Popup selector is required!!");
      }
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
      this._handleOutsideClick = this._handleOutsideClick.bind(this);
      this._isOpened = false; 
  }

  open() {
      if (!this._isOpened) {
          document.addEventListener("keydown", this._handleEscClose);
          this._popup.classList.add("fade");
          this.setEventListeners();
          this._isOpened = true;
      }
  }

  close() {
      if (this._isOpened) {
          document.removeEventListener("keydown", this._handleEscClose);
          this._popup.classList.remove("fade");
          this.removeEventListeners();
          this._isOpened = false;
      }
  }

  _handleEscClose(evt) {
      if (evt.key === "Escape") {
          this.close();
      }
  }

  _handleOutsideClick(evt) {
      if (evt.target === this._popup) {
          this.close();
      }
  }

  setEventListeners() {
      this._popup.addEventListener("click", this._handleOutsideClick);
  }

  removeEventListeners() {
      this._popup.removeEventListener("click", this._handleOutsideClick);
  }
}
