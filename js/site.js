jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});

function validateForm() {
    let x = document.forms["form"]["username"].value;
    if (x == "") {
        var userField = document.getElementById("username");
        userField.textContent += "Username is empty!";
      return false;
    }
  }