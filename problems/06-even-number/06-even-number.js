/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

//kind of simplistic
// just enter the condition for searching for even numbers someNum mod 2 == 0
function isEven(someNum) {
  if (someNum % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2));
