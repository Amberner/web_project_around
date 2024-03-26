import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = this._popup.querySelector(".image__full");
        this._descriptionElement = this._popup.querySelector(".image__subtitle");
    }

    _updateImage(imageUrl, imageAlt){
        this._imageElement.src = imageUrl;
        this._imageElement.alt = imageAlt;
    }

    _updateDescription(description){
        this._descriptionElement.textContent = description;
    }

    _addFadeClass(){
        this._popup.classList.add("fade");
    }

    open(imageUrl, imageAlt, description) {
        this._updateImage(imageUrl, imageAlt);
        this._updateDescription(description);
        this._addFadeClass();
        super.open();
    }
}