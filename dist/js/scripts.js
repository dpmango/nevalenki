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


$(document).ready(function () {
	/* Блок с подарком */
	$('.surprize-btn').on('click', function () {
		$('.overlay').fadeIn(200);
		$('.surprize-block').fadeIn(200);
		$('.surprize-block').css('display', 'flex');
	});
	$('.surprize-block__close').on('click', function () {
		$('.overlay').fadeOut(200);
		$('.surprize-block').fadeOut(200);
	});
	$('.overlay').mouseup(function (a) {
		var elem = $('.surprize-block');
		if (a.target != elem[0] && !elem.has(a.target).length) {
			elem.fadeOut(200);
			$('.overlay').fadeOut(200);
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
});

var offsetCont = $('.container').offset().left;
$('.write-us').css('right', offsetCont + 25);

$(window).resize(function () {
	var offsetCont = $('.container').offset().left;
	$('.write-us').css('right', offsetCont + 25);
})