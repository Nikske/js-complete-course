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

    //
    pwOne.addEventListener("keyup", update);

    function update(pwOne){
        console.log(pwOne);
        let number = pwOne.length;
        document.getElementById("counter").innerHTML = number + "/10";
    }

})();
