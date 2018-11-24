// function outFn() {

//   function innerFn() {
//     console.log("...innerFn");
//   }

//   return innerFn;
// }

// const ok = outFn();

// ok();


// function count() {
//   for(var i = 0; i < 5; i++) {
//     (function(i) {
//       setTimeout(function() {
//       console.log(i)
//     }, i * 1000) })(i);
//   }
// }

// count();

// console.log("hello-------->")

// var sum = 0;
function count(sum = 0) {

  return function() {
    console.log(sum++);
  }
  
}


const c = count();
c();
const b = c;
// sum = 10;
c();
c();

b();
b();

const d = count();

d();
d();
d();


///

///
////
///
///
///