var popup = document.getElementById("popup");

function show(){
    popup.style.zIndex = 5;
    popup.style.display = "flex";
}

popup.onclick = function(){
    popup.style.zIndex = -2;
    popup.style.display = "none";
}

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1200, function(){
          window.location.hash = hash;
        });
      } 
    });
  });
