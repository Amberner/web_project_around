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
const fullScreenImage = document.querySelector(".image");
const closeButtonImage = document.querySelector(".image__close");
const popupSaveCards = document.querySelector("#saveButtonCard");

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

    //abrir a imagem fullScreen
    /*_openFullImage(){
      fullScreenImage.classList.add("fade");
      //atualizar a imagem e o subtitulo da div imagem
      const fullImageElement = fullScreenImage.querySelector(".image__full");
      const subtitleElement = fullScreenImage.querySelector(".image__subtitle");
      
      //atribuindo os dados nos campos especificos
      fullImageElement.src = this._link;
      fullImageElement.alt = this._name;
      subtitleElement.textContent = this._name;
    };*/

    //fechar a imagem fullScreen
    _closeFullImage(){
      fullScreenImage.classList.remove("fade");
    };

    // ------------------------------------Eventos para os cards pré renderizados-------------------------------------------
    _setEventListeners(){
      //const imageElement = this._element.querySelector(".places__image");
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

      //abre a Imagem fullScreen
      //imageElement.addEventListener("click", () => {
      //  this._openFullImage();
      //});

      //fechar no botao
      closeButtonImage.addEventListener("click", () => {
        this._closeFullImage();
      });
      //fechar clicando na imagem 
      fullScreenImage.addEventListener("click", () => {
        this._closeFullImage();
      });
    };
};

//----------------------------------------------Gera os cards individuais-------------------------------------------------------
popupSaveCards.addEventListener("click", (event) => {
  event.preventDefault();
// pegando os dados dos inputs
  const inputTitle = document.querySelector("#inputCardTitle");
  const valueTitle = inputTitle.value;
  const inputLink = document.querySelector("#inputCardUrl");
  const valueLink = inputLink.value;
  
  if (valueTitle !== "" && valueLink !== "") {
    // enviando os dados para a classe Card
    const card = new Card(valueTitle, valueLink);
    // gerando o cartão
    const cardElement = card.generateCard();
    // adicioando o cartão gerado   
    document.querySelector(".places").prepend(cardElement);
    // Limpando os inputs 
    inputTitle.value = "";
    inputLink.value = "";
  };
});