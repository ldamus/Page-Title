$(".submit").click(function(){
var Q1Input =$(".Q1").val(); 
if(Q1Input==="yes"){   
$(".batman").fadeIn();
$(".Spider-man").fadeIn();
}else{
$("p").text("try");
}
});