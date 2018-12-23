# Word-Guess-Cli-Game
### Overview
---
Word Guess command-line game using constructor functions.

### Getting Started
---
* Clone down repo.
* Run command 'npm install' in Terminal or GitBash
* Run command 'node App.js'.

### Accepted Commands
---

<dl>
  <dt><code>node App.js</code></dt>
  <dd>Starts the game.</dd>
</dl>

### Technologies Used
---
* Node js

## Dependencies
---
```js
{
  "inquirer": "^6.2.1",
}
```
### Code Explanation
---

1. `Letter.js:`
    * Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
2. `Word.js:`

   * Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.
3. `App.js:`

   * The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

### NOTE
* [watch the demo video](https://drive.google.com/file/d/1fCxJCBItGf471Iui5vDy2oUa1_tobGib/view?usp=sharing)


