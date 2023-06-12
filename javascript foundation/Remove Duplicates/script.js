function countVowels() {
    var inputText = document.getElementById("input-text").value;
    var vowelCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < inputText.length; i++) {
        var char = inputText[i].toLowerCase();

        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    var result = document.getElementById("result");
    result.textContent = "Number of vowels: " + vowelCount;
}
