var cart = [2, 4, 6, 8, 10]; // Example cart array with incorrect quantities

function correctCartQuantity() {
    var correctedCart = cart.map(function (quantity) {
        return quantity * 2;
    });

    var result = document.getElementById("result");
    result.textContent = "Corrected Cart: " + correctedCart;
}
