/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Collect all info of img tags in a variable
    let hoverImage = document.getElementsByTagName("img");

    // Hover, change src attribute in variable image
    hoverImage[0].addEventListener("mouseenter", function () {
        hoverImage[0].setAttribute("src", "../../_shared/img/kiss-wink-heart.svg");
    });
    // Change back to original image after the mouse leaves.
    hoverImage[0].addEventListener("mouseleave", function() {
        hoverImage[0].setAttribute("src", "../../_shared/img/kiss.svg");
    });
})();
