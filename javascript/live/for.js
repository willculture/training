for(let a = 0, b = 3; a < 10 && b < 30; a = a + 2, b = b +3) {
  console.log(a, "--", b);
}



console.log("--------------------------------")

for(let i = 0; i < 10; i++) {
  if(i == 5) {
    break;
  }
  console.log("i =", i);
}