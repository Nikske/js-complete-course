/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Function to have the thing run and apply the background colour
    document.getElementById("run").addEventListener("click", function() {
        // Getting the colour name from input
        let color = document.getElementById("color").value;
        document.body.style.backgroundColor = color;
    });
})();
