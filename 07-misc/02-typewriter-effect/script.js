/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let targetP = document.getElementById("target").innerHTML;
    // Empty the text p to make way for the typewriting
    document.getElementById("target").innerHTML = "";

    let i = 0;
    function typewriter() {
        if (i < targetP.length) {
            // Display each letter individually with a random speed
            document.getElementById("target").innerHTML += targetP.charAt(i);
            i++;
            let speed = Math.random() * 700;
            setTimeout(typewriter,speed);
        }
    }
    typewriter();
})();
