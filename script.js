const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navegation = document.getElementsByClassName('navegation')[0]

toggleButton.addEventListener('click', () => {
    navegation.classList.toggle('active')
})