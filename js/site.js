jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});

function validateForm() {
  let eml = document.forms["form"]["email"].value;
  let usr = document.forms["form"]["username"].value;
  let pwd = document.forms["form"]["password"].value;
  if (eml == "") {
    var errorField = document.getElementById("error");
    errorField.textContent = "Email is empty!";
    return false;
  } else if (usr == "") {
    var errorField = document.getElementById("error");
    errorField.textContent = "Username is empty!";
    return false;
  } else if (pwd == "") {
    var errorField = document.getElementById("error");
    errorField.textContent = "Password is empty!";
    return false;
  }
}