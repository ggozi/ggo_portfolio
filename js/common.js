$(function(){
	//swiperTotal.init();
	uiHtml.include();

	
	// var swiper = new Swiper(".mySwiper", {
	// 	spaceBetween: 50,
	// 	pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	// 	},
	// });
	// var swiper2 = new Swiper(".mySwiper2", {
	// 	direction: "vertical",
	// 	spaceBetween: 50,
	// 	pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	// 	autoHeight: false
	// 	},
	// });

	// var controller = new ScrollMagic.Controller();
	// var wipeAnimation = new TimelineMax()
	// // animate to second
	// .to("#slideContainer", 1, {z: -180} )
	// .to("#slideContainer", 1, {x:"-25%"} )
	// .to("#slideContainer", 1, {z: 0} )
	// // animate to third
	// .to("#slideContainer", 1, {z: -180, delay: 0.6} )
	// .to("#slideContainer", 1, {x:"-50%"} )
	// .to("#slideContainer", 1, {z: 0} )
	// // animate to forth
	// .to("#slideContainer", 1, {z: -180, delay: 0.6} )
	// .to("#slideContainer", 1, {x:"-75%"} )
	// .to("#slideContainer", 1, {z: 0} )

	// var scene = new ScrollMagic.Scene({
	// 	triggerElement: "#pinContainer",
	// 	triggerHook: "onLeave",
	// 	duration: "300%" //이 값이 클 수록 천천히 덮어씀
	// })
	// .setPin("#pinContainer")
	// .setTween(wipeAnimation)
	// .addIndicators() 
	// .addTo(controller);

});


const swiperTotal = {
	init: function() {
		swiperTotal.lySwiper();
	},
	lySwiper : function(e) {
		let swiperMain = document.querySelector('.ly-swiper');


		new Swiper(swiperMain, {
			direction: 'vertical',
			loop: false,
			a11y: false,
		})
		
		// swiperMain.forEach((el,idx) => {
		// 	//el.classList.add(''+ idx);

			
		// 	return 
		// })

	}
}

//Html include
const uiHtml = {
	include: function (fn) {
		const $elements = $.find('*[data-include]');
		if ($elements.length) {
			if (location.host) {
			$.each($elements, function (i) {
				const $this = $(this);
				$this.empty();
				const $html = $this.data('include');
				const $htmlAry = $html.split('/');
				const $htmlFile = $htmlAry[$htmlAry.length - 1];
				const $docTitle = document.title;
				let $title = null;
				if ($docTitle.indexOf(' | ') > -1) {
					$title = $docTitle.split(' | ')[0];
				}
				$this.load($html, function (sta) {
					if (sta == 'success') {
						if (!$this.attr('class') && !$this.attr('id')) $this.children().unwrap();
						else $this.removeAttr('data-include');
					}
					if (i === $elements.length - 1) {
						if (!!fn) fn();
					}
				});
			});
			} else {
				if (!!fn) fn();
			}
		}
	}
};