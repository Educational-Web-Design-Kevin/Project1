jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});

function validateForm() {
    let x = document.forms["form"]["username"].value;
    if (x == "") {
        var paragraph = document.getElementById("username");
        var errorMesg = document.createTextNode("Username must be filled out!");
        paragraph.appendChild(errorMesg);
      return false;
    }
  }