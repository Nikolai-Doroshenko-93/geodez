let buttonBlock = document.querySelectorAll('.services__ul--li');
let textBlock = document.querySelectorAll('.services__ul--li__text-content');
let i = 0;

for(i; i<buttonBlock.length; i++) {
    let k = i;
    buttonBlock[i].addEventListener('click', () => {
        textBlock[k].classList.toggle('services__ul--li__text-content--toggle')
    })
}
