function sentenceGenerator(){
var stories = ["All puzzles are missing a square",
               "Yes Yes",
               "poopUp",
               "First Cless",
               "Why the voice in the elevator isn't sexy",
               "If you're not walking forward, you are walking backwords",
               "Why Humus has tahini in it?!", "Third time, Heartburn", "A black elephant passed through them", "Sometimes there are waves and sometimes traffic jam",
               "I ate peanuts on suturday", "Happy half day!", "Life is like cheese", ""], 
    
i = -1;
(function f(){
    i = (i + 1) % stories.length;
    var div = document.getElementById('displayLines');
    //div.style.color = "#2ECC71";
    div.innerHTML = stories[i];
    $("#displayLines").fadeIn(3000);
    setTimeout(f, 10000);
    $("#displayLines").fadeOut(3000);
 })();
};
