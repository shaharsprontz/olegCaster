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
//
// //
// // var videos = [
// //     'IMG_6222.MOV',
// //     'IMG_6223.MOV',
// //     'IMG_6224.MOV'
// // ];
// //
// // var index=Math.floor(Math.random() * videos.length);
// // var html='<div id="vid" <iframe width="100%" height="200" src="https://github.com/shaharsprontz/olegCaster/tree/gh-pages/media' + videos[index] + '" frameborder="0" allowfullscreen></iframe></div>';
// // document.write(html)
// }
     
     
     function rand(n) {
         return ( Math.floor(Math.random() * n + 1) );
     }

// Store youtube [CHANGES NEEDED IN THE 3 URLS BELOW]
     var vids = [];
     vids[0] = "https://github.com/shaharsprontz/olegCaster/blob/gh-pages/media/IMG_6222.MOV";
     vids[1] = "https://github.com/shaharsprontz/olegCaster/blob/gh-pages/media/IMG_6223.MOV";
     vids[2] = "https://github.com/shaharsprontz/olegCaster/blob/gh-pages/media/IMG_6224.MOV";


// Pick a random video from the list
     function pick_vid() {
         var numberOfImages = 3; //[CHANGE THE 3 TO THE TOTAL NUMBER OF VIDS YOU USE]
         var num = rand(numberOfImages) - 1;

         document.getElementById("random_youtube_vid").src = vids[num];
     }

     window.onload = pick_vid;

 }