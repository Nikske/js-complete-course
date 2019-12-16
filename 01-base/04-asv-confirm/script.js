/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function check() {

    // your code here
        var information;
        var inputAge = prompt("Your age:");
        var inputGender = prompt("Your gender:");
        var inputTown = prompt("Your town:");
        information = inputAge + "\n" + inputGender + "\n" + inputTown + "\n Confirm whether this information is correct";
        var confirmation = confirm(information);
        if (confirmation == true) {
            alert("You have confirmed");
        } else {
            alert("Give us the correct info then.");
            check();
        }

})();
