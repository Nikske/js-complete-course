/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // {} not [], it's not an array but an object
    let newHero = {};
        fetch("../../_shared/api.json").then((response) => {
            return response.json();
        })
            .then((data) => {
                document.getElementById("run").addEventListener("click", function() {
                    let newName = document.getElementById("hero-name").value;
                    let newAlterego = document.getElementById("hero-alter-ego").value;
                    let newPowers = document.getElementById("hero-powers").value;
                    newHero ["id"] = data.heroes.length +1;
                    newHero ["name"] = newName;
                    newHero ["alterEgo"] = newAlterego;
                    newHero ["abilities"] = []; // A hero's powers is another array apparently, need to start empty and push the new ones in
                    newHero.abilities.push(newPowers);
                    // Push the newly created hero into the array with the rest of 'em
                    data.heroes.push(newHero);
                    console.log(data.heroes);
            });
    })
})();
