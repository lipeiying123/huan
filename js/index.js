$(function(){
	$(".btn_top1").click(function(){
		$(".btn_top1 img").css("transform","rotate(180deg)")
		$(".li1").css({"display":"block"})
	})
	$(".btn_top2").click(function(){
		$(".btn_top2 img").css("transform","rotate(180deg)")
		$(".li2").css({"display":"block"})
	})
	
	$(".li1 li").click(function(){
		$(".inp1 input").val($(this).html());
		$(".li1").hide();
		$(".btn_top1 img").css("transform","rotate(0deg)")
	})
	$(".li2 li").click(function(){
		$(".inp2 input").val($(this).html());
		$(".li2").hide();
		$(".btn_top1 img").css("transform","rotate(0deg)")
		
	})
	
	
	
	
	
})
