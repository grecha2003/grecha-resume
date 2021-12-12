$(function(){
  $('.sidebar_social').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.sidebar_social').slick({
		prevArrow: '<button type="button" class="click-btn click-prev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="click-btn "><img src="images/arrow-right.svg" alt=""></button>',
	});

	$('.sidebar_social').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});

	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active')
	})
});
