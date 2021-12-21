function menu() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const hamburgerLinks = document.getElementsByClassName('navbar')[0]
    console.log("hamburger clicked")
    hamburgerLinks.classList.toggle('active');
}

/*
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const hamburgerLinks = document.getElementsByClassName('hamburger')[0]

toggleButton.addEventListener('click', () => {
    hamburgerLinks.classList.toggle('active')
})
*/