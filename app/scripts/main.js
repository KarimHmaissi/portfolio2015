;window.KARIMHMAISSI = (function (jQuery) {

	"use strict";
	

	var init = function () {
		setHeightOfPortfolioItems();

		if(!isMobile()) {
			initPortfolioWaypoints();
		}

		velocityAnimations();
		
		initSlowScroll();
	};	

	var isMobile = function () {
		return $("body").width() < 	720;
	};

	var setHeightOfPortfolioItems = function () {
		$(".portfolio-image").height($(".portfolio-copy-wrapper").height() + "px");
	};


	var initPortfolioWaypoints = function () {
		var addWaypoint = function (i, el) {
			var $el = $(el);

			var $img = $el.find("img");
			var imgSrc = $img.attr("src");

			var waypointActivated = function (waypointElement) {

				//remove all gifs
				$(".portfolio-item").each(function (i, el) {
					var active = $(el).hasClass("active");
 
					if(active) {

						//static img
						$(el).find("img").attr("src", $(el).find("img").attr("src").replace(".gif", "_Static.gif"));
					}
				});

				//remove all active classes
				$(".portfolio-item").removeClass("active");

				$(waypointElement).addClass("active");

				//swap out static image for gif
				$img.attr("src", imgSrc.replace("_Static.gif", ".gif"));
			}



			//init waypoints
			$el.waypoint(function (direction) {
			
				if(direction === "down") waypointActivated(this.element);

			}, {offset: "50%"});

			$el.waypoint(function (direction) {
			
				if(direction === "up") waypointActivated(this.element);

			}, {offset: "10%"});
		};


		$(".portfolio-item").each(addWaypoint);	
	};

	var initSlowScroll = function  () {
	// https://css-tricks.com/snippets/jquery/smooth-scrolling/
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 60
	        }, 800);
	        return false;
	      }
	    }
	  });
		
	};


	var velocityAnimations = function () {
		// $(".fade-up-in").velocity("transition.slideUpIn");	
		$(".nav-menu > li").velocity("transition.slideDownIn", {stagger: 150, display: "inline-block"});
		$(".fade-down-in").velocity("transition.slideDownIn", {stagger: 150, display: "block", delay: 0});

		$(".fade-down-in-btn").velocity("transition.slideDownIn", {stagger: 150, display: "block", delay: 600});


		// $(".color-red")
		// .velocity("callout.bounce", {
		//     options: { duration: 350, delay: 350}
		// })
		// .velocity({
		//     properties: { color: "#D8334A" },
		//     options: { duration: 300, delay: 0}
		// });

		


		


	};


	return {
		init: init
	}


}($));


$(function () {
	window.KARIMHMAISSI.init();
});

