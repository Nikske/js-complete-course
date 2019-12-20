/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        let userYear = Number(document.getElementById("year").value);
        function month13(year) {
            // Going through each month until we run out
            for (let month = 0; month < 12; month++) {
                // Check for every 13th day
                let date = new Date(year, month, 13);
                // Check if it's a friday
                if (date.getDay() === 5) {
                    const monthArray = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
                    alert(monthArray[Number(month)]);
                }
            }
        }
        console.log(month13(userYear));
    });

})();
