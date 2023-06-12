function convertUnits() {
    var inputValue = document.getElementById("input-value").value;
    var inputUnit = document.getElementById("input-unit").value;
    var outputUnit = document.getElementById("output-unit").value;

    var result = document.getElementById("result");
    var convertedValue;

    if (inputUnit === outputUnit) {
        convertedValue = inputValue;
    } else if (inputUnit === "cm" && outputUnit === "inch") {
        convertedValue = inputValue / 2.54;
    } else if (inputUnit === "inch" && outputUnit === "cm") {
        convertedValue = inputValue * 2.54;
    } else if (inputUnit === "cm" && outputUnit === "meter") {
        convertedValue = inputValue / 100;
    } else if (inputUnit === "meter" && outputUnit === "cm") {
        convertedValue = inputValue * 100;
    } else if (inputUnit === "inch" && outputUnit === "meter") {
        convertedValue = inputValue * 0.0254;
    } else if (inputUnit === "meter" && outputUnit === "inch") {
        convertedValue = inputValue / 0.0254;
    }

    result.textContent = "Converted value: " + converted
}