;(function($) {
	$.fn.scrollBlock = function(speed, heightReturnValue) {
		
		heightReturnValue = heightReturnValue ? heightReturnValue : 0;
		speed = speed || 1000;
		
		$(this).each(function() {
			
			$(this).click(function(e) {
				
				e.preventDefault();
				
				var topCord = $(this).attr("href");
				var topCordElement = $(topCord);
				topCord = $(topCord).offset().top;
				$("body, html").stop().animate({ scrollTop: topCord }, speed,
																						
					function() {
					
						var heightReturnScroll;
					
						if (typeof heightReturnValue !== "number") {
							heightReturnScroll = $(heightReturnValue).stop().height();
						} else {
							heightReturnScroll = heightReturnValue;
						}
					
						topCord = topCordElement.offset().top;
						$("body, html").animate({ scrollTop: topCord - heightReturnScroll }, 500);
					
					});
				
				return false;
				
			});
			
		});

	}
})(jQuery);




// фиксируем меню при скроллинге
    
    function getCordTopElement(e) {
        return $(e).offset().top;
    }
    
    var resizeTopElementCord;
//    $(window).resize(function() {
        resizeTopElementCord = getCordTopElement(".navbar");
//    });
//    $(window).trigger("resize");
    var navbarHeight = $(".navbar").outerHeight();
    $(document).scroll(function() {
        var scroll = $(document).scrollTop();
        if(scroll > resizeTopElementCord) {
            $(".navbar").addClass("wrap-navbar_fixed");
        }
        else {
            $(".navbar").removeClass("wrap-navbar_fixed");
        }
        
        
        $(".navbar").removeClass("navbar_show-items");
        
    });
    $(document).trigger("scroll");

// скролл меню
$(".navbar-list a").scrollBlock(1000, ".navbar");