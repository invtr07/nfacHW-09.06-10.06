$(document).ready(function(){
    $("button").click(function(){
     if($("#persInp").val() && $("#fictChar").val()&&
          $("#adverb").val()&&$("#adjective").val())
          {
               let inputs =[
                    $("#persInp").val(),
                    $("#fictChar").val(),
                    $("#adverb").val(),
                    $("#adjective").val()
          ];
          
          const output= $(".game-section").append(`<p class="output">Once upon a time lived ${inputs[0]}.He loved to compete with ${inputs[1]} on playing BlackJack. However,${inputs[1]} always won in this game, and it made ${inputs[0]} ${inputs[3]}. So next time he played ${inputs[2]}, but lost again. </p>`);
          
          output.show();

          }else {
               alert("Please fill out all fields!");
          }
          
    });
});

