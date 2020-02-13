/* 1. fib
Define function: fib(n) 
Return the nth number in the fib sequence. */

//using function fibonnacci the parameter n represents the number in the equation
function fib (n) {
    //sequence is an array for the initial n values 0, and 1 they are static and don't change 
    let sequence = [1, 1];
    //i = to 2 because of the position of 2 is 3 in n value 
    for(let i = 2; i < n; i++){
        //this is basically n = n - 1 + n - 2 sequence is the array i is the position of the array 
        sequence[i]= sequence[i - 1] + sequence[i - 2];

    }
    //since array starts at 0 you have to consist 
    return sequence[n - 1];
}

//this is just a console out to check if the values are valid 
console.log(fib(10));