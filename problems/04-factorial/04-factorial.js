/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  //factorials are none negative integers so if it goes to below 0 th
  //conditional is to stop it
  if (sumNum === 0) {
    return 1;
  } else {
    /*factorials we multiply the number counting down 
      so sumNum is * itself by -1
      so lets say 3! it would be 3 * (3-1) * then recursion 3* (3-1) * 2 - (2-1) * 1 * (1
        - 1 when it hits 0 its basically saying stop */
    return sumNum * factorial(sumNum - 1);
  }
}

console.log(factorial(0));
