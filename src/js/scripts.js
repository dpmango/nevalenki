// CONSTRUCTOR

// SLIDERS
$('.main-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	//	centerMode: true
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

$('.goods-page__slider-mini').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	asNavFor: '.goods-page__slider-big',
	vertical: true,
	verticalSwiping: true,
	focusOnSelect: true
});
$('.goods-page__slider-big').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	asNavFor: '.goods-page__slider-mini',
	focusOnSelect: true,
	vertical: true,
	verticalSwiping: true
});


$(document).ready(function () {
	// Global variables
	var _window = $(window);

	// Prevent # behavior
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// Убрать плейсхолдер при клике
	$('input,textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input,textarea').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

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
	$('.page-header__login, .page-header__auth, .login-toggle').on('click', function (e) {
		e.preventDefault();
		$('.login-block').slideDown(300).addClass('active');
		$('.overlay').fadeOut(300);
		$('.mobile-menu').css('transform', 'translate(-1000px, 0)');
		$('body').removeClass('no-scroll');
	});
	$('.login-block__close').on('click', function () {
		$('.login-block').slideUp(300).removeClass('active');
	});
	$(document).mouseup(function (b) {
		var elem = $('.login-block');
		if (b.target != elem[0] && !elem.has(b.target).length) {
			elem.slideUp(300).removeClass('active');
		}
	});
	$('.page-header__cart').on('click', function (e) {
		e.preventDefault();
		$('.js-cart-popup').show(300);
	});
	$('.cart-popup__close').on('click', function () {
		$('.js-cart-popup').hide(300);
	});
	$(document).mouseup(function (b) {
		var elem = $('.js-cart-popup');
		if (b.target != elem[0] && !elem.has(b.target).length) {
			elem.hide(300);
		}
	});



	/* Поиск */
	$('.main-nav__search').on('click', function (e) {
		e.preventDefault();
		$('.main-nav__form').addClass('active');
	});
	$(document).mouseup(function (b) {
		var elem = $('.main-nav__form');
		if (b.target != elem[0] && !elem.has(b.target).length) {
			elem.removeClass('active');
		}
	});


	/* Мобильное меню */

	$('.header-mini__toggle').on('click', function () {
		$('body').addClass('no-scroll');
		$('.overlay').fadeIn(300);
		$('.mobile-menu').css('transform', 'translate(0, 0)');
	});
	$('.overlay').mouseup(function (c) {
		$('body').removeClass('no-scroll');
		var elem = $('.mobile-menu');
		if (c.target != elem[0] && !elem.has(c.target).length) {
			elem.css('transform', 'translate(-1000px, 0)');
			$('.overlay').fadeOut(300);
		}
	});

	/* Табы на странице Контакты */

	$('.contacts__tab-toggle').on('click', function () {
		$('.contacts__tab-toggle').removeClass('active');
		$(this).addClass('active');
		var dataId = $(this).attr('data-id');
		$('.contacts__tab-wrap').removeClass('active');
		$('.contacts__tab-wrap#' + dataId).addClass('active');
	});

	/* Добавить отзыв */

	$('.reviews-page__add-review, .blog-comment__link').on('click', function () {
		$('.add-review').show(300);
	});
	$('.add-review__close').on('click', function () {
		$('.add-review').hide(300);
	});
	$(document).mouseup(function (c) {
		var elem = $('.add-review');
		if (c.target != elem[0] && !elem.has(c.target).length) {
			elem.hide(300);
		}
	});

	/* Оплата онлайн */

	$('.cart__all-submit').on('click', function () {
		$('.pay-online:not(.pay-online--visible)').show(300);
	});
	$('.pay-online__close').on('click', function () {
		$('.pay-online:not(.pay-online--visible)').hide(300);
	});
	$(document).mouseup(function (c) {
		var elem = $('.pay-online:not(.pay-online--visible)');
		if (c.target != elem[0] && !elem.has(c.target).length) {
			elem.hide(300);
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

	/* Каталог фильтры */
	$('.second-menu__link').on('click', function () {
		$('.filters').slideDown(200).css('display', 'flex');
		$('.second-menu__link').removeClass('active');
		$(this).addClass('active');
		var dataId = $(this).attr('data-id');
		$('.filters__form').removeClass('active');
		$('.filters__form#' + dataId).addClass('active');
	});

	/* Сбросить все */
	$('.filters__btn').on('click', function (e) {
		e.preventDefault();
		$('.filters__form.active input:checked').prop('checked', false);
	});


	/* Оплата-Доставка */
	$('.cart-ordering__tab--dev').on('click', function (e) {
		e.preventDefault();
		$('.cart-ordering__tab--pay').removeClass('active');
		$(this).addClass('active');
		$('.cart-ordering__delivery').addClass('active');
		$('.cart-ordering__pay').removeClass('active');
	});
	$('.cart-ordering__tab--pay').on('click', function (e) {
		e.preventDefault();
		$('.cart-ordering__tab--dev').removeClass('active');
		$(this).addClass('active');
		$('.cart-ordering__pay').addClass('active');
		$('.cart-ordering__delivery').removeClass('active');
	});

	$('#select-city').change(function () {
		if ($('option:not(:disabled):selected')) {
			$('.cart-ordering__tabs-wrap').show();
		}
	});
	$('.cart-ordering__delivery .cart-ordering__radio').click(function () {
		$('.cart-ordering__pay').addClass('active');
		$('.cart-ordering__delivery').removeClass('active');
		$('.cart-ordering__tab--pay').addClass('active');
		$('.cart-ordering__tab--dev').removeClass('active');
	});
	$('.cart-ordering__pay .cart-ordering__radio').click(function () {
		if ($('#pay-online').prop('checked')) {
			$('.cart__all-submit').css('display', 'inline-block');
			$('.cart__all-success').css('display', 'none');
		} else {
			$('.cart__all-submit').css('display', 'none');
			$('.cart__all-success').css('display', 'inline-block');
		}
	});


	/* Оплата онлайн, оплата оффлайн */
	$('.cart-ordering__tab--online').on('click', function (e) {
		e.preventDefault();
		$('.cart-ordering__tab--offline').removeClass('active');
		$(this).addClass('active');
		$('.cart--pay__online').addClass('active');
		$('.cart--pay__offline').removeClass('active');
	});
	$('.cart-ordering__tab--offline').on('click', function (e) {
		e.preventDefault();
		$('.cart-ordering__tab--online').removeClass('active');
		$(this).addClass('active');
		$('.cart--pay__offline').addClass('active');
		$('.cart--pay__online').removeClass('active');
	});

	/* Плюс-минус */
	$('.cart-block__amount-plus').on('click', function () {
		var amount = parseInt($('.cart-block__amount-input').val());
		$('.cart-block__amount-input').val(amount + 1);
		$('.cart-block__amount-minus').css('visibility', 'visible');
	});
	$('.cart-block__amount-minus').on('click', function () {
		var amount = parseInt($('.cart-block__amount-input').val());
		if (amount === 2) {
			$('.cart-block__amount-minus').css('visibility', 'hidden');
		}
		if (amount > 1) {
			$('.cart-block__amount-input').val(amount - 1);
		}
	});
	/* Табы страница товара */
	$('.goods-page__tab').on('click', function () {
		$('.goods-page__tab').removeClass('active');
		$(this).addClass('active');
		var dataId = $(this).attr('data-id');
		$('.goods-page__tab-item').removeClass('active');
		$('.goods-page__tab-item#' + dataId).addClass('active');
	});

	/* Узнать о поступлении */
	$('.goods-page__in-stock, .goods-page__findout').click(function (e) {
		e.preventDefault();
		$('.js-in-stock-popup').show(300);
	});
	$('.in-stock-popup__close').on('click', function () {
		$('.js-in-stock-popup').hide(300);
	});
	$(document).mouseup(function (c) {
		var elem = $('.js-in-stock-popup');
		if (c.target != elem[0] && !elem.has(c.target).length) {
			elem.hide(300);
		}
	});
	$('.goods-page__quick').click(function (e) {
		e.preventDefault();
		if ($('.good-item__input').is(':checked') == false) {
			$('.js-notice-popup').show(300);
			setTimeout(function(){
				$('.js-notice-popup').hide(300);
			}, 2000);
		} else {
			$('.js-quick-order-popup').show(300);
		}
	});
	$('.quick-order-popup__close').on('click', function () {
		$('.js-quick-order-popup').hide(300);
	});
	$(document).mouseup(function (c) {
		var elem = $('.js-quick-order-popup');
		if (c.target != elem[0] && !elem.has(c.target).length) {
			elem.hide(300);
		}
	});
	$('.goods-page__sizes-grid').click(function (e) {
		e.preventDefault();
		$('.size-grid-popup').show(300);
	});
	$('.size-grid-popup__close').on('click', function () {
		$('.size-grid-popup').hide(300);
	});
	$(document).mouseup(function (c) {
		var elem = $('.size-grid-popup');
		if (c.target != elem[0] && !elem.has(c.target).length) {
			elem.hide(300);
		}
	});
	/* Если нет размера в наличии */
	$('.good-item__input').change(function () {
		$('.goods-page__tocart-btn').css('display', 'inline-block');
		$('.goods-page__to-order').css('display', 'none');
		if ($('.good-item__input--disabled').prop('checked')) {
			$('.js-notice-popup--disabled').show(300);
			setTimeout(function(){
				$('.js-notice-popup--disabled').hide(300);
			}, 2000);
			$('.goods-page__tocart-btn').css('display', 'none');
			$('.goods-page__findout').css('display', 'inline-block');
		} else {
			$('.goods-page__tocart-btn').css('display', 'inline-block');
			$('.goods-page__findout').css('display', 'none');
		}
	});
	$('.goods-page__tocart-btn').on('click', function () {
		if ($('.good-item__input').is(':checked')) {
			$('.goods-page__tocart-btn').hide();
			$('.goods-page__to-order').css('display', 'inline-block');
		}
		if ($('.good-item__input').is(':checked') == false) {
			$('.js-notice-popup').show(300);
			setTimeout(function(){
				$('.js-notice-popup').hide(300);
			}, 2000);
		}
	});

	// Проверка на мобильные устройства
	function checkIfMobile(){
		if ( _window.width() < 768 ){
			initMagnificGallery(true);
			initZoomImage(false)
		} else {
			initMagnificGallery(false);
			initZoomImage(true)
		}
	}

	checkIfMobile();

	_window.resize(function(){
		checkIfMobile()
	})

	/* Zoom product image */
	function initZoomImage(state){
		if ( state === true ){
      $('.goods-page__slide-big img').imagezoomsl({
      });
      // $('.goods-page__slide-big img').elevateZoom({
      //   tint: true,
      //   tintColour: '#000',
      //   tintOpacity: 0.2,
      //   zoomWindowPosition: 1,
      //   zoomWindowOffetx: 10,
      //   lensFadeIn: 0,
      //   lensFadeOut: 0,
      //   zoomWindowFadeIn: 200,
      //   zoomWindowFadeOut: 200,
      //   zoomTintFadeIn: 0,
      //   zoomTintFadeOut: 0
      // });

		} else if ( state === false ){
			// $('.goods-page__slide-big').trigger('zoom.destroy');
		}

	}

	// Попап на картинки

	function initMagnificGallery(state){
		if ( state === true ){
			$('.goods-page__slider-big').magnificPopup({
				delegate: '.goods-page__slide-big',
				type: 'image',
				tLoading: 'Загрузка #%curr%...',
				mainClass: 'mfp-img-mobile mfp-no-margins mfp-with-zoom',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1]
				},
				image: {
					verticalFit: true,
					tError: '<a href="%url%"Ошибка',
					titleSrc: function(item) {
						return false;
					}
				}
			});
		} else if ( state === false ){
			$.magnificPopup.close();
			$.fn.off('click.magnificpopup')
			$.fn.removeData('magnificPopup')
		}

	}


});

var offsetCont = $('.container').offset().left;
$('.write-us').css('right', offsetCont + 25);

$(window).resize(function () {
	var offsetCont = $('.container').offset().left;
	$('.write-us').css('right', offsetCont + 25);
})


////////////////
// FORM VALIDATIONS
// jQuery validate plugin
// https://jqueryvalidation.org
////////////////
$(document).ready(function () {

	////////////////
	// GENERIC FUNCTIONS

	var validateErrorPlacement = function (error, element) {
		error.addClass('ui-input__validation');
		// error.appendTo(element.filter(':not(:checkbox)').parent("div"));
		error.appendTo(element.parent());
	}
	var validateHighlight = function (element) {
		// $(element).parent('div').addClass("has-error");
		$(element).addClass("has-error");
	}
	var validateUnhighlight = function (element) {
		// $(element).parent('div').removeClass("has-error");
		$(element).removeClass("has-error");
	}
	var validateSubmitHandler = function (form) {
		$(form).addClass('loading');
		console.log($(form).serialize())
		$.ajax({
			type: "POST",
			url: $(form).attr('action'),
			data: $(form).serialize(),
			success: function (response) {
				$(form).removeClass('loading');
				var data = $.parseJSON(response);
				if (data.status == 'success') {
					// do something I can't test
				} else {
					$(form).find('[data-error]').html(data.message).show();
				}
			}
		});
	}

	var validatePhone = {
		required: true,
		normalizer: function (value) {
			var PHONE_MASK = '+X (XXX) XXX-XXXX';
			if (!value || value === PHONE_MASK) {
				return value;
			} else {
				return value.replace(/[^\d]/g, '');
			}
		},
		minlength: 11,
		digits: true
	}

	////////
	// FORMS

	/////////////////////
	// BOTTOM FORM

	$(".js-validateSubscribe").validate({
		errorPlacement: validateErrorPlacement,
		highlight: validateHighlight,
		unhighlight: validateUnhighlight,
		submitHandler: validateSubmitHandler,
		rules: {
			email: {
				required: true,
				email: true
			},
		},
		messages: {
			email: {
				required: "",
				email: "Email содержит неправильный формат"
			},
		}
	});

	// emply validation doesn't show any errors
	jQuery.validator.messages.required = ""

	$.validator.setDefaults({
		ignore: [] // DON'T IGNORE PLUGIN HIDDEN SELECTS, CHECKBOXES AND RADIOS!!!
	});

});
