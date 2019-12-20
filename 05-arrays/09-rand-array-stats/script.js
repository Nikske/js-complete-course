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
        // Making an array filled with 10 random numbers, multiplying by a 100 because we need em from 1 - 100
        let randomArray = Array(10).fill().map(() => Math.round(Math.random() * 100));
        // for loop to go through each td id, so I don't have to write document.getElementById 70 times
        let i = 1;
        for (i; i <= 10; i++) {
            let tableID = ("n-" + i);
            document.getElementById(tableID).innerHTML = randomArray[i - 1];
        }
        // Calculate the smallest number in the array
        // The '...' are required for the .min thing to get actual values out of arrays
        document.getElementById("min").innerHTML = Math.min(...randomArray);
        // Calculate the largest
        document.getElementById("max").innerHTML = Math.max(...randomArray);
        // Calculating the sum. Reduce boils the array down to one value but needs a function to properly calculate
        document.getElementById("sum").innerHTML = randomArray.reduce(adding);
        function adding(total, num) {
            return total + num;
        }
        // Getting the average as simple as the sum / 10. Pretty sure I got that right
        document.getElementById("average").innerHTML = (randomArray.reduce(adding) / randomArray.length);

    });
})();
