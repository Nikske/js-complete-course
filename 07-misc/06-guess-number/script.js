/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Generate random number
   let random =  Math.round((Math.random() * 100) + 1);
   console.log(random);
   // Initiate the variable to store the guess in
   let guess;
    // Number of guesses
   let guesses = 1;

   // parseInt to convert to an integer, otherwise it returns as always true
   while (parseInt(guess) !== random) {
      guess = prompt("Guess a number between 1 and 100");
       if (parseInt(guess) < random) {
           guesses++;
           alert("Guess higher, you imbecile");
       } else if (parseInt(guess) > random){
           guesses++;
           alert("Guess lower, you ape");
       }
   }
    alert("You did it ! Too bad it took about" + " " + guesses + " " + "guesses...");
})();
