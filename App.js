const inquirer = require('inquirer');
const Word = require('./Word');
let wordArray = ['hello world','happy christmas','new year'];

// shuffle the array
wordArray.sort((a,b) => {
  return Math.random() - 0.5;
});

// function to start the game.
function StartWordGuess(){
  if(wordArray.length){
    let selectedWord = wordArray.shift();
    let wordObj = new Word(selectedWord);
    getInputPrompt(wordObj,3,[]);
  }
  else{
    console.log('No Words left!');
  }
}

// function prompt user to continue play.
function promptContinue(){
  inquirer
  .prompt(
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Do You like to play again?'
    }
  )
  .then(continueResponse =>{
    if(continueResponse.confirm){
      StartWordGuess();
    }
  });
}

// function that gets the user guesses and process it.
function getInputPrompt(word,guessRemain,GuessedArray){
  console.log(word.toString());
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'guess',
      message: 'Guess a letter: ',
      validate: (input) => {
        if (input.length !== 1 || input.toLowerCase() < 'a' || input.toLowerCase() > 'z'){
          return 'Enter a valid letter';
        }
        if(GuessedArray.indexOf(input.toLowerCase()) > -1){
          return `You already guessed ${input}.`;
        }
        return true;
      }
    }
  ])
  .then(answers => {

    // if guessed incorrectly.
    if(!word.checkWord(answers.guess)){
      console.log('You guessed incorrectly!!You have %d remaining',--guessRemain);
    }

    // push the guessed letters on to the guessed array.
    GuessedArray.push(answers.guess.toLowerCase());

    // if all the letters are guessed 
    if(word.allGuessed()){
      console.log(word.toString());
      console.log('You Won!!');
      promptContinue();
    }
    else if (guessRemain > 0){
      getInputPrompt(word,guessRemain,GuessedArray);
    }
    else {
      console.log('You lost!!');
      promptContinue();
    }
  });
}

// call the function to start the game.
StartWordGuess()



