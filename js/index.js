		const wrapper = document.querySelector('.wrapper');
		const mTitle = document.querySelector('.mtitle');
		const btndown = document.querySelector('.btndown');
		let body = document.querySelector('body');
		const sect = document.querySelector('.sect');
		const toTopbtnId = document.getElementById('btn');
		const toBottombtnId = document.getElementById('btndown');
		const glth = document.querySelector('.glth');
		const article =  document.getElementsByTagName('article');

		let mode = ["#f7f4e7","#fd6c54","#ff9f1c","#ffbf69","#2ec4b6"];
		let direction = ["top","left","right","bottom"];
		let ranC = Math.floor(Math.random()*mode.length);
		let ranD = Math.floor(Math.random()*direction.length);

		let tl = new TimelineMax();

		
		toTopbtnId.addEventListener("click", function moveToTop() {
			window.scrollTo(0,0);
		});
		
		toBottombtnId.addEventListener("click", function moveToBottom() {
			window.scrollTo(0,document.documentElement.clientHeight);
		});

		

		document.addEventListener("scroll", function showbtn(){
				if(pageYOffset >= document.documentElement.clientHeight){
					toTopbtnId.style.display = "block";
				} else {
					toTopbtnId.style.display = "none";
				}
			}
		);

		function changeColor(){
			ranC1 = Math.floor(Math.random()*mode.length);
			ranC2 = Math.floor(Math.random()*mode.length);
			ranD1 = Math.floor(Math.random()*direction.length);
			ranD2 = Math.floor(Math.random()*direction.length);
			
			if((mode[ranC1] == mode[0]) && (mode[ranC2] == mode[0])){
				ranC2 = ranC2 + 1;
			}

			TweenMax.to(wrapper, 2, {backgroundImage :"linear-gradient(to "+direction[ranD1]+" "+direction[ranD2]+","+mode[ranC1]+","+mode[ranC2]+")"});

			for(let i = 0; i < article.length; i++){

				ranC1 = Math.floor(Math.random()*mode.length);
				ranC2 = Math.floor(Math.random()*mode.length);
				ranD1 = Math.floor(Math.random()*direction.length);
				ranD2 = Math.floor(Math.random()*direction.length);
				
				if((mode[ranC1] == mode[0]) && (mode[ranC2] == mode[0])){
				ranC2 = ranC2 + 1;
				}

				TweenMax.to(article[i], 2, {backgroundImage :"linear-gradient(to "+direction[ranD1]+" "+direction[ranD2]+","+mode[ranC1]+","+mode[ranC2]+")"});

			}
		}

		function addTransition(){
			setInterval(changeColor,1500);
		}

		window.onload = function(){
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
			document.body.scrollTop = 0; // For Safari
			sect.innerHTML = sect.innerHTML.replace(/&nbsp;/g,'');
			tl.fromTo(mTitle, 1.2, {opacity:0},{opacity:1, ease:Power4.easeInOut});
			tl.fromTo(wrapper, 0.5, {opacity:0},{opacity:1, ease:Power4.easeInOut});
			tl.fromTo(wrapper, 0.8, {scaleY:0,transformOrigin:"50% 50%"},{scaleY:1,ease:Power4.easeInOut});
			tl.fromTo(wrapper, 0.8, {rotation:-120},{rotation:10, ease:Power3.easeInOut}, "-=0.8");
			tl.fromTo(btndown, 1, {opacity:0},{opacity:1}, "-=0.6");
			addTransition();
		}