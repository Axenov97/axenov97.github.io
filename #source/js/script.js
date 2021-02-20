const navigation = document.querySelector('.header__navigation');
const burger = document.querySelector('.header__burger');
const coText = document.querySelector('.co-text');
const close = document.querySelector('.about-us__content_close');

function toggleActive (elem){
    elem.classList.toggle('active');
}

burger.onclick = function(){
    toggleActive(this);
    toggleActive(navigation);
}

coText.onclick = function(){
		toggleActive(this);
		toggleActive(close);
		if(this.innerHTML == 'Читать далее...'){
			this.innerHTML = 'Скрыть';
		}
		else this.innerHTML = 'Читать далее...';
}




