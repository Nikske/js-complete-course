/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let i=0;
    let galleryImage = document.getElementsByTagName("img");

    document.getElementById("next").addEventListener("click", function() {
       if (i == 5) {
            i = 0;
       }
       galleryImage[0].setAttribute("src", gallery[i]);
       i++;
    });
})();
