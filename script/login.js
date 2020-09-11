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

   

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    var forgotpass = document.getElementById("forgotpass");

    btn.onclick = function () {
      modal.style.display = "block";
    }
    forgotpass.onclick = function () {
      location = "../index.html"

    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }
