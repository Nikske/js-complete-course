/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
            let pwOne = document.getElementById("pass-one");
            let pwTwo = document.getElementById("pass-two");
            if(pwOne.value !== pwTwo.value){
                pwTwo.style.borderColor = "red";
                console.log("bad");
            } else {
                pwTwo.style.borderColor = "green";
                console.log("good");
            }
    });
})();
