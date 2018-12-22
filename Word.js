const Letter = require('./Letter');

class Word{
    constructor(word){
        this.word = word.split('').map(letter => new Letter(letter));
    }

    // Check if the user guessed incorrectly.
    checkWord(guessLetter){
        return (this.word.filter(letter => letter.checkGuess(guessLetter))).length;
    }

    // returns true if all guessed correctly.
    allGuessed(){
        return this.word.reduce((check,letter) => check && letter.isGuessed,true);
    }

    // returns the string representing the word. 
    toString(){
        return this.word.join(' ');
    }
}

module.exports = Word;