(function(){

   document.querySelector(".btn-more").onclick = function () {
      var mb = document.querySelector(".main-body");
      if(mb.style.display === "block") {
        mb.style.display = "none";
      } else {
        mb.style.display = "block";
      }
   }

   document.querySelector(".close-mainbody").onclick = function() {
     document.querySelector(".main-body").style.display = "none";
   }

   document.querySelector(".btn-feedback").onclick = function () {
      var fb = document.querySelector(".feedback");
      if(fb.style.display === "block") {
        fb.style.display = "none";
      } else {
        fb.style.display = "block";
      }
   }

   document.querySelector(".close-feedback").onclick = function() {
     document.querySelector(".feedback").style.display = "none";
   }

})()
