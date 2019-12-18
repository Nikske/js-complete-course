/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        // Got the solution thanks to this answer on stackOverflow written by a lizard: https://stackoverflow.com/a/5092872
        // Creates a variable first populated with a black background colour (#000000), replacing the 0s randomly with one of the 16 hexadecimal symbols, converting them to a string so they can be used in the background color.
        let randomColor = "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
        });
        document.body.style.backgroundColor = randomColor;
        console.log(randomColor);
    });
})();
