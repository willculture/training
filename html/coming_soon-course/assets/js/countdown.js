(function(){

    var CountDown = function() {
        this.el = document.querySelector("#countd");
        this.end = new Date("2017-08-01 00:00:00").getTime();

        this.now = function() {
           return new Date().getTime();
        }

        this.run = function() {
             var count = this.end - this.now();

             var s = 1000;
             var m = s * 60;
             var h = m * 60;
             var d = h * 24;

             var okd = this.calc(count, d);
             var okh = this.calc(okd[1], h);
             var okm = this.calc(okh[1], m);
             var oks = this.calc(okm[1], s);

             var time = "还剩 " + okd[0] + " 天 " + okh[0] + ":" + okm[0] + ":" + oks[0]
             this.el.innerHTML = time;
              var _this = this;
             setTimeout(function(){
                _this.run();
             }, 1000);
        }

        this.prefix = function(num) {
           if(num < 10) {
              return "0" + num;
           }
           return num;
        }

        this.calc = function(t, d) {
           var ok = this.prefix(Math.floor(t/d));
           return [ok, t % d];
        }

    }

    var c = new CountDown()
    c.run();

})()
