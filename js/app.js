

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
toTopBtn.addEventListener('click', function () {
	window.scrollTo(0, 0);
})

