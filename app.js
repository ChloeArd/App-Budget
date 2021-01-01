let ajoutInput1 = document.getElementById("ajoutInput1");
let ajoutInputDiv = document.getElementById("ajoutInputDiv");
//Ajoute un input au calcul des dépenses
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

let ajoutInput2 = document.getElementById("ajoutInput2");
let ajoutInputDiv2 = document.getElementById("ajoutInputDiv2");
//Ajoute un input au calcule des recettes
ajoutInput2.addEventListener("click", function () {
    let createDiv = document.createElement("div");
    let createInput = document.createElement("input");
    let createSpan = document.createElement("span");
    createInput.className = "revenue"
    createSpan.innerHTML = "€";
    ajoutInputDiv2.appendChild(createDiv);
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