//making text of an element green

//add the methd to jquery set ofmethods
( function ($){

	//var shade="#17494D";

	$.fn.greenify = function(options){
		var settings= $.extend({
			color: "#17494D",
			backgroundColor: "white",
		}, options);

		return this.css({
			color: settings.color,
			background-color: settings.backgroundColor
		});
		
	};

}(jQuery));

$(document).ready(function(){
	$("h1").greenify({color:"#4EA266"}).addClass("greenified");

});



