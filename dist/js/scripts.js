$('.main-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
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
	$(document).mouseup(function (e) {
		var elem = $('.surprize-block');
		if (e.target != elem[0] && !elem.has(e.target).length) {
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
	$(document).mouseup(function (e) {
		var elem = $('.login-block');
		if (e.target != elem[0] && !elem.has(e.target).length) {
			elem.fadeOut(200);
		}
	});
});