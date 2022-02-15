function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior:'smooth'
	})
}

var button = document.querySelector('.futures');

button.addEventListener('click', () => {
	console.log('okay')
})