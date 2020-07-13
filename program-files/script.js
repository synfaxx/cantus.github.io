var
	w 		= window.innerWidth,
	h 		= window.innerHeight,
	mdb 	= 760,i,activemenu=false,
	leng 	= document.getElementsByClassName('list-item').length+document.getElementsByClassName("item-net").length;
function burgerAnimation(activateBool){
	var
		spb1 = document.getElementById('spBurger1'),
		spb2 = document.getElementById('spBurger2'),
		spb3 = document.getElementById('spBurger3');
	if(activateBool){
		spb1.style.transform="rotate(0deg)";
		spb2.style.transform="translateX(0) rotate(0deg)";
		spb3.style.transform="rotate(0deg)";
	} else {
		spb1.style.transform="rotate(-45deg)";
		spb2.style.transform="translateX(19%) rotate(45deg)";
		spb3.style.transform="rotate(45deg)";
	};
};
function showMenu(event){
	var brm = document.getElementById('burgerMenu');
	var 
		brmb = document.getElementById("burgerMenu_body");

	brmb.innerHTML="";
	if(activemenu==false){
		brm.style.left="0";
		burgerAnimation(activemenu);
		activemenu=true;

		$('html, body').animate({
         scrollTop: 0
     	},800);

		setTimeout(function(){
			for(i=0;i<=document.getElementsByClassName('list-item').length;i++){
				if(i==document.getElementsByClassName('list-item').length){
					brmb.innerHTML+="<div class=\"item-menu\" id=\"item-menu__network\"></div>"	
				} else {
					brmb.innerHTML+="<div class=\"item-menu\">"+document.getElementsByClassName('list-item')[i].innerHTML+"</div>"
				};
			};
			document.getElementById("item-menu__network").innerHTML="<ul id=\"list-menu__network\"></ul>"
			var lmn = document.getElementById("list-menu__network");
			for(i=0;i<document.getElementsByClassName("item-net").length;i++){
				lmn.innerHTML+="<li class=\"list-menu__item\">"+document.getElementsByClassName("item-net")[i].innerHTML+"</li>";
			};
			setTimeout(function(){
				for(i=0;i<leng-2;i++){
					document.getElementsByClassName("item-menu")[i].style.transition="opacity .3s ease";
					document.getElementsByClassName("item-menu")[i].style.transitionDelay="."+i+"s";
					document.getElementsByClassName("item-menu")[i].style.opacity="1";
				};
			},50)
		},400);
	} else {
		brm.style.left="-101%";
		brmb.innerHTML="";
		burgerAnimation(activemenu);
		activemenu=false;
	};
};
function burgerActive(event){
	if(window.innerWidth<mdb){
		console.log("qwdwqd");
		var plc = document.getElementById('burgerPlace');

		plc.addEventListener("click",showMenu)
	};
};

if(w<mdb) burgerActive();
window.onresize=burgerActive;

for(i=0;i<document.getElementsByClassName("author").length;i++){
	console.log(".author"+(i+1)+"-documentation");
	$(".author").on("mouseenter",function(){
		$(this).children(".author-documentation").css({
			"bottom":"0"
		});
	});
	$(".author").on("mouseleave",function(){
		$(this).children(".author-documentation").css({
			"bottom":"-45px"
		});
	});
};
$(".top-song").on("click",function(){
	var name_song = $(this).children("span").text();

	$(".songName2").text(name_song);
});