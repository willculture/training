(function() {


  var circle = function() {
    this.x = 0;
    this.y = 0;
    this.end = 0;
    this.radius = Math.random() * 30;
    var colors = ["#2E4154", "#2B4157", "#2B572B"]
    var index = Math.floor(Math.random() * colors.length);
    this.color = colors[index];
    this.speed = 10;

    this.move = function() {
      this.y -= this.speed;
    }
  }


  var willbg = function() {

    this.circles = [];
    this.canvas = document.querySelector("#canvas");
    this.context = this.canvas.getContext("2d");
    this.parent = this.canvas.parentNode;
    this.update();

    this.createCircle();

  }

  willbg.prototype = {
    createCircle: function() {
      for (var i = 0; i < 20; i++) {
        var c = new circle();
        c.x = Math.random() * this.width;
        c.speed = Math.random() * 10;
        c.y = this.height;
        this.circles.push(c);
      }
    },
    draw: function() {
      this.context.clearRect(0, 0, this.width, this.height);
      var _this = this;
      this.circles.forEach(function(circle) {
        _this.context.beginPath();
        _this.context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, true);
        _this.context.fillStyle = circle.color;
        _this.context.fill();
        _this.context.closePath();
        circle.move();
        if (circle.y < 0) {
          circle.y = _this.height
        }

      })

      setTimeout(function() {
        _this.draw();
      }, 100);
    },
    update: function() {
      var rect = this.parent.getBoundingClientRect();
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.setAttribute("width", this.width);
      this.canvas.setAttribute("height", this.height);
    }
  }




  var bg = new willbg();
  bg.draw();


  window.onresize = function() {
    bg.update();
  }

})()
