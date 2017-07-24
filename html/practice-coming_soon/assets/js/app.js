(function(){

   var btn_more = document.querySelector(".btn-more");
   btn_more.onclick = function(){
     var main_body = document.querySelector(".main-body");
     var state = main_body.style.display;
     if(state === "none") {
         main_body.style.display = "block";
     } else {
         main_body.style.display = "none";
     }
   }

   var btn_feedback = document.querySelector(".btn-feedback");
   btn_feedback.onclick = function(){
     var feedback = document.querySelector(".feedback");
     feedback.style.display = "block";
   }

   document.querySelector(".close-mainbody").onclick = function() {
     document.querySelector(".main-body").style.display = "none";
   }

   document.querySelector(".close-feedback").onclick = function() {
     document.querySelector(".feedback").style.display = "none";
   }

})()
