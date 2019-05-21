// 1. Create a constructor funtion for the hangman game
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console

// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guessed letters
// 3. Create a metohd that gives you the word puzzle back
 

const Hangman = function(firstLetter, number) {
  this.firstLetter = firstLetter.toLowerCase().split(" ");
  this.number = number;
  this.guessedLetters = ["c"];
  console.log(Hangman);
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = "";
  this.firstLetter.forEach(letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' '){
          puzzle += letter
      } else {
          puzzle += '*'
      }
  }
};

const game1 = new Hangman("cat", 3);
const game2 = new Hangman("dog", 4);
console.log(game1);
console.log(game2);

const person2 = new Person ("Lauri", "Ahonen", 35)
console.log(person2.getBio())
