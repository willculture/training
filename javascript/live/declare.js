
function test() {
  console.log(a);


  function test_inner() {
    if(true) {
      var a = 20;
    }
  }

  test_inner();
}


test();

// var a;
// console.log("out", a)

// console.log(a);