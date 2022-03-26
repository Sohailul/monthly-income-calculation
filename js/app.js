function calculateExpenses() {

    //income input
    const incomeInput = document.getElementById('income');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

    //Food input
    const foodInput = document.getElementById('food');
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText);

    //Rent input
    const rentInput = document.getElementById('rent');
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText);

    //Clothes input
    const clothesInput = document.getElementById('clothes');
    const clothesAmountText = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountText);

    if (incomeAmount < 0 && foodAmount < 0 || rentAmount < 0 || clothesAmount < 0) {

        document.getElementById('no-negative').style.visibility = 'visible';

    }
    else if (isNaN(incomeAmount) == true && isNaN(foodAmount) == true) {
        document.getElementById('no-string').style.visibility = 'visible';
    }
    else {
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        //Expense Total
        const expenseTotal = document.getElementById('expense-total');
        const previousExpenseText = expenseTotal.innerText;
        const previousExpense = parseFloat(previousExpenseText);
        const expenseTotalAmount = previousExpense + totalExpenses;
        expenseTotal.innerText = expenseTotalAmount;

        //Balance Total
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceText = balanceTotal.innerText;
        const previousBalance = parseFloat(previousBalanceText);
        const newTotalBalance = previousBalance + (incomeAmount - totalExpenses);
        balanceTotal.innerText = newTotalBalance;

        //incomeInput.value = '';
        foodInput.value = '';
        rentInput.value = '';
        clothesInput.value = '';
    }

}

document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateExpenses();

});

function savingAmount() {
    const incomeInput = document.getElementById('income');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

    //save Input
    const saveInput = document.getElementById('save-input');
    const saveAmountText = saveInput.value;
    const saveAmount = parseFloat(saveAmountText);

    //Saving Total
    const savingTotal = document.getElementById('saving-total');
    const previousSavingText = savingTotal.innerText;
    const previousSavingAmount = parseFloat(previousSavingText);
    const newTotalSavingAmount = previousSavingAmount + (saveAmount / 100) * incomeAmount;
    savingTotal.innerText = newTotalSavingAmount;

    //Balance Total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);

    if (newTotalSavingAmount > previousBalance) {
        document.getElementById('saving-error').style.visibility = 'visible';
    }
    else if (isNaN(saveAmount) == true) {
        document.getElementById('saving-nostring').style.visibility = 'visible';
    }
    else {
        //remaining Total
        const remainingTotal = document.getElementById('remaining-total');
        const remainingBalanceText = remainingTotal.innerText;
        const remainingBalance = parseFloat(remainingBalanceText);
        const newRemainingBalance = remainingBalance + (previousBalance - newTotalSavingAmount);
        remainingTotal.innerText = newRemainingBalance;

        saveInput.value = '';
    }


}

document.getElementById('save-amount').addEventListener('click', function () {
    savingAmount();
});

