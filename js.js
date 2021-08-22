let buttonBlock = document.querySelectorAll('.services__ul--li');
let textBlock = document.querySelectorAll('.services__ul--li__text-content');
let i = 0;

for(i; i<buttonBlock.length; i++) {
    let k = i;
    buttonBlock[i].addEventListener('click', () => {
            textBlock[k].classList.toggle('services__ul--li__text-content--toggle')
    })
}

let menuBtn = document.querySelector('.menu__btn');
let navUl = document.querySelector('.header__nav__ul');
let navUlItem =document.querySelectorAll('.header__nav__ul--li');
let bodyOverlay = document.querySelector('.body__overlay');
let body = document.querySelector('.body');

for (let i=0; i<navUlItem.length; i++) {
    navUlItem[i].addEventListener ('click', () => {
        navUl.classList.remove('header__nav-ul-toggle');
        bodyOverlay.classList.remove('body__overlay-toggle');
        body.classList.remove('body__overflow');
    })
}
    
bodyOverlay.addEventListener('click', () => {
    navUl.classList.remove('header__nav-ul-toggle');
    body.classList.remove('body__overflow');
    bodyOverlay.classList.remove('body__overlay-toggle');
})

menuBtn.addEventListener('click', () => {
    navUl.classList.toggle('header__nav-ul-toggle');
    bodyOverlay.classList.toggle('body__overlay-toggle');
    body.classList.toggle('body__overflow');
})

