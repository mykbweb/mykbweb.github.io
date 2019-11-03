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
// показать форму обратной связи
$('.btn-call-my, .call-my').click(function(e) {
	e.preventDefault();
	$('#call-my').css('display', 'table').hide().fadeIn(500);
	return false;
});
$('.container-popup .close, .popup-wrap').click(function() {
	$('.popup-wrap').fadeOut(500);
});
$('.container-popup').click(function(e) {
	e.stopPropagation();
});
$('.click-contact').click(function(e) {
	e.preventDefault();
	$('#email-push').css('display', 'table').hide().fadeIn(500);
	return false;
});





// подключаю галерею
$(".slider-img a").touchTouch();
// маска для ввода телефонного номера
$("#userFone, #user-tel").mask("+38(999)-999-99-99");
    // адаптивное меню
    $(window).resize(function() {
        let widthWindow = $(document).width();
        if(widthWindow <= 750) {
            $('.navbar-list').addClass('resp');
        } else {
            $('.navbar-list').removeClass('resp');
        }
    });
    $(window).trigger('resize');
    
    $('.resp-icon').click(function() {
        $('.navbar-list').toggleClass('resp-hide');
    });
    $(window).add('body').scroll(function() {
        $('.navbar-list').addClass('resp-hide');
    });
    



