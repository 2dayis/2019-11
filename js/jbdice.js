		const wrapper = document.querySelector('.wrapper');
		const main = document.querySelector('.main');
		const about= document.querySelector('.one');
		const port= document.querySelector('.two');
		const aaa= document.querySelector('.three');
		const bbb= document.querySelector('.four');
		const contact= document.querySelector('.five');
		const helloBtn= document.querySelector('.hello');
		const aboutBtn= document.querySelector('.about');
		const portBtn= document.querySelector('.port');
		const aaaBtn= document.querySelector('.aaa');
		const bbbBtn= document.querySelector('.bbb');
		const contactBtn= document.querySelector('.contact');

	function roller(){
		var leftRight = ["360","-360"];
		var randomD = Math.floor(Math.random()*leftRight.length);
		TweenMax.to(wrapper, 1, {rotationX: leftRight[randomD], ease: Elastic.easeIn.config(2, 1)});
		TweenMax.to(wrapper, 1, {rotationY: leftRight[randomD], ease: Elastic.easeIn.config(2, 1)}, '-=1');
		TweenMax.to(wrapper, 1, {rotationZ: leftRight[randomD], ease: Elastic.easeIn.config(2, 1)}, '-=1');
	}

	window.onload = function(){
			if (window.matchMedia("screen and (min-width: 750px)").matches) {
				TweenMax.set(wrapper, {transformOrigin: '50% 50%'});
				TweenMax.to(wrapper, 0, {scaleX: 1.6, ease:Linear.easeNone, repeat:-1}, '-=1');
				TweenMax.to(wrapper, 0, {scaleY: 1.6, ease:Linear.easeNone, repeat:-1}, '-=1');
				TweenMax.to(wrapper, 0, {scaleZ: 1.6, ease:Linear.easeNone, repeat:-1}, '-=1');
				TweenLite.set(wrapper, {css:{transformPerspective:400, transformStyle:"preserve-3d"}});
				TweenMax.to(wrapper, 0, {rotationY: 15});
			} else {
				TweenMax.set(wrapper, {transformOrigin: '50% 50%'});
				TweenMax.to(wrapper, 0, {scaleX: 1.1, ease:Linear.easeNone, repeat:-1}, '-=1');
				TweenMax.to(wrapper, 0, {scaleY: 1.1, ease:Linear.easeNone, repeat:-1}, '-=1');
				TweenMax.to(wrapper, 0, {scaleZ: 1.1, ease:Linear.easeNone, repeat:-1}, '-=1');
				TweenLite.set(wrapper, {css:{transformPerspective:400, transformStyle:"preserve-3d"}});
				TweenMax.to(wrapper, 0, {rotationY: 15});
			}
	}


	function contactPage(){
		roller();
		TweenMax.to(wrapper, 0.5, {rotationX: 90, ease:Linear.easeNone});
	}

	function bbbPage(){
		roller();
		TweenMax.to(wrapper, 0.5, {rotationX: 270, ease:Linear.easeNone});
	}

	function aaaPage(){
		roller();
		TweenMax.to(wrapper, 0.5, {rotationY: 90, ease:Linear.easeNone});
	}

	function portPage(){
		roller();
		TweenMax.to(wrapper, 0.5, {rotationY: 180, ease:Linear.easeNone});
	}

	function aboutPage(){
		roller();
		TweenMax.to(wrapper, 0.5, {rotationY: 270, ease:Linear.easeNone});
	}

	function mainPage(){
		roller();
		TweenMax.to(wrapper, 0.5, {rotationY: 0, ease:Linear.easeNone});
		console.log("style transform");
	}

	helloBtn.addEventListener("click",mainPage);
	aboutBtn.addEventListener("click",aboutPage);
	portBtn.addEventListener("click",portPage);
	aaaBtn.addEventListener("click",aaaPage);
	bbbBtn.addEventListener("click",bbbPage);
	contactBtn.addEventListener("click",contactPage);