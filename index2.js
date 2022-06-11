$(document).ready(function(){
     
     let background =  $("body");
     
     $("#customSwitches").click(function(){ 
          if(background["background-color"]=="white"){
               console.log("dark");
               // background.style["background-color"] == "dark";
          } else {
               // console.log("white");
               // background.style["background-color"] == "white";
          }
     });

     $(".post").click(function(refresh){

          let width=$(".img-W").val();
          let height = $(".img-H").val();
          let colors = $(".img-N").val();

          if(width && height && colors){
               //used formula of calculation image's size from the internet
               let total = width* height * 3;
               total = (total / 1024 / 1024).toFixed(2);

               if(total<= 10){
                    let message=`<p class="message">Your image is ${total} Mb, and it is acceptible</p><img alt="success" src="approved.svg">`
                    
                    let upload= '<div class="mb-3"><label for="formFile" class="form-label">Upload your image</label><input class="form-control" type="file" id="formFile"></div>';

                    let messbox=$('.m-box').append(message, upload);
                    
                    $(".form-control").change(function(e){
                         const image = this.files[0];
                         image.show();
                         e.preventDefault();
                    });

               }else{
                    let error=`<p class="message">Your image size is ${total} Mb should weigh no more than 10 Mb</p><img alt="error" src="declined.svg">`
                    
                    let errbox= $('.m-box').append(error);
               }
          }
          else{
               alert("You must fill out all fields for calculation!");
          }
          refresh.preventDefault();
     });
});
