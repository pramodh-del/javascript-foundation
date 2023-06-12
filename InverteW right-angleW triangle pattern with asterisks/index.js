function createInvertedTrianglePattern(height) {
    var patternOutput = document.getElementById("pattern-output");
    var pattern = "";

    for (var i = height; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            pattern += "* ";
        }
        pattern += "\n";
    }

    patternOutput.textContent = pattern;
}


createInvertedTrianglePattern(5);
