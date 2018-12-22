
class Letter{
    constructor(letter,isGuessed = false){
        this.letter = letter === ' ' ? '-' : letter;
        this.isGuessed = this.letter === '-' || isGuessed;
    }
    checkGuess(letter){
        if(this.letter.toLowerCase() === letter.toLowerCase()){
            this.isGuessed = true;
        }
    }
    toString(){
        return this.isGuessed ? this.letter : '_';
    }
}

module.exports = Letter;