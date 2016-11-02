/**
 * Created by Administrator on 2016/1/14.
 */
(function(){

    var  calc = {
        var1: "", //第一个变量
        var2: "", //第二个变量
        fuhao:"", //符号
        jieguo: 0, //结果
        zhiqian: function(){
            if(this.var1 == ""){
                this.var1 = 0
            }
            if(this.var2 == 0){
                this.var2 = 0;
            }
            this.var1 = parseFloat(this.var1);
            this.var2 = parseFloat(this.var2);
        },
        jiafa: function(){
            this.zhiqian();
            this.jieguo = this.var1 + this.var2;
            this.var1 = this.jieguo;
            this.var2 = 0;
        },
        jianfa: function(){
            this.zhiqian();
            this.jieguo  = this.var1 - this.var2;
            this.var1 = this.jieguo;
            this.var2 = 0;
        },
        chengfa: function(){
            this.zhiqian();
            this.jieguo  = this.var1 * this.var2;
            this.var1 = this.jieguo;
            this.var2 = 0;
        },
        chufa: function(){
            this.zhiqian();
            this.jieguo  = this.var1 / this.var2;
            this.var1 = this.jieguo;
            this.var2 = 0;
        },
        qiuyu: function(){
            this.zhiqian();
            this.jieguo = this.var1 % this.var2;
            this.var1 = this.jieguo;
            this.var2 = 0;
        },
        jisuan: function(){
            switch (this.fuhao){
                case "+":
                    this.jiafa();
                    break;
                case "-":
                    this.jianfa();
                    break;
                case "*":
                    this.chengfa();
                    break;
                case "/":
                    this.chufa();
                    break;
                case "%":
                    this.qiuyu();
                    break;
                default:

            }
        }
    }

    var keys = document.getElementById("key").getElementsByTagName("a");
    var show = document.getElementById("result");
    for(var i = 0; i < keys.length; i++){
        keys[i].onclick = function () {
                var text = this.textContent;

              switch (text){
                  case "AC":
                      calc.var1 = "";
                      calc.var2  = "";
                      calc.fuhao = "";
                      calc.result = 0;
                      show.textContent = 0;
                      break;
                  case "+":
                      calc.jisuan();
                      show.textContent = calc.var1;
                      calc.fuhao = text;
                      break;
                  case "-":
                      calc.jisuan();
                      show.textContent = calc.var1;
                      calc.fuhao = text;
                      break;
                  case "x":
                      calc.jisuan();
                      show.textContent = calc.var1;
                      calc.fuhao = "*";
                      break;
                  case "÷":
                      calc.jisuan();
                      show.textContent = calc.var1;
                      calc.fuhao = "/";
                      break;
                  case "%":
                      calc.jisuan();
                      show.textContent = calc.var1;
                      calc.fuhao = "%";
                      break;
                  case "=":
                      calc.jisuan();
                      show.textContent = calc.var1;
                      calc.fuhao = "=";
                      break;
                  case "+/-":
                      if(calc.fuhao.length > 0){
                          if(calc.var2 == 0){
                              calc.var2 = "";
                          }
                          if(calc.var2.charAt(0) != "-"){
                              calc.var2 = "-" + calc.var2;
                          }else{
                              calc.var2 =   calc.var2.replace("-","");
                          }
                          show.textContent = calc.var2;
                      }else{
                          if(calc.var1.charAt(0) != "-"){
                              calc.var1 = "-" + calc.var1;
                          }else{
                              calc.var1 =   calc.var1.replace("-","");
                          }
                          show.textContent = calc.var1;
                      }
                      break;
                  default:



                      if(calc.fuhao.length > 0){ //如果有符号,我们则做数字拼接

                          if(text != "." || calc.var2.indexOf(".") < 0){
                              if(calc.var2 == 0){
                                  calc.var2 = "";
                              }
                              calc.var2 += text
                              show.textContent = calc.var2;
                          }


                      }else{
                          if(text != "." || calc.var1.indexOf(".") < 0){
                            calc.var1 += text;
                            show.textContent = calc.var1;
                          }
                      }
              }




        }
    }

})();
