/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Create table and place it in the #target div
    let table = document.createElement("table");
    document.getElementById("target").appendChild(table);

    // Create 10 rows
    for(let rows = 0; rows < 10; rows++){
        let row = table.insertRow(0);
        let cell = row.insertCell(0);
    }
})();
