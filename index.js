function menu() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbar = document.getElementsByClassName('navbar')[0]
    console.log("hamburger clicked")
    navbar.style.display="flex";
}

/*
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
*/