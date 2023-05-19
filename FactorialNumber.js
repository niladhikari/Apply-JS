
/*var fact = 1 ,num = 6;

for (let i = num; i>=1; i--) {
    fact = fact*i;
}
console.log(fact)*/

function FactorialNumber(num){
       let fact=1;
       for (let i = 1; i<=num; i++) {
        fact = fact*i;
    }    
    return "Factorial of "+num+" = "+ fact;
}

var result = FactorialNumber(6);
console.log(result);
