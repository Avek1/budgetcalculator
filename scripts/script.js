var acme = {};
var budgetted = "";
$(document).ready(function () {
    $("#submitBtn").on("click", acme.submit);
    $("#user-list").on("click", "#editBtn", acme.editInfo);  // $("empty div for template").on("click", "event trigger", nameSpace.templateButton);
    $("#updateBtn").on("click", acme.updateInfo);
    $("#user-list").on("click", "#deleteBtn", acme.deleteInfo);
   // $("#countIndexBtn").on("click", acme.countIndexItems);
 
});

acme.submit = function (event) {
    event.preventDefault();
    console.log("submit function");
    acme.checkForBalance();
    acme.clearForm();
}

acme.checkForBalance = function () {
    if ($("#balance").text() == "") {
        console.log("Balance EMPTY.  Deduct from Income field.");
        acme.calculateFromIncome();
        acme.populateTemplate();
    } else {
        console.log("Balance POPULATED.  Deduct from Balance field.");
        acme.calculateFromBalance();
        acme.populateTemplate();
    };
}

acme.populateTemplate = function () {
    var $newUser = $($("#user-info-template").html());
    $newUser.find("#templateCategory").text($("#category").val());
    $newUser.find("#templateDescription").text($("#description").val());
    $newUser.find("#templatePercentage").text($("#percentage").val());
    $newUser.find("#templateBudgetted").text(budgetted);
    $newUser.attr("id", Math.ceil(Math.random() * 100000));
    $("#user-list").append($newUser);
}

acme.calculateFromIncome = function () {
        var income = parseFloat($("#income").val());
    var inputPercent = parseFloat($("#percentage").val());
    var parcedPercent = (inputPercent / 100) * income;
    var balance = income - parcedPercent;
    var budgettedFromIncome = income - balance;

    $("#outputAllocation").text(parcedPercent);

    $("#balance").text(balance);

    return budgetted = budgettedFromIncome;

}

acme.calculateFromBalance = function () {
    var currentBalance = parseFloat($("#balance").text());
    var inputPercent = parseFloat($("#percentage").val());
    var parcedPercent = (inputPercent / 100) * currentBalance;
    var newBalance = currentBalance - parcedPercent;
    budgettedFromBalance = currentBalance - newBalance;

    $("#outputAllocation").text(parcedPercent);

    $("#balance").text(newBalance);
    
    return budgetted = budgettedFromBalance;
}

acme.countIndexItems = function () {
    var count = $(".infoPanel").length;
    console.log("You have " + count + " items.");
    console.log("count index function");
    if (count == 0) {
        console.log("items in index are ZERO");
    } else {
        console.log("items in index are MORE THEN ONE");
    }
}

acme.clearForm = function () {
    $("#inputForm")[0].reset();     // $("#inputForm :input").val("");  
}

acme.editInfo = function () {
    console.log("editInfo function");
    var $repop = $($(this).closest(".infoPanel").html()); // this was not working because i was targeting user-list which is part of the html not the template.
    $("#updateBtn").removeClass("hidden");
    $("#submitBtn").addClass("hidden");
    var repopObj = {};
    repopObj.category = $repop.find("#templateCategory").text();
    repopObj.description = $repop.find("#templateDescription").text();
    repopObj.percentage = $repop.find("#templatePercentage").text();
    var parentID = $(this).closest(".infoPanel").attr("id");
    repopObj.id = parentID;
    $("#category").val(repopObj.category);
    $("#description").val(repopObj.description);
    $("#percentage").val(repopObj.percentage);
    $("#infoId").text(repopObj.id);
}
// works
acme.updateInfo = function () {
    // example on how to target by id and change an element value:  $('div[newid=16801]').find("#templateCategory").text("Bob");
    // example 2 $("[newid=72633]").find("button").css("color", "orange");
    console.log("update info function");
    var parentID = $("#infoId").text();
    var update = {};
    update.category = $("#category").val();
    update.description = $("#description").val();
    update.percentage = $("#percentage").val();
    var $update = $("#" + parentID);
    console.log($update);
    $update.find("#templateCategory").text(update.category);
    $update.find("#templateDescription").text(update.description);
    $update.find("#templatePercentage").text(update.percentage);
    acme.clearForm();
    $("#infoId").text("");
    // reset update button to sumbit
    $("#updateBtn").addClass("hidden");
    $("#submitBtn").removeClass("hidden");
}
// works      
acme.deleteInfo = function () {
    console.log("delete function.");
    // $(this).prev().children().css({"color": "red"});
    var budgettedAmount =  parseFloat($(this).prev().children().text());

    var currentBalance = parseFloat($("#balance").text());
    var newBalance = currentBalance + budgettedAmount;
    $("#balance").text(newBalance);
    $(this).closest(".infoPanel").remove();

}

acme.calculateOnItemDelete = function () {

    /*
        add Budgetted to Balance.


    */
}