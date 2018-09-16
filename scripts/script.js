var budget = {};

$(document).ready(function () {
    console.log("A wasap, dahg!");
    $("#btnCalculate").on("click", budget.calculate);
})


// var percentOfIncomeSaving;
// var percentOfIncomeWant;

budget.calculate = function () {
    console.log("this is the calculate function");
    var income = parseInt($("#inputIncome").val());
    var percent = parseInt($("#inputPercent").val());
    var output = income + percent;
    console.log(output);
    $("#outputAllocation").text(output);


}