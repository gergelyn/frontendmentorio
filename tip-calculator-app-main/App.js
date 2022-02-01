let bill = 0;
let tipAmount = 0;
let numberOfPeople = 0;
let tip = 0;
let total = 0;

function calcTipPerPerson(billAmount, tipAmount, nopAmount) {
    if (billAmount === 0 || tipAmount === 0 || nopAmount === 0) {
        return "0.00";
    } else {
        return Math.round((billAmount * (tipAmount / 100) / nopAmount) * 100) / 100;
    }
}

function calcTotalPerPerson(billAmount, tipAmount, nopAmount) {
    if (billAmount === 0 || tipAmount === 0 || nopAmount === 0) {
        return "0.00";
    } else {
        return Math.round(((billAmount / nopAmount) + calcTipPerPerson(billAmount, tipAmount, nopAmount)) * 100) / 100;
    }
}

function updateTip() {
    tip = calcTipPerPerson(bill, tipAmount, numberOfPeople);
    tipEl.innerText = tip;
}

function updateTotal() {
    total = calcTotalPerPerson(bill, tipAmount, numberOfPeople)
    totalEl.innerText = total;
}

function update() {
    resetBtn.disabled = false;
    updateTip();
    updateTotal();
}

function reset() {
    bill = 0;
    tipAmount = 0;
    numberOfPeople = 0;
    tip = 0;
    total = 0;
    billAmountInput.value = 0;
    numberOfPeopleInput.value = 0;
    resetBtn.disabled = true;
}

const billAmountInput = document.querySelector("#bill-amount-input");

const numberOfPeopleInput = document.querySelector("#number-of-people-input");

const fiveTip = document.querySelector("#five-tip");
const tenTip = document.querySelector("#ten-tip");
const fifteenTip = document.querySelector("#fifteen-tip");
const twentyFiveTip = document.querySelector("#twentyfive-tip");
const fiftyTip = document.querySelector("#fifty-tip");
const customTip = document.querySelector("#custom-tip");
const resetBtn = document.querySelector("#reset");

const tipEl = document.querySelector("#tip");
const totalEl = document.querySelector("#total");

fiveTip.addEventListener('click', function() {
    fiveTip.classList.toggle("active");
    tipAmount = 5;
    console.log("tip = ", tipAmount);
    updateTip();
    updateTotal();
});

tenTip.addEventListener('click', function() {
    tenTip.classList.toggle("active");
    tipAmount = 10;
    console.log("tip = ", tipAmount);
    updateTip();
    updateTotal();
});

fifteenTip.addEventListener('click', function() {
    fifteenTip.classList.toggle("active");
    tipAmount = 15;
    console.log("tip = ", tipAmount);
    updateTip();
    updateTotal();
});

twentyFiveTip.addEventListener('click', function() {
    twentyFiveTip.classList.toggle("active");
    tipAmount = 25;
    console.log("tip = ", tipAmount);
    updateTip();
    updateTotal();
});

fiftyTip.addEventListener('click', function() {
    fiftyTip.classList.toggle("active");
    tipAmount = 50;
    console.log("tip = ", tipAmount);
    updateTip();
    updateTotal();
});

customTip.addEventListener('input', function() {
    tipAmount = customTip.value;
    console.log("tip = ", tipAmount);
    updateTip();
    updateTotal();
});

billAmountInput.addEventListener('input', function() {
    bill = billAmountInput.value;
    console.log("Bill input: ", billAmountInput.value);
    console.log("bill = ", bill);
    updateTip();
    updateTotal();
});

numberOfPeopleInput.addEventListener('input', function() {
    numberOfPeople = numberOfPeopleInput.value;
    console.log("numberOfPeople input: ", numberOfPeopleInput.value);
    console.log("numberOfPeople = ", numberOfPeople);
    // tip = calcTipPerPerson(bill, tipAmount, numberOfPeople);
    // tipEl.innerText = tip;
    update();
});

resetBtn.addEventListener('click', function() {
    reset();
});




