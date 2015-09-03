(function(){
	var app;
	app = {
		init: function () {
			this.setUpListeners();
		},
		setUpListeners: function () {
			$(window).on('scroll', this.scrolledMenuDisplay);
			$('.navigation-link').on('click', this.navMenuScroll);
			$('.section-portfolio__btn-link').on('click', this.linkActive);
			$('.scroll-menu__link').on('click', this.scrollMenuActive);
			$('#form-send').on('submit', this.sendMsg);
		},

		// появление фиксированного меню при скроле страницы

		scrolledMenuDisplay: function () {
			if ($(window).scrollTop() > 110) {
				$('.scroll-menu').fadeIn(300);
			} else {
				$('.scroll-menu').fadeOut(300);
			}
		},

		// плавный переход от меню в первом секшене к выбранному секшену

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
		},

		// уведомление об успешной отправке письма(без самой отправки!)

		sendMsg: function(e){
			e.preventDefault();

			var $this = $(this),
				successMes = $('.form__success-message'),
				fields = $this.find('.form-field'),
				markup = "<div class='form__success-message'>Sent a letter!</div>";

			if(successMes){
				successMes.remove();
				$this.append(markup);
			} else {
				$this.append(markup);
			}

			setTimeout(function () {
				$('.form__success-message').remove();
			}, 4000);

			$this.trigger('reset');
			fields.removeClass('success-field');
		}
	};
	app.init();
}());