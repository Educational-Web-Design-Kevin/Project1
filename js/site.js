jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});

function validateForm() {
  let eml = document.forms["form"]["email"].value;
  let usr = document.forms["form"]["username"].value;
  let pwd = document.forms["form"]["password"].value;
  if (eml == "") {
    alert("Email must be filled out");
    return false;
  } else if (usr == "") {
    alert("Username must be filled out");
    return false;
  } else if (pwd == "") {
    alert("Password must be filled out");
    return false;
  }
}