window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("logo").querySelector('img').style.width = "200px";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").querySelector('img').style.width = "250px";
  }
}