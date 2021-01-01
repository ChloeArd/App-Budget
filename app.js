let ajoutInput1 = document.getElementById("ajoutInput1");
let ajoutInputDiv = document.getElementById("ajoutInputDiv");
//Ajoute un input
ajoutInput1.addEventListener("click", function () {
    let createDiv = document.createElement("div");
    let createInput = document.createElement("input");
    let createSpan = document.createElement("span");
    createInput.className = "expenses"
    createSpan.innerHTML = "€";
    ajoutInputDiv.appendChild(createDiv);
    createDiv.appendChild(createInput);
    createDiv.appendChild(createSpan);
})























//Bouton reset des champs (input)
document.getElementById("reset").addEventListener("click", function (){
    let input = document.getElementsByTagName("input");
    for (let i = 0; i <= input.length; i++){
        input.item(i).value = " ";
    }
});