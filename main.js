$(function(){
  $(".iama").typed({
      strings: ["Statistician", "Epidemiologist", "Developer^5000"],
      typeSpeed: 50,
      backSpeed: 20,
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
