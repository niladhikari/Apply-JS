//2!=1*2
//3!=1*2*3 = 2!*3
//4!=1*2*3*4 = 3!*4
//5!=1*2*3*4*5 = 4!*5
//6!=1*2*3*4*5*6 = 5!*6
//7!=(7-1)!*7 =6!*7
//8!=(8-1)!*8 = 7!*8
//n!= (n-1)!*n

function Factoria(n) {
  if (n == 0) {
    return 1;
  } else {
    return  n * Factoria(n - 1);
  }
}
var Recursive = Factoria(7);
console.log("Factorial is "+Recursive);
