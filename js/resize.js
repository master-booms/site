// картинка ресайз


	function wResize() {
		$("header").css("height", $(window).height());
		};
		wResize();
		$(window).resize(function() {
		wResize()

