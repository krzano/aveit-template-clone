$(document).ready(function () {
	$('.reviews__carousel').slick({
		arrows: false,
		autoplay: true,
		mobileFirst: true,
		prevArrow: `<button type="button" class="slick-prev reviews__carousel-arrow reviews__carousel-arrow--left"><i class="fa-solid fa-arrow-left-long"></i></button>`,
		nextArrow: `<button type="button" class="slick-next reviews__carousel-arrow reviews__carousel-arrow--right"><i class="fa-solid fa-arrow-right-long"></i></button>`,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: true,
				},
			},
		],
	})
})
