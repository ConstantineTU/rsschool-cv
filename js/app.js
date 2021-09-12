

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
// scroll to top
let toTopBtn = document.getElementById('top__btn')
let btnIsTop = true
let hideTopBtn
window.addEventListener('scroll', function () {
	if (window.pageYOffset >= 300 && toTopBtn.classList[1] === undefined) {
		toTopBtn.classList.add('show')
		btnIsTop = false
		if (!btnIsTop) {
			hideTopBtn = setInterval(() => {
				toTopBtn.classList.remove('show')
				clearInterval(hideTopBtn)
			}, 5000);
		}
	} else if (window.pageYOffset < 300) {
		toTopBtn.classList.remove('show')
		btnIsTop = true
		clearInterval(hideTopBtn)
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


