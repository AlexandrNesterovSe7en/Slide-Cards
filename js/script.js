const containerSlide = document.querySelector('.container')
const slides = document.querySelectorAll('.slide')


containerSlide.addEventListener('click', (event) => {
	if(event.target.closest('.slide') && event.target != event.target.closest('h3')){
		slides.forEach((slide) => slide.classList.remove('active'))
		event.target.classList.add('active')
	}
})