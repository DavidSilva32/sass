//Global Variables
const header = document.querySelector('.header')
const brand = document.querySelector('.header-brand')
const menu = document.querySelector('.header-menu')
const menuCl = document.querySelector('.header-close')
const navBar = document.querySelector('.header-navbar')
const socialMedia = document.querySelector('.header-social-media')

menu.addEventListener('click', clickMenu)
menuCl.addEventListener('click', closeMenu)

function size() {
    if (window.innerWidth >= 768) {
        header.style.flexDirection = 'row'
        brand.style.display = 'flex'
        menu.style.display = 'none'
        menuCl.style.display = 'none'
        navBar.style.dispaly = 'flex'
        socialMedia.style.display = 'flex'
    } else {
        closeMenu();
    }
}

function clickMenu() {
    header.style.flexDirection = 'row-reverse'
    brand.style.display = 'none'
    menu.style.display = 'none'
    menuCl.style.display = 'flex'
    socialMedia.style.display = 'flex'
}

function closeMenu() {
    header.style.flexDirection = 'row'
    brand.style.display = 'flex'
    menu.style.display = 'flex'
    menuCl.style.display = 'none'
    socialMedia.style.display = 'none' 
}