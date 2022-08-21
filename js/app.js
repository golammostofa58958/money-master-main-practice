
function getElementById(elementId) {
    let elementField = document.getElementById(elementId);
    let newElementFieldString = elementField.value;
    let newElementField = parseFloat(newElementFieldString);
    return newElementField;
};



document.getElementById('btn-calculate').addEventListener('click', function () {

    // income------------
    let newIncomeField = getElementById('income-field');
    /*  let incomeField = document.getElementById('income-field');
     let newIncomeFieldString = incomeField.value;
     let newIncomeField = parseFloat(newIncomeFieldString); */

    //  food---------
    let newFoodCost = getElementById('food-cost');
    /*let foodCost = document.getElementById('food-cost');
    let newFoodCostString = foodCost.value;
    let newFoodCost = parseFloat(newFoodCostString);*/


    // rent------------
    let newRentCost = getElementById('rent-cost');
    /* let rentCost = document.getElementById('rent-cost');
     let newRentCostString = rentCost.value;
     let newRentCost = parseFloat(newRentCostString);*/


    // clothes-----------
    let newClothesCost = getElementById('clothes-cost');
    /*let clothesCost = document.getElementById('clothes-cost');
    let newClothesCostString = clothesCost.value;
    let newClothesCost = parseFloat(newClothesCostString);*/


    // total expenses
    let totalExpenses = document.getElementById('total-expenses');
    let newtotalExpenses = newFoodCost + newRentCost + newClothesCost;
    totalExpenses.innerText = newtotalExpenses;


    // Total balance
    let totalBalance = document.getElementById('total-balance');
    let newTotalBalance = newIncomeField - newtotalExpenses;
    totalBalance.innerText = newTotalBalance;
});




document.getElementById('btn-save').addEventListener('click', function () {

    // income field---- saving ammount er jonno upor thaki nite assi:
    let newIncomeField = getElementById('income-field');
    /*let incomeField = document.getElementById('income-field');
    let newIncomeFieldString = incomeField.value;
    let newIncomeField = parseFloat(newIncomeFieldString);*/

    //  save------
    let newSaveField = getElementById('save-field');
    /*let saveField = document.getElementById('save-field');
    let newSaveFieldString = saveField.value;
    let newSaveField = parseFloat(newSaveFieldString);*/

    // saving amount
    let savingAmount = document.getElementById('saving-amount');
    let totalSavingAmount = (newIncomeField * newSaveField) / 100;
    savingAmount.innerText = totalSavingAmount;




    // Total balance --- remaining balance er jonno upor thaki niya assi:
    let totalBalance = document.getElementById('total-balance');
    let newTotalBalanceString = totalBalance.innerText;
    let newTotalBalance = parseFloat(newTotalBalanceString);


    // remaining balance
    let remainingBalance = document.getElementById('remaining-balance');
    let newRemainingBalance = newTotalBalance - totalSavingAmount;
    remainingBalance.innerText = newRemainingBalance;



});






/*
// step by step
document.getElementById('btn-calculate').addEventListener('click', function () {

    // income------------
    let incomeField = document.getElementById('income-field');
    let newIncomeFieldString = incomeField.value;
    let newIncomeField = parseFloat(newIncomeFieldString);

    //  food---------
    let foodCost = document.getElementById('food-cost');
    let newFoodCostString = foodCost.value;
    let newFoodCost = parseFloat(newFoodCostString);


    // rent------------
    let rentCost = document.getElementById('rent-cost');
    let newRentCostString = rentCost.value;
    let newRentCost = parseFloat(newRentCostString);


    // clothes-----------
    let clothesCost = document.getElementById('clothes-cost');
    let newClothesCostString = clothesCost.value;
    let newClothesCost = parseFloat(newClothesCostString);


    // total expenses
    let totalExpenses = document.getElementById('total-expenses');
    let newtotalExpenses = newFoodCost + newRentCost + newClothesCost;
    totalExpenses.innerText = newtotalExpenses;


    // Total balance
    let totalBalance = document.getElementById('total-balance');
    let newTotalBalance = newIncomeField - newtotalExpenses;
    totalBalance.innerText = newTotalBalance;



});




document.getElementById('btn-save').addEventListener('click', function () {

    // income field---- saving ammount er jonno upor thaki nite assi:
    let incomeField = document.getElementById('income-field');
    let newIncomeFieldString = incomeField.value;
    let newIncomeField = parseFloat(newIncomeFieldString);

    //  save------
    let saveField = document.getElementById('save-field');
    let newSaveFieldString = saveField.value;
    let newSaveField = parseFloat(newSaveFieldString);

    // saving amount
    let savingAmount = document.getElementById('saving-amount');
    let totalSavingAmount = (newIncomeField * newSaveField) / 100;
    savingAmount.innerText = totalSavingAmount;




    // Total balance --- remaining balance er jonno upor thaki niya assi:
    let totalBalance = document.getElementById('total-balance');
    let newTotalBalance = totalBalance.innerText;


    // remaining balance
    let remainingBalance = document.getElementById('remaining-balance');
    let newRemainingBalance = newTotalBalance - totalSavingAmount;
    remainingBalance.innerText = newRemainingBalance;



}); */