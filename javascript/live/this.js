/**
 * this 指向
 */
'use strict'
console.log(this) // 默认指向window

function Test(arg) {
  this.arg = arg;
  console.log(this); 
}


Test(); // window

const t = new Test(); //当前的这个实例化对象 t;


Test.call(t); // t;
Test.apply(global); // window


