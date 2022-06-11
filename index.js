$(document).ready(function(){
    $("button").click(function(){
     if(!$("#persInp").val()&& 
          !$("#fictChar").val()&&
          !$("#adverb").val()&&
          !$("#adjective").val()){
               let inputs =[
                    $("#persInp").val(),
                    $("#fictChar").val(),
                    $("#adverb").val(),
                    $("#adjective").val()
          ];
          
          }else {
               alert("Please fill out all fields!");
          }
          
    });
});