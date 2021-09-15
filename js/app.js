

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


console.group('%cCV Constantine Terentyev. Self-verification:', 'color: red');
console.log('Вёрстка валидная ' + '%c(10)',
	'color: red');
console.log(
	'%c  проверено валидатором ' + '%chttps://validator.w3.org/nu/?doc=https%3A%2F%2Fconstantinetu.github.io%2Frsschool-cv%2F' + '%c – Document checking completed. No errors or warnings to show." +10',
	'color: blue', 'color: green', 'color: blue'
);
console.log('вёрстка семантическая ' + '%c(20)',
	'color: red');
console.log(
	'%c  используются уникальные семантические теги article, aside, footer, header, main, nav, section - 7*2=14 (+14)',
	'color: blue'
);
console.log('%c  используются уникальные заголовки h1, h2, h3, h4 - 4*2=8 (+6)', 'color: blue');
console.log('Для оформления СV используются css-стили ' + '%c(10)',
	'color: red');
console.log(
	'контент размещается в блоке, который горизонтально центрируется на странице, фоновый цвет, если он есть, тянется во всю ширину страницы ' + '%c(10)',
	'color: red'
);
console.log(
	'вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется ' + '%c(10)',
	'color: red'
);
console.log(
	'есть меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным ' + '%c(10)',
	'color: red'
);
console.log(
	'на странице СV присутствует изображение, пропорции не искажены, есть атрибут alt ' + '%c(10)',
	'color: red'
); console.log(
	'контакты для связи и перечень навыков оформлены в виде списка ul > li ' + '%c(10)',
	'color: red'
);
console.log(
	'CV содержит контакты для связи, краткую информацию о себе, перечень навыков, примеры кода или выполненных проектов, информацию об образовании и уровне английского ' + '%c(10)',
	'color: red'
);
console.log(
	'CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода ' + '%c(10)',
	'color: red'
);
console.log(
	'CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий ' + '%c(10)',
	'color: red'
);
console.log(
	'CV выполнено на английском языке ' + '%c(10)',
	'color: red'
);
console.log(
	'выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) ' + '%c(10)',
	'color: red'
);
console.log(
	'%cнет видеорезюме автора CV на английском языке. В описание видео на YouTube добавлена его транскрипция на английском языке. (0)',
	'color: red'
);
console.log(
	'дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию ' + '%c(10)' + '%c (Считаю, что моё резюме выглядит на уровне лучших) ', 'color: red', 'color: blue'
);
console.log(
	'%cScore 150/ 160', 'color: green'
);
console.log(
	'%cСсылка на Pull Request - ' + '%chttps://github.com/ConstantineTU/rsschool-cv/pull/5', 'color: blue', 'color: green'
);
console.groupEnd()


