let ajoutInput1 = document.getElementById("ajoutInput1");
let ajoutInputDiv = document.getElementById("ajoutInputDiv");
//Ajoute un input au calcul des dépenses
ajoutInput1.addEventListener("click", function () {
    let createDiv = document.createElement("div");
    let createInput = document.createElement("input");
    let createSpan = document.createElement("span");
    createInput.className = "expenses";
    createSpan.innerHTML = "€";
    ajoutInputDiv.appendChild(createDiv);
    createDiv.appendChild(createInput);
    createDiv.appendChild(createSpan);
});

let ajoutInput2 = document.getElementById("ajoutInput2");
let ajoutInputDiv2 = document.getElementById("ajoutInputDiv2");
//Ajoute un input au calcule des recettes
ajoutInput2.addEventListener("click", function () {
    let createDiv = document.createElement("div");
    let createInput = document.createElement("input");
    let createSpan = document.createElement("span");
    createInput.className = "revenue";
    createSpan.innerHTML = "€";
    ajoutInputDiv2.appendChild(createDiv);
    createDiv.appendChild(createInput);
    createDiv.appendChild(createSpan);
});

//Calcul des dépenses: Bouton permettant d'écrire la valeur des input additionnés dans le texte "total des dépenses: "
document.getElementById("totalExpenses").addEventListener("click", function () {
    let inputExpenses = document.getElementsByClassName("expenses");
    for (let i = 0; i <= inputExpenses.length; i++){
        let resultExpenses1 = inputExpenses.item(i).value;
        let resultExpenses2 = inputExpenses.item(i).value;
        if ((i % 2 ) === 0){
            console.log(("impaire" + resultExpenses1));
            resultExpenses1 = inputExpenses.item(i).value;

        }
        if ((i % 2) === 1){
            console.log("paire" + resultExpenses2);
            resultExpenses2 = inputExpenses.item(i).value;
        }
        let resultTotalExpenses = 0;
        resultTotalExpenses = parseFloat(resultExpenses1) + parseFloat(resultExpenses2);
        document.getElementById("totalResultExpenses").innerHTML += resultTotalExpenses;
    }
});

//Calcul de l'épargne: Bouton permettant d'écrire la valeur de l'input dans le texte "total de l'épargne : "
let inputSavings;
document.getElementById("totalSavings").addEventListener("click", function () {
    inputSavings = document.getElementById("savings").value;
    document.getElementById("totalResultSavings").innerHTML += inputSavings + " €";
});

//Calcul du budget: Bouton permettant d'écrire la valeur de tous les input dans "Résultat : "
document.getElementById("resultBudget").addEventListener("click", function () {
    document.getElementById("result").innerHTML += inputSavings + " €";
});









//Bouton reset des champs (input)
document.getElementById("reset").addEventListener("click", function (){
    let input = document.getElementsByTagName("input");
    for (let i = 0; i <= input.length; i++){
        input.item(i).value = " ";
    }
});