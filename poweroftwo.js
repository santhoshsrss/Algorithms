function isPowerOfTwo(n){
    if (n < 1){
        return false
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(16))


// Most efficient methods to solve power of two.

// function isPowerOfTwo(n){
//     if (n < 1){
//         return false
//     }
//     return (n & (n-1)) === 0
// }