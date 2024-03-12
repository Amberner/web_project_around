// Popup.js

export default class Popup {
    constructor(popupSelector) {
        if (!popupSelector) {
            throw new Error("Popup selector is required");
        }
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this.setEventListeners();
    }

    open() {
        document.addEventListener("keydown", this._handleEscClose);
        this._popup.classList.add("fade");
    }

    close() {
        document.removeEventListener("keydown", this._handleEscClose);
        this._popup.classList.remove("fade");
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        
        document.addEventListener("click", (evt) => {
            if (evt.target === this._popup) {
                this.close();
            }
        });
    }
}