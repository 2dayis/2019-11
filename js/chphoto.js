	const centerText = document.querySelector('.center');
	const openBar = document.querySelector('.openbar');
	const wrapper = document.querySelector('.wrapper');

	var tl = new TimelineMax();

	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	}

	window.onload = function(){
		tl.fromTo(centerText, 1.2, {opacity:0},{opacity:1, ease:Power4.easeInOut});
		tl.to(openBar, 0.6, {width: '100%', marginLeft:0, ease:Power4.easeInOut});
		tl.to(openBar, 0.6, {height: '100%', top:0, ease:Power4.easeInOut});
		tl.to(wrapper, 0.6, {display:'block', ease:Power4.easeInOut});
		tl.fromTo(wrapper, 0.6, {opacity:0},{opacity:1, ease:Power4.easeInOut}, '-=0.5');
	}

	(function($) {
		$(window).on('load', function(){
			$.instagramFeed({
				'username': 'ch.photo85',
				'container': "#insta",
				'display_profile': false,
				'display_biography': false,
				'items': 12,
				'items_per_row': 4,
				'margin': 0.5,
				'styling': true
			});
		});
	})(jQuery);
