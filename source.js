function sentenceGenerator(){
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
