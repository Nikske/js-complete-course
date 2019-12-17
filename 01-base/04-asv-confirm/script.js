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
        let information;
        // Ask every piece of info required
        let inputAge = prompt("Your age:");
        let inputGender = prompt("Your gender:");
        let inputTown = prompt("Your town:");
        // Fill the information letiable with said info
        information = inputAge + "\n" + inputGender + "\n" + inputTown + "\n Confirm whether this information is correct";
        // And then ask whether it's all good
        let confirmation = confirm(information);
        // If it is, everything is good
        if (confirmation == true) {
            alert("You have confirmed");
        // If it's not, rerun the entire function from the start
        } else {
            alert("Give us the correct info then.");
            check();
        }

})();
