/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function() {
        fetch("../../_shared/api.json").then((response) => {
            return response.json();
        })
            .then((data) => {
                let heroes = data.heroes;
                // For each element in the heroes table inside the json, duplicate it and fill it correctly
                heroes.forEach(function (element) {
                    let heroesTable = document.getElementById("tpl-hero");
                    let clone = heroesTable.content.cloneNode(true);
                    clone.querySelector(".name").innerHTML = "'" + element.name + "'";
                    clone.querySelector(".alter-ego").innerHTML = element.alterEgo;
                    clone.querySelector(".powers").innerHTML = element.abilities;
                    document.getElementById("target").appendChild(clone);
                })
            })
    });
})();
