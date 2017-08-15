let i,
		slideIndex = 0;
const arrImg = [
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg'
],
	slides = document.querySelectorAll('.mySlides'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dots = document.querySelector('.dots'),
	dot = document.querySelectorAll('.dot'),
	dot1 = document.getElementById('dot1'),
	dot2 = document.getElementById('dot2'),
	dot3 = document.getElementById('dot3'),
	btn = document.querySelector('button'),
	aud = new Audio('2055_new-rington.ru_.mp3');

prev.addEventListener('click', showSlides);
next.addEventListener('click', showSlides);
dots.addEventListener('click', showSlides);
btn.addEventListener('click', playMusic);


function showSlides(e) {
	if (e.target.classList.contains('next')) {

		if (slideIndex === slides.length - 1) {
    		slideIndex = 0;
				for (i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				dot[i].classList.remove('active-dot');
				}
    		slides[slideIndex].classList.add('active');
				dot[slideIndex].classList.add('active-dot');
  		} else {
      		slides[slideIndex + 1].style.backgroundImage = 'url(' + arrImg[slideIndex + 1] + ')';
        	slides[slideIndex + 1].classList.add('active');
        	slides[slideIndex].classList.remove('active');
					dot[slideIndex].classList.remove('active-dot');
					dot[slideIndex + 1].classList.add('active-dot');
      		slideIndex += 1;
			}	  	
	} else {
		if ( slideIndex > 0) {
			slides[slideIndex].classList.remove('active');
			slides[slideIndex - 1].classList.add('active');
			dot[slideIndex].classList.remove('active-dot');
			dot[slideIndex - 1].classList.add('active-dot');
		}
		slideIndex -= 1;
		if (slideIndex < 0) {
			slides[slideIndex + 1].classList.remove('active');
			dot[slideIndex + 1].classList.remove('active-dot');
			slideIndex = slides.length - 1;
			slides[slideIndex].classList.add('active');
			dot[slideIndex].classList.add('active-dot');
		}
	}	

	if (e.target.id === 'dot2')	{
		slideIndex = 1;
		slides[slideIndex - 1].classList.remove('active');
		slides[slideIndex + 1].classList.remove('active');
		slides[slideIndex].classList.add('active');
		slides[slideIndex].style.backgroundImage = 'url(' + arrImg[slideIndex] + ')';
		dot[slideIndex - 1].classList.remove('active-dot');
		dot[slideIndex + 1].classList.remove('active-dot');
		dot[slideIndex].classList.add('active-dot');
	}
	if (e.target.id === 'dot3')	{
		slideIndex = 2;
		slides[slideIndex - 1].classList.remove('active');
		slides[slideIndex - 2].classList.remove('active');
		slides[slideIndex].classList.add('active');
		slides[slideIndex].style.backgroundImage = 'url(' + arrImg[slideIndex] + ')';
		dot[slideIndex - 1].classList.remove('active-dot');
		dot[slideIndex - 2].classList.remove('active-dot');
		dot[slideIndex].classList.add('active-dot');
	}
}

function playMusic(e) {
	if (btn.textContent !== 'Выключить аудио') {
		aud.play();
		btn.textContent = 'Выключить аудио';
	} else {
		aud.pause();
		btn.textContent = 'Включить аудио';
	}
}


