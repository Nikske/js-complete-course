/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let p1 = "460"; let p2 = "00"; let p3 = "00"; let p4 = "00";
    let target = document.getElementById("target");
    target.innerHTML = "0" + p1 + p2 + p3 + p4;

    // button #1
    document.getElementById("fix-part-one").addEventListener("click", function() {
        // Random number between 466 to 499. 33+466 = 499
        p1 = Math.round((Math.random() * 33) + 466);
        // Display the randomised number into the input field
        document.getElementById("part-one").value = p1;
        target.innerHTML = "0" + p1 + p2 + p3 + p4;
    });
    // button #2
    document.getElementById("fix-part-two").addEventListener("click", function() {
        // Random number between 0 - 99, if it's a single digit add a 0 on the front
        p2 = Math.round(Math.random() * 99);
        if (p2 < 10) {
            p2 = "0" + p2;
        }
        document.getElementById("part-two").value = p2;
        target.innerHTML = "0" + p1 + p2 + p3 + p4;
    });
    // button #3
    document.getElementById("fix-part-three").addEventListener("click", function() {
        p3 = Math.round(Math.random() * 99);
        if (p3 < 10) {
            p3 = "0" + p3;
        }
        document.getElementById("part-three").value = p3;
        target.innerHTML = "0" + p1 + p2 + p3 + p4;
    });
    // button #4
    document.getElementById("fix-part-four").addEventListener("click", function() {
        p4 = Math.round(Math.random() * 99);
        if (p4 < 10) {
            p4 = "0" + p4;
        }
        document.getElementById("part-four").value = p4;
        target.innerHTML = "0" + p1 + p2 + p3 + p4;
    });
})();
