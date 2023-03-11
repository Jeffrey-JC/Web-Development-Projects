const nav = document.querySelector('nav')
window.addEventListener('scroll', fixNav)

//Makes the navigation bar turn white when scroll down
//Makes navigation bar turn black when scroll up
function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}