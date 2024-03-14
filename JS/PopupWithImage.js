//terminar
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor() {
        super(".image")
    }

    open(name, link){
        const fullImageElement = fullScreenImage.querySelector(".image__full");
        const subtitleElement = fullScreenImage.querySelector(".image__subtitle");
      
      //atribuindo os dados nos campos especificos
        fullImageElement.src = link;
        fullImageElement.alt = name;
        subtitleElement.textContent = name;
    }
}