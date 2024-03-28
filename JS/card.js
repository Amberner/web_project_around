export const initialCards = [
    {
      name: "Vale de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      name: "Montanhas Carecas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      name: "Parque Nacional da Vanoise ",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ]

export default class Card {
    constructor(name, link){
        this._name = name,
        this._link = link
    };

    _getTemplate() {
        const cardElement = document
        .querySelector(".places_card_template")
        .content
        .querySelector(".places__card")
        .cloneNode(true);

        return cardElement;
    };

    generateCard(){
        this._element = this._getTemplate();
        //adiciona os eventos ouvintes
        this._setEventListeners();

        this._element.querySelector(".places__title").textContent = this._name;
        
        const imageElement = this._element.querySelector(".places__image");
        imageElement.src = this._link;
        imageElement.alt = this._name;

        return this._element;
    };

    //------------------------------------- metodos dos eventListeners------------------------------------------------------
    //mudar o estado do botão Like 
    _likeButtonAction(){
      const likeButton = this._element.querySelector(".places__button");
      likeButton.classList.toggle("places__button-active");
    };

    //botão para deletar o card
    _deleteCard(){
      this._element.remove()
    };

    // ------------------------------------Eventos para os cards -------------------------------------------
    _setEventListeners(){
      const deleteButton = this._element.querySelector(".places__button_delete");
      const likeButton = this._element.querySelector(".places__button");

      //botão de dar like
      likeButton.addEventListener("click", (event) => {
        this._likeButtonAction(event);
      });

      //deletar o card
      deleteButton.addEventListener("click", () => {
        this._deleteCard();
      });

    };
};