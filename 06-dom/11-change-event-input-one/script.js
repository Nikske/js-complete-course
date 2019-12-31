/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Set the max length of the input to 10
    let pwOne = document.getElementById("pass-one");
    pwOne.setAttribute("maxlength", '10');

    // Add keyup to input field, running the update function.
    pwOne.addEventListener("keyup", update);

    // Get the length of the target of the event (input field) and update the number in html each time a key is released.
    function update(long){
        console.log(long);
        let number = long.currentTarget.value.length;
        document.getElementById("counter").innerHTML = number + "/10";
    }

})();
