jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});

function validateForm() {
    let x = document.forms["form"]["username"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }