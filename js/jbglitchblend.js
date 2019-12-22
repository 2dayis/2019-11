//glitch
$(function(e){
	var j = $.noConflict();
	// console.log(j.fn);
	// console.log($.fn);

	var timer = setTimeout(function(){
		$(".gridbackground").mgGlitch({
			destroy : false,
			glitch: true,
			scale: true,
			blend : true,
			blendModeType : 'exclusion', 
			glitch1TimeMin : 0,  // 600
			glitch1TimeMax : 550,  // 900
			glitch2TimeMin : 550,  // 10
			glitch2TimeMax : 0,  // 115 
			zIndexStart : 5
			//normal | multiply | screen | overlay | darken | lighten | color-dodge
			// color-burn | hard-light | soft-light | difference | exclusion | 
			// hue | saturation | color | luminosity
		})
	},2500);
}); 
//glitch

//split
var hover = setTimeout(function(){
	$('.split').hover(
		function(){
			var f = $(this).attr("data-split");
			var opacitySec = Math.random();
			$(this).css('background-image',"url(images/background-slice_" + f + ".jpg)").css('opacity', opacitySec);
		},
		function(){
			$(this).css('background-image',"url()");
		}
	);
},3500);
//split


//mix
$(function(){
	$('.efec').hover(
		function(){
			var efec = Math.floor(Math.random()*mode.length);
			$('.gridbackground').css('background-image',"url('images/background.JPG')").css('mix-blend-mode',mode[efec]);
		},
		function(){
			$('.gridbackground').css('background-image',"url('images/background.JPG')").css('mix-blend-mode','normal');
		}
	);
});
//mix

