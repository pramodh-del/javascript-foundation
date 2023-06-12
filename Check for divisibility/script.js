function checkDivisibility() {
    var inputNumber = Number(document.getElementById("input-number").value);
    var inputDivisor = Number(document.getElementById("input-divisor").value);

    var result = document.getElementById("result");

    if (inputNumber % inputDivisor === 0) {
        result.textContent = inputNumber + " is divisible by " + inputDivisor;
    } else {
        result.textContent = inputNumber + " is not divisible by " + inputDivisor;
    }
}
