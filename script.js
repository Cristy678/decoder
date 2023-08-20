function decodeNumeric() {
    const numericInput = document.getElementById("numericInput").value;
    const numericArray = numericInput.split(" ");
    let decodedText = "";

    const numToLetter = {
        1: "A", 2: "B", 3: "C", 4: "D", 5: "E",
        6: "F", 7: "G", 8: "H", 9: "I", 10: "J",
        11: "K", 12: "L", 13: "M", 14: "N", 15: "O",
        16: "P", 17: "Q", 18: "R", 19: "S", 20: "T",
        21: "U", 22: "V", 23: "W", 24: "X", 25: "Y", 26: "Z",
        27: "!", 28: "?", 29: ".", 30: ",", 31: "*", 32: "+",
        33: "-", 34: "#", 35: "&", 36: "(", 37: ")", 38: "$",
        39: "1", 40: "2", 41: "3", 42: "4", 43: "5", 44: "6",
        45: "7", 46: "8", 47: "9", 48: "0", 49: " "
    };

    for (let i = 0; i < numericArray.length; i++) {
        const num = parseInt(numericArray[i]);
        if (!isNaN(num) && num >= 1 && num <= 49) {
            decodedText += numToLetter[num];
        } else {
            decodedText += numericArray[i];
        }
    }

    document.getElementById("decodedText").value = decodedText;
}
