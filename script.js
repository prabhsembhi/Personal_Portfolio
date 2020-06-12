/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var mediaQuery = window.matchMedia("(min-width: 1230px)");
  if (mediaQuery.matches) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  }
};


$(".menu-btn").click(function(){
    $(".menu-btn").toggleClass("close");
    $("#nav").slideToggle();
  });
  $("#nav")


  var i = 0;
var txt =  "I am Prabh Sembhi,"+"\n"+ "Software Developer";
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}