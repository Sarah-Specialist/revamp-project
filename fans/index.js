const toggleButton = document.getElementByClassName('toggle-button');

document.getElementByClassName('toggle-button').addEventListener('click', function(evt) {
  let navbar = document.getElementById(navbar-links);
  if (navbar.style.display === 'flex') {
    navbar.style.display = 'none';
  } else if (navbar.style.display === 'none') {
    navbar.style.backgroundColor = 'flex';
  }
}, false);