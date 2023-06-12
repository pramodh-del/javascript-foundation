function calculateRentalCost() {
    var inputDays = document.getElementById("input-days").value;
    var inputDailyRate = document.getElementById("input-daily-rate").value;

    var rentalCost = inputDays * inputDailyRate;

    var result = document.getElementById("result");
    result.textContent = "Rental cost: $" + rentalCost.toFixed(2);
}
