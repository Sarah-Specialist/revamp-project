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