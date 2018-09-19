$(function(){
  $(".iama").typed({
      strings: ["Backpacker", "Runner", "Leader", "Statistician", "Developer^2500"],
      typeSpeed: 20,
      backSpeed: 10,
      loop: true,
  });
})

$(function(){
  $(".projectsin").typed({
      strings: ["Python", "Javascript", "Node.js", "Java", "R+ggplot"],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true
  });
})

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

var x;
var slideIndex;

$(function(){
  slideIndex = 1;
  x = document.getElementsByClassName("slide");
  showSlides(slideIndex);
})

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function slideNum(n) {
  showDivs(slideIndex = n);
}


function showSlides(n) {
  var i;

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
