const toggleButton = document.getElementByClassName('toggle-button');

document.getElementByClassName('toggle-button').addEventListener('click', function(evt) {
  let navbar = document.getElementById(navbar-links);
  if (toggleButton.clicked) {
    navbar.style.display = 'none';
  } else if (!toggleButton.clicked) {
    navbar.style.backgroundColor = 'flex';
  }
}, false);

const numberFormat = ^[89]\d{7}$;
const phoneNumber = document.getElementById("number");
if (phoneNumber !== numberFormat) {
  alert "Please enter a valid phone number";
}

// Unable to find concensus on email validation, hence left out for this project