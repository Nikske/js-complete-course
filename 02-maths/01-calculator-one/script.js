/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        // Get the input numbers
        let add1 = document.getElementById("op-one").value;
        let add2 = document.getElementById("op-two").value;
        // Convert them into actual numbers from strings
        let add1int = Number(add1);
        let add2int = Number(add2);
        // Actually do the maths
        let result = add1int + add2int;
        // Display the maths
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction

        let add1 = document.getElementById("op-one").value;
        let add2 = document.getElementById("op-two").value;
        let add1int = Number(add1);
        let add2int = Number(add2);
        let result = add1int - add2int;
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication

        let add1 = document.getElementById("op-one").value;
        let add2 = document.getElementById("op-two").value;
        let add1int = Number(add1);
        let add2int = Number(add2);
        let result = add1int * add2int;
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division

        let add1 = document.getElementById("op-one").value;
        let add2 = document.getElementById("op-two").value;
        let add1int = Number(add1);
        let add2int = Number(add2);
        let result = add1int / add2int;
        alert(result);
    });
})();
