(function() {

  var willbg = function() {
      this.canvas =  document.querySelector("#canvas");
      this.context = canvas.getContext("2d");
      this.shapes = [];

      this.wrap = document.querySelector("aside");
      var rect = this.wrap.getBoundingClientRect();
      this.width = rect.width;
      this.height = rect.height;
      this.colors = ["#4A6987", "#355F5F", "#35355F", "#4A6987", "#355F4A"]

      this.update();
      this.createShapes();


  }

  willbg.fn = {
    createShapes: function() {
      //this.shapes = [];
      for(var i = 0; i < 20; i++) {
        var radius = Math.ceil(Math.random() * 30);
        var x = Math.floor(Math.random() * this.width);
        this.shapes.push({
          y:  this.height + Math.floor(Math.random() * 100),
          radius: radius,
          x: x,
          speed: Math.floor(Math.random() * 5),
          color: this.colors[Math.floor(Math.random() * this.colors.length)]
        })
      }
    },
    update: function() {
       var rect = this.wrap.getBoundingClientRect();
       this.width = rect.width;
       this.height = rect.height;
       this.canvas.setAttribute("width", this.width);
       this.canvas.setAttribute("height", this.height);

    },
    draw: function() {
        var _this = this;
        this.clean();
        this.shapes.forEach(function(shape, index){
            _this.context.beginPath();
            _this.context.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2, true);
            _this.context.fillStyle = shape.color;
            _this.context.fill();

            shape.y -= shape.speed;
            if(shape.y < 0) {
              shape.y = _this.height;
              shape.x = Math.floor(Math.random() * _this.width)
            }
        })
        setTimeout(function(){
          _this.draw();
        }, 100)
    },
    clean: function() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
  }

  willbg.prototype = willbg.fn;

  var wbg = new willbg();
  wbg.update();
  wbg.draw();

  window.onresize = function(e) {
      wbg.update();
  }
})();
