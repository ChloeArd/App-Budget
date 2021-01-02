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

/**
//Calcul des dépenses: Bouton permettant d'écrire la valeur des input additionne dans le texte "total des dépenses: "
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
 */
let resultTotalExpenses;
document.getElementById("totalExpenses").addEventListener("click", function () {
    let inputExpenses1 = document.getElementById("expenses1").value;
    let inputExpenses2 = document.getElementById("expenses2").value;
    let inputExpenses3 = document.getElementById("expenses3").value;
    let inputExpenses4 = document.getElementById("expenses4").value;
    let inputExpenses5 = document.getElementById("expenses5").value;
    let inputExpenses6 = document.getElementById("expenses6").value;
    let inputExpenses7 = document.getElementById("expenses7").value;
    let inputExpenses8 = document.getElementById("expenses8").value;
    let inputExpenses9 = document.getElementById("expenses9").value;
    let inputExpenses10 = document.getElementById("expenses10").value;
    let inputExpenses11 = document.getElementById("expenses11").value;
    let inputExpenses12 = document.getElementById("expenses12").value;
    let inputExpenses13 = document.getElementById("expenses13").value;
    let inputExpenses14 = document.getElementById("expenses14").value;
    resultTotalExpenses = (parseFloat(inputExpenses1) + parseFloat(inputExpenses2) + parseFloat(inputExpenses3) + parseFloat(inputExpenses4) + parseFloat(inputExpenses5) + parseFloat(inputExpenses6) + parseFloat(inputExpenses7) + parseFloat(inputExpenses8) + parseFloat(inputExpenses9) + parseFloat(inputExpenses10) + parseFloat(inputExpenses11) + parseFloat(inputExpenses12) + parseFloat(inputExpenses13) + parseFloat(inputExpenses14));
    document.getElementById("totalResultExpenses").innerHTML += "- " + resultTotalExpenses + " € ";
//Faire que les input ajouter soit dans le calcul
});

//Calcul des recettes: Bouton permettant d'écrire la valeur des input additionnés dans le texte "total des recettes: "
let resultTotalRevenue;
document.getElementById("totalRevenue").addEventListener("click", function () {
    let inputRevenue1 = document.getElementById("revenue1").value;
    let inputRevenue2 = document.getElementById("revenue2").value;
    let inputRevenue3 = document.getElementById("revenue3").value;
    resultTotalRevenue = (parseFloat(inputRevenue1) + parseFloat(inputRevenue2) + parseFloat(inputRevenue3));
    document.getElementById("totalResultRevenue").innerHTML += resultTotalRevenue + " € ";
//Faire que les input ajouter soit dans le calcul
});

//Calcul de l'épargne: Bouton permettant d'écrire la valeur de l'input dans le texte "total de l'épargne : "
let inputSavings;
document.getElementById("totalSavings").addEventListener("click", function () {
    inputSavings = document.getElementById("savings").value;
    document.getElementById("totalResultSavings").innerHTML += inputSavings + " € ";
});

//Calcul du budget: Bouton permettant d'écrire la valeur de tous les input dans "Résultat : "
document.getElementById("resultBudget").addEventListener("click", function () {
    let result = (parseFloat(resultTotalRevenue) - parseFloat(inputSavings) - parseFloat(resultTotalExpenses));
    document.getElementById("result").innerHTML += result + " € ";
    if (result < 0){
        ajoutTextBudget("Attention, ton budget est négatif !", "red");
    }
    if (result === 0){
        ajoutTextBudget("Ton budget est nul !", "grey");
    }
    if (result > 0){
        ajoutTextBudget("Ton budget est positif !", "green");
        let createText2 = document.createElement("p");
        createText2.innerHTML = "Vous pouvez avec votre budget restant faire un don a une association de votre choix, ca serait une bonne action ! ;)";
        createText2.style.color = "blue";
        createText2.id = "createText2";
        createText2.style.fontSize = 15 + "px";
        document.getElementById("containerResult").appendChild(createText2);
    }
    function ajoutTextBudget(text, color){
        let createText = document.createElement("p");
        createText.innerHTML = text;
        createText.style.color = color;
        createText.id = "createText";
        document.getElementById("containerResult").appendChild(createText);
    }

});

//Bouton reset des champs (input)
document.getElementById("reset").addEventListener("click", function (){
    let input = document.getElementsByTagName("input");
    for (let i = 0; i <= input.length; i++){
        input.item(i).value = 0;
    }
});

//Faire que tous les input valent zero au départ.
let inputAll = document.getElementsByTagName("input");
for (let i = 0; i <= inputAll.length; i++){
    inputAll.item(i).value = 0;
}