$(function(){
	var body = $("body");
	$(window).click(function(){ body.toggleClass("even"); });
	$(".email").click(function(e){
		e.preventDefault();
		location.href = "mailto:laurie@codeandthat.com"
	});
});