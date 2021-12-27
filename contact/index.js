const numberFormat = ^[89]\d{7}$;
const phoneNumber = document.getElementById("number");
if (phoneNumber !== numberFormat) {
  alert "Please enter a valid phone number";
}

// Unable to find concensus on email validation, hence left out for this project