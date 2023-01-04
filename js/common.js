$(function(){
	swiperTotal.init();
});

const swiperTotal = {
	init: function() {
		swiperTotal.lySwiper();
	},
	lySwiper : function(e) {
		let swiperMain = document.querySelector('.ly-swiper');

		swiperMain.forEach((el,idx) => {
			el.classList.add(''+ idx);

			
			return new Swiper(this, {
				direction: 'vertical',
				loop: false,
				a11y: false,
			})
		})

	}
}