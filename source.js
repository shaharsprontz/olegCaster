function sentenceGenerator() {
var stories = ["לכל פאזל חסרה קובייה",
               "כן כן",
               "poopUp",
               "First Cless",
               "למה אין קול סקסי במעלית",
               "מי שהולך קדימה הולך אחורה",
               "למה חומוס זה עם טחינה", "פעם שלישית צרבת", "עבר ביניהם פיל שחור", "לפעמים יש גלים ויש פקקים",
               "אכלתי בוטנים בשבת", "חצי יום שמח", "החיים זה כמו גבינה"],

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


//     function rand(n) {
//         return ( Math.floor(Math.random() * n + 1) );
//     }

// // Store youtube [CHANGES NEEDED IN THE 3 URLS BELOW]
//     var vids = [];
//     vids[0] = "https://youtu.be/dopR7uhKErQ?autoplay=1";
//     vids[1] = "https://youtu.be/D3NxCJNMHNM?autoplay=1";
//     vids[2] = "https://youtu.be/OvJtEIHUOis?autoplay=1";


// // Pick a random video from the list
//     function pick_vid() {
//         var numberOfImages = 3; //[CHANGE THE 3 TO THE TOTAL NUMBER OF VIDS YOU USE]
//         var num = rand(numberOfImages) - 1;

//         document.getElementById("random_youtube_vid").src = vids[num];
//     }

//     window.onload = pick_vid;
//     setTimeout(function(){
//     location.reload();
//     }, 10000);

