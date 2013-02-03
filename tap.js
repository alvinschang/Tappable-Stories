/* 
TAPPABLE SLIDES
by Alvin Chang
@alvinschang
alvinschang.com

Use and edit freely. But please leave above attribution and this text in this file.
Also I'd appreciate it if you send me your stories so I can see what you make with this tool :)
**********************************/

$(function() {

	var tapperNumber = 0;

	$(".tapper").each(function() {
		var counter = 1;
		var fullItem = $(this).html().split("\n");
		$(this).attr("rel","2");
		$(this).empty();
		var allItems = [];
		for (i = 0; i < fullItem.length; i++) {
			if (fullItem[i] != " " && fullItem [i] != "" && fullItem [i] != "\n") {
				allItems.push(fullItem[i]);
			}
		}
		for (i = 0; i < allItems.length; i++) {
			$(this).append("<div class='allSlides slide" + tapperNumber +"'>" + allItems[i] + "</div>");	
		}
		$(".slide" + tapperNumber).hide();
		$(this).prepend("<div class='tapView allSlides slide" + tapperNumber +"'>Tap the frame</div>")
		
		tapperNumber++;

		$(this).attr("max",allItems.length+2);
	});




	$(".tapper").click(function() {
		if ( parseInt($(this).attr("max")) > parseInt($(this).attr("rel")) ) {
			var slideNum = parseInt($(this).attr("rel"));
			var oldNum = slideNum - 1;
		} else {
			var slideNum = 1;
			var oldNum = parseInt($(this).attr("max")) - 1;
		}
		$(this).find(".allSlides:nth-child(" + oldNum + ")").hide();
		$(this).find(".allSlides:nth-child(" + slideNum + ")").show();

		var newNum = slideNum+1; 
		$(this).attr("rel", newNum);
	});


});