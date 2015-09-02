$('input[placeholder], textarea[placeholder]').placeholder();

(function(){
	var app;
	app = {
		init: function () {
			this.setUpListeners();
		},
		setUpListeners: function () {
			$(window).on('load', this.centerContent);
			$(window).on('resize', this.centerContent);
			$(window).on('scroll', this.scrolledMenuDisplay);
			$('.navigation-link').on('click', this.navMenuScroll);
			$('.section-portfolio__btn-link').on('click', this.linkActive);
			$('.scroll-menu__link').on('click', this.scrollMenuActive);
		},

		// центрирование заголовка первого section

		centerContent: function () {
			var content = $('.section__content'),
				parent = $('.section-welcome'),
				marginTop, marginLeft;

			marginTop = (parent.height() - content.outerHeight()) / 2;
			marginLeft = (parent.width() - content.outerWidth()) / 2;
			content.css({
				position: 'absolute',
				top: marginTop,
				left: marginLeft
			});
		},

		// появление фиксированного меню при скроле страницы

		scrolledMenuDisplay: function () {
			if ($(window).scrollTop() > 110) {
				$('.scroll-menu').fadeIn(300);
			} else {
				$('.scroll-menu').fadeOut(300);
			}
		},

		// плавный переход от меню в первом секшене к выбранному секшну

		navMenuScroll: function (e) {
			e.preventDefault();

			var $this = $(this),
				linkHref = $this.attr('href');

			$.scrollTo(linkHref, 800);
		},

		// выделение активной ссылки в портфолио

		linkActive: function (e) {
			e.preventDefault();

			var $this = $(this);

			$this.addClass('active').siblings().removeClass('active');
		},

		// выделение активной ссылки в фиксированном меню и плавный переход

		scrollMenuActive: function (e) {
			e.preventDefault();

			var $this = $(this),
				linkHref = $this.attr('href');

			if ($this) {
				$this.addClass('scroll-active').siblings().removeClass('scroll-active');
				$.scrollTo(linkHref, 800);
			}
		}
	};
	app.init();
}());