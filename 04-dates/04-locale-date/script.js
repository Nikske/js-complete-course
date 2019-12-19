/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let currentDate = new Date();
    // Options to edit the way you want to display your string
    let options = {hour12:false, weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'numeric', minute:'numeric'};
    // Setting locale to england and including the options variable
    document.getElementById("target").innerHTML = (currentDate.toLocaleString('en-UK', options));

})();
