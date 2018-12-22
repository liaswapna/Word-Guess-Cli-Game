
class Letter{
    
    constructor(letter,isGuessed = false){
        this.letter = letter === ' ' ? '-' : letter;
        this.isGuessed = this.letter === '-' || isGuessed;
    }

    // checks if the guess is correct.
    // updates the isGuessed value accordingly.
    checkGuess(letter){
        if(this.letter.toLowerCase() === letter.toLowerCase()){
            this.isGuessed = true;
            return true;
        }
        return false;
    }

    // returns the string that represent the word letter.
    toString(){
        return this.isGuessed ? this.letter : '_';
    }
}

module.exports = Letter;