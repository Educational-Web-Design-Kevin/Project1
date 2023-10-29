jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});

function validateForm() {
  let eml = document.forms["form"]["email"].value;
  let usr = document.forms["form"]["username"].value;
  let pwd = document.forms["form"]["password"].value;
  if (usr == "") {
    alert("Email must be filled out");
    return false;
  }
  if (usr == "") {
    alert("Username must be filled out");
    return false;
  }
  if (usr == "") {
    alert("Password must be filled out");
    return false;
  }
}