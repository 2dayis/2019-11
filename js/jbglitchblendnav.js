
const gridbackground = document.querySelector(".gridbackground");
const openBtn = document.querySelector(".open_Btn");
const closeBtn = document.querySelector(".close_Btn");
const sideNav = document.querySelector(".sideNav");
const gridnav = document.querySelector(".gridnav");
const navbg = document.querySelector(".navbg");
const navsp = document.querySelector(".navsp");
const menu = document.querySelector(".menu");
const contents = document.getElementById("contents");
const aboutArea = document.querySelector(".about-area");
const svcArea = document.querySelector(".services-area");
const portArea = document.querySelector(".port-area");
const contact = document.querySelector(".contact-area");
const aboutc = document.querySelector(".aboutc");
const servicesc = document.querySelector(".servicesc");
const portfolioc = document.querySelector(".portfolioc");
const contactc = document.querySelector(".contactc");
let splitImg = document.getElementsByClassName('navsp');
const note = document.querySelector(".note");

let maxNum = 0;

var mode = ["screen","darken","lighten","hard-light","soft-light","hue","exclusion","saturation","color","luminosity"];

showingClass = "showing";



function moveToAbout(){
	aboutArea.scrollIntoView({
		 behavior: 'smooth'
	})
};
function moveToSvc(){
	svcArea.scrollIntoView({
		 behavior: 'smooth'
	})
};
function moveToPort(){
	portArea.scrollIntoView({
		 behavior: 'smooth'
	})
};
function moveToCont(){
	contact.scrollIntoView({
		 behavior: 'smooth'
	})
};

function closeMenu() {
	contents.style.display="none";
	menu.style.opacity="0";
	for( i = 0 ; i < splitImg.length; i++){
		let k = i;
		var setSec = Math.random()*800;
			setTimeout(function(){
				splitImg[k].style.backgroundImage="url()",
				splitImg[k].style.backgroundSize="100% 100%",
				navbg.style.backgroundImage="url()"
			},setSec);
		if(maxNum < setSec){
			maxNum = setSec;
		}
	};
	setTimeout(function(){
		sideNav.classList.toggle(showingClass)
	},maxNum);
	gridbackground.style.opacity=1,
	document.body.scrollTop=0;
};

function showMenu() {
	sideNav.classList.toggle(showingClass);
	document.body.scrollTop=0;

	for( i = 0 ; i < splitImg.length; i++){
		let k = i;
		var setSec = Math.random()*800;
		
			setTimeout(function(){
					// console.log(i);
					var effecTime = Math.random();
					var opacitySec = Math.random()+0.5;
					var efec = Math.floor(Math.random()*mode.length);
					splitImg[k].style.backgroundImage="url(images/background-slice_"+(k+1)+".jpg)",
					splitImg[k].style.backgroundSize="100% 100%",
					splitImg[k].style.transition= effecTime.toFixed(1)+'s',
					splitImg[k].style.opacity= opacitySec.toFixed(1),
					splitImg[k].style.mixBlendMode= mode[efec]
			},setSec);
		if(maxNum < setSec){
			maxNum = setSec;
		}
	};
	setTimeout(function(){
		navbg.style.backgroundImage="url('images/background1a.jpg')",
		navbg.style.backgroundSize="100% 100%",
		navbg.style.transition= maxNum,
		contents.style.display="block";
		menu.style.opacity="1";
	},1000);
};

window.onload = function(){
	let agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
		note.style.display = "block";
	}
}

aboutc.addEventListener("click", moveToAbout);
servicesc.addEventListener("click", moveToSvc);
portfolioc.addEventListener("click", moveToPort);
contactc.addEventListener("click", moveToCont);

closeBtn.addEventListener("click", closeMenu);
openBtn.addEventListener("click", showMenu);