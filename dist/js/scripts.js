$('.main-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000
});

$('.main-mobile-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	autoplay: true,
	autoplaySpeed: 2000
});

$('.about-us__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000
});

$('.success__slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	autoplay: true,
	autoplaySpeed: 2000,
	customPaging: 10,
	responsive: [
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 425,
			settings: {
				slidesToShow: 1
			}
		}
	]
});


$(document).ready(function () {
	/* Блок с подарком */
	$('.surprize-btn').on('click', function () {
		$('body').addClass('no-scroll');
		$('.overlay').fadeIn(200);
		$('.surprize-block').fadeIn(200);
		$('.surprize-block').css('display', 'flex');
	});
	$('.surprize-block__close').on('click', function () {
		$('.overlay').fadeOut(200);
		$('.surprize-block').fadeOut(200);
		$('body').removeClass('no-scroll');
	});
	$('.overlay').mouseup(function (a) {
		var elem = $('.surprize-block');
		if (a.target != elem[0] && !elem.has(a.target).length) {
			elem.fadeOut(200);
			$('.overlay').fadeOut(200);
			$('body').removeClass('no-scroll');
		}
	});

	/* Регистрация/вход */
	$('.page-header__login, .page-header__auth').on('click', function (e) {
		e.preventDefault();
		$('.login-block').fadeIn(200);
	});
	$('.login-block__close').on('click', function () {
		$('.login-block').fadeOut(200);
	});
	$(document).mouseup(function (b) {
		var elem = $('.login-block');
		if (b.target != elem[0] && !elem.has(b.target).length) {
			elem.fadeOut(200);
		}
	});


	/* Мобильное меню */

	$('.header-mini__toggle').on('click', function () {
		$('.overlay').fadeIn(300);
		$('.mobile-menu').css('transform', 'translate(0, 0)');
	});
	$('.overlay').mouseup(function (c) {
		var elem = $('.mobile-menu');
		if (c.target != elem[0] && !elem.has(c.target).length) {
			elem.css('transform', 'translate(-1000px, 0)');
			$('.overlay').fadeOut(300);
		}
	});

	/* Смена карты на странице Контакты */

	$('.contacts__tab-toggle').on('click', function () {
		$('.contacts__tab-toggle').removeClass('active');
		$(this).addClass('active');
		var dataId = $(this).attr('data-id');
		$('.contacts__map').removeClass('active');
		$('.contacts__map#' + dataId).addClass('active');
	});

	/* Добавить отзыв */

	$('.reviews-page__add-review').on('click', function () {
		$('.add-review').fadeIn(300);
	});
	$('.add-review__close').on('click', function () {
		$('.add-review').fadeOut(300);
	});
	$(document).mouseup(function (c) {
		var elem = $('.add-review');
		if (c.target != elem[0] && !elem.has(c.target).length) {
			elem.fadeOut(300);
		}
	});
	
	/* Добавить отзыв */

	$('.cart__all-submit').on('click', function () {
		$('.pay-online:not(.pay-online--visible)').fadeIn(300);
	});
	$('.pay-online__close').on('click', function () {
		$('.pay-online:not(.pay-online--visible)').fadeOut(300);
	});
	$(document).mouseup(function (c) {
		var elem = $('.pay-online:not(.pay-online--visible)');
		if (c.target != elem[0] && !elem.has(c.target).length) {
			elem.fadeOut(300);
		}
	});

	/* Ховер на товаре */
	$('.catalog .good-item__img:not(.good-item__img--soldout)').hover(function () {
		$(this).hide();
		$(this).next('.good-item__tocart').show();
	});
	$('.good-item__tocart').hover(function () {
		$(this).show();
	}, function () {
		$(this).hide();
		$(this).prev('.good-item__img').show();
	})
	
	/* Оплата-Доставка */
	$('.cart-ordering__tab--dev').on('click', function(e){
		e.preventDefault();
		$('.cart-ordering__tab--pay').removeClass('active');
		$(this).addClass('active');
		$('.cart-ordering__delivery').show();
		$('.cart-ordering__pay').hide();
	});
	$('.cart-ordering__tab--pay').on('click', function(e){
		e.preventDefault();
		$('.cart-ordering__tab--dev').removeClass('active');
		$(this).addClass('active');
		$('.cart-ordering__pay').show();
		$('.cart-ordering__delivery').hide();
	});
});

var offsetCont = $('.container').offset().left;
$('.write-us').css('right', offsetCont + 25);

$(window).resize(function () {
	var offsetCont = $('.container').offset().left;
	$('.write-us').css('right', offsetCont + 25);
})