function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var randomNumber = generateRandomNumber(1, 100);
console.log(randomNumber);
