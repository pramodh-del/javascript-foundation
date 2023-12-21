function calculateDiscountPercentage() {
    var inputInitialPrice = document.getElementById("input-initial-price").value;
    var inputDiscountedPrice = document.getElementById("input-discounted-price").value;

    var initialPrice = parseFloat(inputInitialPrice);
    var discountedPrice = parseFloat(inputDiscountedPrice);

    var discountAmount = initialPrice - discountedPrice;
    var discountPercentage = (discountAmount / initialPrice) * 100;

    var result = document.getElementById("result");
    result.textContent = "Discount Percentage: " + discountPercentage.toFixed(2) + "%";
}
