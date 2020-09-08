function canclelogin(){
    var x = document.getElementById("mainclosebtn");
      location = "../index.html"
    }


    // show password
    function showpass() {
      var x = document.getElementById("password");
      var y = document.getElementById("show-pass-btn");
      if (x.type === "password") {
        x.type = "text";
        y.innerText = "visibility";
      } else {
        x.type = "password";
        y.innerText = "visibility_off";
      }
    }
    // show password
  function regshowpass() {
    var p1 = document.getElementById("pass1");
    var p2 = document.getElementById("pass2");
    var y = document.getElementById("reg-show-pass-btn");
    if (p1.type === "password") {
      p1.type = "text";
      p2.type = "text";
      y.innerText = "visibility";
    } else {
      p1.type = "password";
      p2.type = "password";
      y.innerText = "visibility_off";
    }
  }

    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 6000);
    }


    function contextmenu() {
      document.addEventListener('contextmenu',
        event => event.preventDefault());
    }

    var modal = document.getElementById("myModal");

    var btn = document.getElementById("myBtn");


    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }
