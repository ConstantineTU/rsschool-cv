

// slider
let items = document.querySelectorAll('.slider .project-item')
let currentItem = 0
let isEnabled = true

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length
}

function hideItem(direction) {
	isEnabled = false
	items[currentItem].classList.add(direction)
	items[currentItem].addEventListener('animationend', function () {
		this.classList.remove('active', direction)
	})
}

function showItem(direction) {

	items[currentItem].classList.add('next', direction)
	items[currentItem].addEventListener('animationend', function () {
		this.classList.remove('next', direction)
		this.classList.add('active')
		isEnabled = true
	})
}

function previousItem(n) {
	hideItem('to-right')
	changeCurrentItem(n - 1)
	showItem('from-left')
}

function nextItem(n) {
	hideItem('to-left')
	changeCurrentItem(n + 1)
	showItem('from-right')
}

document.querySelector('#control-left').addEventListener('click', function () {
	if (isEnabled) {
		previousItem(currentItem)
	}
})

document.querySelector('#control-right').addEventListener('click', function () {
	if (isEnabled) {
		nextItem(currentItem)
	}
})
// spoiler
const spoilers = document.querySelectorAll('.spoiler')
const btnSpoiler = document.querySelector('.spoiler__click')
btnSpoiler.addEventListener('click', function () {
	for (let spoiler of spoilers) {
		if (spoiler.classList[1] === 'show') {
			setTimeout(() => {
				spoiler.classList.remove('show')
				btnSpoiler.classList.remove('active')
				setTimeout(() => {
					spoiler.classList.remove('close')
				}, 400);
			}, 1000);
			spoiler.classList.add('close')
		} else if (spoiler.classList[1] === undefined) {
			btnSpoiler.classList.add('active')
			spoiler.classList.add('show')
			spoiler.classList.remove('close')
		}
	}
})
// burger-menu
const headerBurger = document.querySelector('.header-burger')
const burgerWrap = document.querySelector('.burger-wrap')
const bodyLock = document.querySelector('body')
const itemsMenu = document.querySelectorAll('.header-menu__item')
burgerWrap.onclick = function () {
	headerBurger.classList.toggle('active')
	burgerWrap.classList.toggle('active')
	bodyLock.classList.toggle('_lock')
	burgerWrap.classList.remove('hide')
}
itemsMenu.forEach(item => item.addEventListener('click', function () {
	if (headerBurger.classList[1] === 'active') {
		burgerWrap.classList.remove('active')
		headerBurger.classList.remove('active')
		bodyLock.classList.remove('_lock')
	}
}))
// burger-hide
window.addEventListener('scroll', function () {
	if (window.pageYOffset >= 300) {
		burgerWrap.classList.add('hide')
	} else { burgerWrap.classList.remove('hide') }
})
