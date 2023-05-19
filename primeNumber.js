function isPrime(n){
     for (let i = 2; i < n; i++) {
         if (n % i == 0) {
             return 'Not a prime Number'
         }
     }
     return 'Your Number is prime'
}
var result = isPrime(79);
console.log(result);