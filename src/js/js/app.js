$(document).ready(function () {

	// -------------------- header --------------------------

	$(window).scroll(function () {

		if ($(this).scrollTop() > 1) {
			$('header').addClass('sticky');

		}
		else {
			$('header').removeClass('sticky');

		}
	});

	// -------------------- gallery--------------------------

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
				NEXT: 'Впёред',
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

	// ----------------- carousel ----------------------

	$('.mng').owlCarousel({
		loop: false,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 4,
			}
		}
	});


	$('.pts').owlCarousel({
		loop: false,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 4,
			}
		}
	});


	$('.crti').owlCarousel({
		loop: false,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 3,
			}
		}
	});

	$('.gt').owlCarousel({
		loop: true,
		nav: false,
		navText: ['', ''],
		dots: true,
		autoplay: false,
		autoplayTimeout: 3000,
		items: 1

	});

	// -------------------- Scroll -------------------------

	$(".srolls").on("click", "a", function (event) {
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

	// ------------- Show More ---------------------
	$("article.style-desc").has("p:nth-child(1)").append('<div class="more"><span>Узнать больше</span><img src="img/icons/next.svg" alt=""></div>');
	$("article.style-desc .more").click(function () {
		var $this = $(this),
			$cards = $(this).closest('.style-desc');
		$cards.toggleClass('open');
		$this.find('span').html($cards.hasClass('open') ? 'Свернуть' : 'Узнать больше')
	});
	// -------------------- Acordion -------------------------



	// ACCORDION
	// =========
	$(".principles-accordion").each(function () {

		var acc = document.getElementsByClassName("principles-box");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				this.classList.toggle("active");
				//var panel = this.nextElementSibling;
				var panel = this.querySelector('.body');
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}

	});

	$(".faq-accordion").each(function () {

		var acc = document.getElementsByClassName("faq-box");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				this.classList.toggle("active");
				//var panel = this.nextElementSibling;
				var panel = this.querySelector('.body');
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}

	});

	$(".design-accordion").each(function () {

		var acc = document.getElementsByClassName("design-box");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				this.classList.toggle("active");
				//var panel = this.nextElementSibling;
				var panel = this.querySelector('.body');
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}

	});

	$(".hr-accordion").each(function () {

		var acc = document.getElementsByClassName("hr-box");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				this.classList.toggle("active");
				//var panel = this.nextElementSibling;
				var panel = this.querySelector('.body');
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}

	});

	// -------------------- Tabs -------------------------

	$('.all-link').on('click', function () {
		$('.tabs').children("div").children("div").hide();
		$('.tabs').children("div").children("div").eq(2).show();
		$('.tabs').children("ul").children("li").removeClass("active");
		$('.tabs').children("ul").children("li").eq(2).addClass("active");
	});

	$(".product-page").on("click", "a.all-link", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top - 100 }, 700);
	});

	(function ($) {
		jQuery.fn.lightTabs = function (options) {

			var createTabs = function () {
				tabs = this;
				i = 0;

				showPage = function (i) {
					$(tabs).children("div").children("div").hide();
					$(tabs).children("div").children("div").eq(i).show();
					$(tabs).children("ul").children("li").removeClass("active");
					$(tabs).children("ul").children("li").eq(i).addClass("active");
				}

				showPage(0);

				$(tabs).children("ul").children("li").each(function (index, element) {
					$(element).attr("data-page", i);
					i++;
				});

				$(tabs).children("ul").children("li").click(function () {
					showPage(parseInt($(this).attr("data-page")));
				});
			};
			return this.each(createTabs);
		};
	})(jQuery);

	$('.tabs').lightTabs();


	//end
});