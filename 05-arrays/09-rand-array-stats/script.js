/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        let randomArray = Array(10).fill().map(() => Math.round(Math.random() * 100));
        let i = 1;
        for (i; i <= 10; i++) {
            let tableID = ("n-" + i);
            document.getElementById(tableID).innerHTML = randomArray[i - 1];
        }
        console.log(randomArray);
    });
})();
