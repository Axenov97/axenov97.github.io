const navigation = document.querySelector('.header__navigation');
const burger = document.querySelector('.header__burger');

function toggleActive (elem){
    elem.classList.toggle('active');
}

burger.onclick = function(){
    toggleActive(this);
    toggleActive(navigation);
}


