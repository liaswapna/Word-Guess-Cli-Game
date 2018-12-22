const Letter = require('./Letter');
// let wordArray = 'hello world';
// const letterObj = wordArray.split('').map(letter => new Letter(letter));
// console.log(letterObj);

// const guessArray = ['a','h','w','d'];
// guessArray.forEach(value => {
//     letterObj.checkGuess(value);
//     // letterObj.forEach(obj => {
//     //     obj.checkGuess(value);
//     // });
// });
// console.log('***********************');
// console.log(letterObj);
// // console.log(letterObj.checkGuess())

// console.log(letterObj.join(' '));

class Word{
    constructor(word){
        this.word = word.split('').map(letter => new Letter(letter));
    }
    checkWord(guessLetter){
        console.log(this.word.filter(letter => letter.checkLetter(guessLetter)));
    }
    // returns the string representing the word. 
    toString(){
        return this.word.join(' ');
    }

}