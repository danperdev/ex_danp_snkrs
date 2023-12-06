$(document).ready(function() {
    $('#carrousel-imagens').slick( {
        autoplay: true
    })
})

$(document).ready(function() {
    $('#carousel-imagens').slick( {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 600,
        fade: true,
        cssEase: 'linear',
    })
})

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}