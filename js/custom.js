
// smoothscroll credit to  https://www.youtube.com/watch?v=-SnKQsM_BfQ, https://jsfiddle.net/cse_tushar/Dxtyu/141/ (author Tushar Gupta)
(function($) {

jQuery(document).ready(function() {
  
  
	//this code for the scroll animation
  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll customization credit to http://www.lynda.com/Bootstrap-tutorials/Smoothing-our-page-scroll/186538/371600-4.html?
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
  //those codes are for showing the active div(top nav) not working!!!!!
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
	

    //this code is for header(expention property)
   jQuery(window).scroll(function() {
      var windowScrollPosTop = jQuery(window).scrollTop();

      if(windowScrollPosTop >= 250) {
        jQuery(".logo").css({"margin-top": "5px", "margin-bottom": "5px"});
        jQuery(".navbar-default").css({"margin-top": "0px", "margin-bottom": "2", "background-color": "#7D5C2F"});
        jQuery(".top-header").css({"background-color": "#7D5C2F"});
      }
      else{
        jQuery(".logo").css({"margin-top": "10px", "border-bottom": "0"});
         jQuery(".navbar-default").css({"margin-top": "15px", "margin-bottom": "15px", "background-color": "transparent"});
         jQuery(".top-header").css({"background-color": "transparent"});
        
      }
   });

});

}) (jQuery);
