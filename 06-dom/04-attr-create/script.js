/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Get data-image in a var
    let sauce = document.getElementById("source").getAttribute("data-image");

    // Create a new img object using the data-image var as a source
    let newImg = document.createElement("img");
    newImg.setAttribute("src", sauce);
    newImg.setAttribute("alt", "random kitty");

    // Put the newly created image into the #target figure so it can be viewed
    document.getElementById("target").appendChild(newImg);

})();
