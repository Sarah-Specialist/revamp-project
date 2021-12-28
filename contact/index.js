function menu() {
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbar = document.getElementsByClassName('navbar')[0]
  console.log("hamburger clicked")

  if (navbar.style.display == 'flex') {
      navbar.style.display = 'none';
    } else {
      navbar.style.display = 'flex';
    }

}

const numberFormat = ^[89]\d{7}$;
const phoneNumber = document.getElementById("number");
if (phoneNumber !== numberFormat) {
  alert "Please enter a valid phone number";
}

// Unable to find concensus on email validation, hence left out for this project