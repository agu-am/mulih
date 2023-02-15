const btnBars = document.querySelector('#menuBtn')
const navMenu = document.querySelector('.nav-menu')


btnBars.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
})
