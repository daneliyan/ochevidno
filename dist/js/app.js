
/*=== DARK LIGHT THEME ==================================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=== Search (Header) ==================================*/
let searchHiddenInput = document.querySelector("#searchHiddenInput");
let searchToggleBtn = document.querySelector("#searchToggleBtn");
let searchBarLabel = document.querySelector("#searchBarLabel");
searchToggleBtn.addEventListener("click", () => {
	searchBarLabel.classList.toggle("active");
	searchHiddenInput.focus();
});
document.addEventListener("click", (event) => {
	if (!event.target.matches("#searchBarLabel, #searchToggleBtn, #searchToggleBtn i, #searchHiddenInput")) {
		searchBarLabel.classList.remove("active");
	}
});
window.onscroll = () => {
	searchBarLabel.classList.remove("active");
}


/*=== Burger Menu ==================================*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle');
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navToggle.querySelector('i').classList.toggle('icon-remove');
		navMenu.classList.toggle('show-menu');
	});
}
const navLink = document.querySelectorAll('.nav-list li a, .nav-menu .header-bar .btn-icon')
const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));



/*=== Widget Categories ==================================*/
const widgetCategoriesItems = document.querySelectorAll('.widget_categories>ul>li')
widgetCategoriesItems.forEach((item) => {
	const widgetCategoriesHeader = item.querySelector('.widget_categories>ul>li>a')
	widgetCategoriesHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.widget_categories-open')
		toggleItem(item)
		if (openItem && openItem !== item) {
			toggleItem(openItem)
		}
	})
})
const toggleItem = (item) => {
	const widgetCategoriesContent = item.querySelector('.widget_categories>ul>li>.widget_categories-submenu')
	if (item.classList.contains('widget_categories-open')) {
		widgetCategoriesContent.removeAttribute('style')
		item.classList.remove('widget_categories-open')
	} else {
		widgetCategoriesContent.style.height = widgetCategoriesContent.scrollHeight + 'px'
		item.classList.add('widget_categories-open')
	}
}


$(document).ready(function () {


	// -------------------- header --------------------------
	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 10000) {
	// 		$('header').addClass('active');
	// 	}
	// 	else {
	// 		$('header').removeClass('active');
	// 	}
	// });

	// --------------------- Tabs ---------------------------
	var tab = $('#tabs .tabs-items > div');
	tab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#tabs .tabs-nav a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function () {
		$('#tabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
	});
	// Отрытие вкладки из хеша URL
	if (window.location.hash) {
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#".window.location.hash).offset().top);
	}

	// -------------------- Acordion -------------------------
	$('.accordion-list > li > .answer').hide();
	$('.accordion-list > li').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active").find(".answer").slideUp();
		} else {
			$(".accordion-list > li.active .answer").slideUp();
			$(".accordion-list > li.active").removeClass("active");
			$(this).addClass("active").find(".answer").slideDown();
		}
		return false;
	});

	// ----------------- onClick Dropdown -------------------
	/*1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун*/
	const menuBtns = document.querySelectorAll('.cldpd-btn');
	const drops = document.querySelectorAll('.cldpd-content');
	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.cldpd').querySelector('.cldpd-content');
			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('cldpd-btn--active');
				}
			});
			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('cldpd-content--active');
				}
			});
			drop.classList.toggle('cldpd-content--active');
			currentBtn.classList.toggle('cldpd-btn--active');
		});
	});
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.cldpd')) {
			menuBtns.forEach(el => {
				el.classList.remove('cldpd-btn--active');
			});
			drops.forEach(el => {
				el.classList.remove('cldpd-content--active');
			});
		}
	});
	
	//--------------- fancybox -----------
	$('[data-fancybox-popup]').fancybox({
		closeExisting: true,
		smallBtn: false,
		toolbar: false,
		autoFocus: false,
		hash: false,
		touch: false
	});

	// FANCYBOX CERTIFICATE
	// ====================
	$('[data-fancybox-certificate]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		touch: true,
		loop: true,
		selector: '.cert-item',
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				ZOOM: 'Увеличить',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"zoom",
			"fullScreen",
			"close"
		]
	});
	$('[data-fancybox-gallery]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		touch: true,
		loop: true,
		selector: '.gal-img',
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				NEXT: 'Вперёд',
				PREV: 'Назад',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"fullScreen",
			"close"
		]
	});

	$('[data-fancybox="gallery"]').fancybox({
		Thumbs: false,
		Toolbar: false,
		Image: {
			zoom: false,
			click: false,
			wheel: "slide",
		},
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				NEXT: 'Вперёд',
				PREV: 'Назад',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"fullScreen",
			"close"
		]
	});

	// -------------------- svg--------------------------
	function svg() {
		$('img[src$=".svg"]').each(function () {
			var $img = $(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop('attributes');
			if ($img.hasClass('svg')) {
				$.get(imgURL, function (data) {
					var $svg = jQuery(data).find('svg');
					$svg = $svg.removeAttr('xmlns:a');
					$.each(attributes, function () {
						$svg.attr(this.name, this.value);
					});
					$img.removeClass('svg').replaceWith($svg);
				}, 'xml');
			}
		});
	}
	svg();	

	// ----------------- SWIPER ----------------------
	var noveltySwiper = new Swiper(".noveltySwiper", {
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var newsblSwiper = new Swiper(".newsblSwiper", {
		spaceBetween: 36,
		slidesPerView: 3,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var blogblSwiper = new Swiper(".blogblSwiper", {
		spaceBetween: 36,
		slidesPerView: 3,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});


	var swiper = new Swiper(".mySwiper", {
		// Стрелки
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		// Пагинация (точки)
		// pagination: {
		// 	el: ".swiper-pagination",
		// },

		// Пагинация (динамическая)
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	dynamicBullets: true,
		// },

		// Прогрессбар
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	type: "progressbar",
		// },

		// Пагинация цифрами
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	type: "fraction",
		// },

		// Пагинация цифрами (кастомная)
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// 	renderBullet: function (index, className) {
		// 		return '<span class="' + className + '">' + (index + 1) + "</span>";
		// 	},
		// },

		// Скроллбар
		// scrollbar: {
		// 	el: ".swiper-scrollbar",
		// 	hide: true,
		// },

		// Вертикальный слайдер
		// direction: "vertical",

		// Отступ между слайдов
		// spaceBetween: 30,

		// Количество видимых слайдов
		// slidesPerView: 3,

		// Свободное количество слайдов. Можно использовать в паре с .swiper-slide {width: 80%;}
		// slidesPerView: "auto",

		// Центрирование слайда
		// slidesPerView: 3,
		// centeredSlides: true,

		// Центрирование слайда с автоматическим отображением слайдов.
		// slidesPerView: "auto",
		// centeredSlides: true,

		// cssMode (Вроде плавность пролистывания)
		// cssMode: true,
		// mousewheel: true,
		// keyboard: true,

		// Free Mode (Свободное пролистывание)
		// slidesPerView: 3,
		// spaceBetween: 20,
		// freeMode: true,

		// Grid
		// slidesPerView: 3,
		// grid: {
		// 	rows: 2,
		// },
		// spaceBetween: 30,
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },

		// Бесконечное пролистывание
		// loop: true,

		// Эффект (один из нескольких)
		// effect: "coverflow",

		// Автоматичское пролистывание
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },

		// Галерея

	});





	var swiper2 = new Swiper(".mySwiper2", {
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});

	// Scroll-container
	var swiperScroll = new Swiper(".scroll-container", {
		direction: "vertical",
		slidesPerView: "auto",
		freeMode: true,
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		mousewheel: true,
	});

	// -------------------- Scroll -------------------------
	$(".scrolls").on("click", "a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();
		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),
			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 50;
		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 800);
	});

	// -------------------------modal----------------------
	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});
	$('.close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});
	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});

	//end
});