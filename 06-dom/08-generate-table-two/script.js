/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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

    // 10 rows, start at 1
    for(let rows = 1; rows <= 10; rows++){
        let row = table.insertRow();
        // 10 columns
        for(let cols = 1; cols <= 10; cols++) {
            let col = row.insertCell();
            col.innerHTML= rows * cols;
        }
    }
})();
