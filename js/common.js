



$(document).ready(function() {


    // Подключение magnificPopup для фотографии
	$('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup();


	// Подключение owl-caruosel
	  $('.carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        }
	       },
	       navText:""
	     })



    // Подключение паралакса
		$.stellar({
			responsive: true,
			horizontalOffset: 60
		});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	// Подключение табов


	$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".wrapper .tab2").click(function() {
	$(".wrapper .tab2").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item2").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".contacts_top .tab").click(function() {
	$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

    $(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

    $(".bottom_phone .wrapper .tab").click(function() {
	$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};




	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
$("form").submit(function(e) {
	e.preventDefault;
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
		}).done(function() {
		alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
// save instance in magnificPopup variable
				magnificPopup.close();
				$(this).trigger(reset);
// Close popup that is currently opened
				// $.fancybox.close();
			}, 1000);
		});
	  });
   });

	//Подключение анимации Animate.css
$(window).load(function(){

	$(".top_header h1").animated("fadeInDown", "fadeOut");
	$(".top_header h2").animated("fadeInUp", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".s_profi h2").animated("fadeInUp", "fadeOut");
	$(".profy_item ").animated("fadeInRight", "fadeOut");
	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_review h2").animated("fadeInUp", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$(".contacts_top").animated("fadeInUp", "fadeOut");
	$("footer h2").animated("fadeInUp", "fadeOut");


});