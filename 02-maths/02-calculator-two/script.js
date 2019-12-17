/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function pressed(x) {
    let numberOne = Number(document.getElementById("op-one").value);
    let numberTwo = Number(document.getElementById("op-two").value);
    // Go through 4 possible outcomes
    switch (x) {
        case "addition":
            alert (numberOne + numberTwo);
        break;
        case "substraction":
            alert (numberOne - numberTwo);
        break;
        case "multiplication":
            alert (numberOne * numberTwo);
        break;
        case "division":
            alert (numberOne / numberTwo);
        break;
    }
}
