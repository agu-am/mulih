const btnBars = document.querySelector('#menuBtn')
const navMenu = document.querySelector('.header-container-ul')


btnBars.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
})
