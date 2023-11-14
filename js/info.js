$(function(){
  $("#info li").mouseover(function(){
    $(this).css("background","#fff");
    $(this).find(".bubble").addClass("show");
  })
  $("#info li").mouseout(function(){
    $(this).css("background","rgba(255,255,255,0.4)");
    $(this).find(".bubble").removeClass("show");
  })
})