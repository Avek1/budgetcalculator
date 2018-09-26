var budget = {};

$(document).ready(function () {
    console.log("A wasap, dahg!");
    $("#btnCalculate").on("click", budget.calculate);
})


// var percentOfIncomeSaving;
// var percentOfIncomeWant;

budget.calculate = function () {
    console.log("this is the calculate function");
    var income = parseFloat($("#inputIncome").val());
    var percent = parseFloat($("#inputPercent").val());
    var output = (percent / 100) * income;
    var balance = income - output;
    console.log(output);
    $("#outputAllocation").text(output);
    console.log(balance);
    $("#outputBalance").text(balance);
}