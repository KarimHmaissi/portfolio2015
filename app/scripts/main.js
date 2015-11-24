;

"use strict";

window.KARIMHMAISSI = (function (jQuery) {
	
	// var self = this;

	var init = function () {
		initPortfolioWaypoints();
		initSlowScroll();
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

	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 60
	        }, 1000);
	        return false;
	      }
	    }
	  });
		
	};


	return {
		init: init
	}


}($));


$(function () {
	window.KARIMHMAISSI.init();
});

