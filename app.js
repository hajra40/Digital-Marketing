const bars = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-times');
const sm__navbar = document.querySelector('.sm__navbar');
const list = document.querySelectorAll('li');



bars.addEventListener('click' , showMenu);
close.addEventListener('click', hideMenu);

for(var i=0;i<list.length;i++){
    list[i].addEventListener('click', hideMenu);
}


function showMenu () {
    sm__navbar.classList = 'sm__navbar show'
}

function hideMenu () {
    sm__navbar.classList = 'sm__navbar';

}


