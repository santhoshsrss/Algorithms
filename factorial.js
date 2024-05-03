function Factorial(n){
 if(n === 0 || n === 1){
    return 1
 }
 let num = 1;
 for(let i = 2; i <= n; i++){
    num *= i
 }
 return num
}

console.log(Factorial(5))

