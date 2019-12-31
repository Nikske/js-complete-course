/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Add keyup to input to run update function
    let pwOne = document.getElementById("pass-one");
    pwOne.addEventListener("keyup", update);

    function update(long){
        // Length of the input, to check if it's at least 8 chars long
        let inputLength = long.currentTarget.value.length;
        // Actual value of the input, to check if it has at least 2 numbers
        let inputValue = long.currentTarget.value;
        // Using Regex to check for 2 numbers
        let inputNumbers = new RegExp("[0-9].*[0-9]");
        // Check if both the statements are correct, otherwise the input field is sad
        if(inputLength >= 8 && inputNumbers.test(inputValue)){
            document.getElementById("validity").innerHTML = ":)";
        } else {
            document.getElementById("validity").innerHTML = ":(";
        }

    }
})();
