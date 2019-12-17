/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let i;
        let fctr = 1;
        let inputnum = document.getElementById("number").value;
        // Function to calculate factorial, starting at the input number and substracting one each time.
        function factor(num) {
            for (i = num; i>1; i--) {
                fctr *=i;
            }
            return fctr;
        }
        alert(factor(inputnum));
    });

})();
