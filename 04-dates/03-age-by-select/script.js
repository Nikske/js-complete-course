/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        // Values from dropdown fields
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        // Current date to check against the input fields
        let currentDate = new Date();
        let calcAge = currentDate.getFullYear() - year;
        let calcMonth = currentDate.getMonth() - month;
        //Check whether the input birthday has happened yet, if not decrease age by one. Thanks Talisa.
        if (calcMonth < 0 || (calcMonth === 0 && currentDate.getDate() < day)) {
            calcAge--;
        }
        alert(calcAge);
    });
})();
