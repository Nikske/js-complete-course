/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById("target").innerHTML;
    // Adding 1 to the target number each time, storing it and updating the target p
    document.getElementById("increment").addEventListener("click", function() {
        target++;
        localStorage.setItem("stored", target);
        document.getElementById("target").innerHTML = target;
    });
    // Retrieve the stored number
    target = localStorage.getItem("stored");
    // Make sure the stored number appears instead of 0
    document.getElementById("target").innerHTML = target;

})();
