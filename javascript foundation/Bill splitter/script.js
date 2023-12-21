function splitBill() {
    var inputAmount = document.getElementById("input-amount").value;
    var inputPeople = document.getElementById("input-people").value;

    var billAmount = parseFloat(inputAmount);
    var numberOfPeople = parseInt(inputPeople);

    var perPersonAmount = billAmount / numberOfPeople;

    var result = document.getElementById("result");
    result.textContent = "Amount per person: $" + perPersonAmount.toFixed(2);
}
