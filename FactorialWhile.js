
/*let i = 1,
  fact = 1,
  num = 6;

while (i <= num) {
  fact = fact * i;
  i++;
}
console.log("Factorial of " + num + " = " + fact);*/

function FactorialNumber(num) {
  let i = num,
    fact = 1;

  while (i >= 1) {
    fact = fact * i;
    i--;
  }
  return "Factorial of "+num+" = "+ fact;
}

var result = FactorialNumber(0);
console.log(result);
