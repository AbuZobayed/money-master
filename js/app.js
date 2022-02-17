let calculateButton = document.getElementById('calculate-btn');
let saveButton = document.getElementById('save-btn');
let incomeValue = document.getElementById('income-input');
function updateBalace() {

    let totalIncome = parseFloat(incomeValue.value);

    let foodValue = document.getElementById('food-input').value;
    let rentValue = document.getElementById('rent-input').value;
    let clothesValue = document.getElementById('clothes-input').value;

    let totalBalance = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);

    let totalValue = totalIncome - totalBalance;

    let totalExpenses = document.getElementById('total-expenses');
    let currentBalance = document.getElementById('current-balance');


    totalExpenses.innerText = totalBalance;
    currentBalance.innerText = totalValue;

}
calculateButton.addEventListener('click', function () {
    updateBalace();
});


function discountBalance() {
    let saveInput = document.getElementById('save-input');
    console.log(saveInput.value);
    console.log(incomeValue.value);
    let savingAmount = incomeValue.value % parseInt(saveInput.value);

    console.log("savingAmount => ", savingAmount);
}

saveButton.addEventListener('click', function () {
    discountBalance();
});
