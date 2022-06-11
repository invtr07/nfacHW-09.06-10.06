$(document).ready(function(){
     let theme = localStorage.getItem("mode");
     $("body").addClass(theme);

     $(".switch").click(function(){
          if($("body").hasClass("grey")){
               localStorage.setItem("mode","light");
               $("body").removeClass("grey");
               $("body").addClass("light");
          } else {
               localStorage.setItem("mode","grey");
               $("body").removeClass("light");
               $("body").addClass("grey");
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
                    
                    document.cookie="Image "+total+ "Mb; expires=Sat, 12 Jun 2022 20:01:00 GMT";
                    // $(".form-control").change(function(e){
                    //      const image = this.files[0];
                    //      image.show();
                    //      e.preventDefault();
                    // });

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
