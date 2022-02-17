
function updateBalace() {
    const foodValue = document.getElementById('food-input');
    const rentValue = document.getElementById('rent-input');
    const clothesValue = document.getElementById('clothes-input');
    const totalValue = parseFloat(foodValue.value) + parseFloat(rentValue.value) + parseFloat(clothesValue.value);
    return totalValue;
}

document.getElementById('calculate-button').addEventListener('click', function () {

    // total expenses
    document.getElementById('total-expenses').innerText = updateBalace();
    const incomeValue = document.getElementById('income-input');
    const incomeValueText = parseFloat(incomeValue.value) - updateBalace();
    document.getElementById('current-balance').innerText = incomeValueText;

});

document.getElementById('save-button').addEventListener('click', function () {
    // save
    const saveValue = document.getElementById('save-input');
    const saveValueText = saveValue.value;
    const saveValueNumber = parseFloat(saveValueText);

    const savingBalance = document.getElementById('income-input');
    const savingBalanceText = savingBalance.value;
    const savingBalanceNumber = parseFloat(savingBalanceText);
    const totalSavings = (savingBalanceNumber * saveValueNumber) / 100;

    document.getElementById('save-Amount').innerText = totalSavings;
    const remainingBalance = document.getElementById('current-balance').innerText;

    const remainingBalanceNumber = parseFloat(remainingBalance);
    document.getElementById('remaining-balance').innerText = remainingBalanceNumber - totalSavings;
});

