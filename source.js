function sentenceGenerator(){
var stories = ["All puzzles are missing a square",
               "yes yes",
               "poopUp",
               "First Cless",
               "Why the voice in the elivator isn't sexy",
               "If you're not walking forward, you are working backwords"], 
    i = -1;
(function f(){
    i = (i + 1) % stories.length;
    var div = document.getElementById('displayLines');
    div.innerHTML = stories[i];
    setTimeout(f, 5000);
 })();
};
