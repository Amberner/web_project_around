let openButton = document.querySelector("#open-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector("#close-button")
let saveButton = document.querySelector("#save-button");
let profileName = document.querySelector(".profile__name")
let profileDescription = document.querySelector(".profile__description")
let likeButton = document.querySelectorAll(".place__button")
console.log(likeButton)

//abrir o editor do usuario
function pushOpen(){
    popup.style.display = "block";
}
openButton.addEventListener("click", pushOpen);

//fecha o editor do usuario
function pushClose(){
    popup.style.display = "none"
}
closeButton.addEventListener("click", pushClose)

//enviar os dados do formulario
saveButton.addEventListener("click", function(e){

    e.preventDefault();
//para pegar o valor do nome
    let inputName = document.querySelector("#inputName");
    let valueName = inputName.value;
//para pegar o valor da descrição
    let inputDescription = document.querySelector("#inputDescription");
    let valueDescription = inputDescription.value;

//logar no console
    console.log(valueName);
    console.log(valueDescription)

    profileName.textContent = valueName;
    profileDescription.textContent = valueDescription;
})

likeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Botão de like clicado!");
      if (button.classList.contains("place__button-active")) {
        button.classList.remove("place__button-active");
        button.classList.add("place__button");
      } else {
        button.classList.remove("place__button");
        button.classList.add("place__button-active");
      }
    });
  });
