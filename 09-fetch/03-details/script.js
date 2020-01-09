/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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
                heroes.forEach(function (element) {
                    let heroesTable = document.getElementById("tpl-hero");
                    let heroId = document.getElementById("hero-id").value;
                    let clone = heroesTable.content.cloneNode(true);
                    // If the input value matches one of the hero's index, display their info
                    if (heroId == element.id) {
                        clone.querySelector(".name").innerHTML = "'" + element.name + "'";
                        clone.querySelector(".alter-ego").innerHTML = element.alterEgo;
                        clone.querySelector(".powers").innerHTML = element.abilities;
                        document.getElementById("target").appendChild(clone);
                    }
                })

            })
    });
})();
