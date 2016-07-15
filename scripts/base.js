$(document).ready(function() {
    $("a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 900 );
      return false;
    });
  });


$(document).ready(function() {

	var scrollTop = 0;

	$(window).on('scroll', function() {
        var scrollNow = $(window).scrollTop();
		if(scrollNow > scrollTop && scrollNow > 20){
		    $('.header').addClass('setout');
		} else {
			$('.header').removeClass('setout');
		}
		scrollTop=scrollNow;
    });
});