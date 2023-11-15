$(function(){
	/* section1 */
	$(".page1").mouseenter(function(){
		$(".page1 img").stop().animate({marginTop:-2060},4000);

	}).mouseleave(function(){
		$(".page1 img").stop().animate({marginTop:0},3000);
	});


	/* section2 */
	$(".page2").mouseenter(function(){
		$(".page2 img").stop().animate({marginTop:-2350},5000);

	}).mouseleave(function(){
		$(".page2 img").stop().animate({marginTop:0},3000);
	});


	/* section3 */
	$(".page3").mouseenter(function(){
		$(".page3 img").stop().animate({marginTop:-1810},5000);

	}).mouseleave(function(){
		$(".page3 img").stop().animate({marginTop:0},3000);
	});


	/* section4 */
	$(".page4").mouseenter(function(){
		$(".page4 img").stop().animate({marginTop:-2330},4000);

	}).mouseleave(function(){
		$(".page4 img").stop().animate({marginTop:0},3000);
	});




});