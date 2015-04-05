//Written by Adrian Boisclair
var header, logo, yPos;
function yScroll() {
    //create our variables
    header = document.getElementById('header');
    logo = document.getElementById('logo');
    link = document.getElementsByClassName("link");
    yPos = window.pageYOffset;
    //if the scrollbar has scrolled more than 150 pixels then do this....
    if (yPos > 150) {
        header.style.height = "64px";
        header.style.paddingTop = "0px";
        logo.style.fontSize = "20px";
        for (var i = 0; i < link.length; i++) {
            link[i].style.fontSize = "10px";
        }
    } else { //if it hasn't scrolled that much then do this...
        header.style.height = "120px";
        header.style.paddingTop = "50px";
        logo.style.fontSize = "35px";
        for (var i = 0; i < link.length; i++) {
            link[i].style.fontSize = "16px";
        }
    }
}
window.addEventListener("scroll", yScroll); //set the event listener