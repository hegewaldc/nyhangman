var Letter = require("./letter");

var Word = function (word, spaces, guesses) {
    var winCounter = 0;
    var lossCounter = 0;
    this.lettersGuessed = [];
    var correctGuessed = [];
    var chosenWord = "";
    var lettersInChosenWord = [];
    var numBlanks = 0;
    var blanksAndSuccesses = [];
    var wrongGuesses = [];
    this.startGame = function () {
   
        chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
        lettersInChosenWord = chosenWord.split("");
        numBlanks = lettersInChosenWord.length;
        console.log(chosenWord);
        blanksAndSuccesses = [];
        wrongGuesses = [];
        for (var i = 0; i < numBlanks; i++) {
            blanksAndSuccesses.push("_");
            if (chosenWord[i] === " ") {
                blanksAndSuccesses[i] = " ";
            }
        }
        console.log(blanksAndSuccesses.join(" "));
    }

    function checkLetters(letter) {
        var letterInWord = false;

        for (var i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
                letterInWord = true;
            }
        }
        if (letterInWord) {
            for (var j = 0; j < numBlanks; j++) {

                if (chosenWord[j] === letter) {
                    blanksAndSuccesses[j] = letter;
                }
            }
            console.log(blanksAndSuccesses);
        }
        else {
            wrongGuesses.push(letter);
            numGuesses--;
        }
    }

};

module.exports = Word;

