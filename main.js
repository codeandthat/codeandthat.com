$(function(){
	var body = $("body");
	$(window).click(function(){ body.toggleClass("even"); });
	$(".email").click(function(){
		location.href = "mailto:laurie@codeandthat.com"
	});
});