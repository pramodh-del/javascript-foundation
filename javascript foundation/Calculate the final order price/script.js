function calculateFinalPrice() {
    var inputPrice = document.getElementById("input-price").value;
    var inputDiscount = document.getElementById("input-discount").value;
    var inputTax = document.getElementById("input-tax").value;

    var initialPrice = parseFloat(inputPrice);
    var discount = parseFloat(inputDiscount);
    var tax = parseFloat(inputTax);

    var discountAmount = initialPrice * (discount / 100);
    var taxAmount = initialPrice * (tax / 100);
    var finalPrice = initialPrice - discountAmount + taxAmount;

    var result = document.getElementById("result");
    result.textContent = "Final Order Price: $" + finalPrice.toFixed(2);
}
