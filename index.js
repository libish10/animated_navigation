$(document).ready(function(){
    $("#cross").click(function(){
      $("#overlay").css("display","block");
      $("#grid_container").addClass("bgColor");
      $("#grid_container").css("opacity","0.7");
     

   
      
      // $("#cross").a
      // var animation= $("#between_item1_item2");
      // animation.addClass("decreaseHeightWidth");
    //  $("#link a").css("display","none")

    });
  });
function No(){
  document.getElementById("overlay").style.display="none";
  document.getElementById("grid_container").style.opacity="1";
}
function Yes(){
  document.getElementById("between_item1_item2").style.display="none";
  document.getElementById("grid_container").style.opacity="1";
  // document.getElementById("overlay").style.display="none"
}