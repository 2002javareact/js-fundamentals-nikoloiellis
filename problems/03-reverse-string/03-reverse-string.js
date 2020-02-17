/* 3. Reverse someString
Define function: reversesomeStr(somesomeStr)
Reverse and return the someString. */

//using recursion we can reverse the string
function reversesomeString(someStr) {
    //a ternary operator says if the string isn't empty then run the code
  return someStr === ''
    ? ''
    : reversesomeString(someStr.substr(1)) + someStr.charAt(0);
    //using recursion and substring which extracts characters the begining and the end
    //it will keep going and going until the string itself is reversed 
}
console.log(reversesomeString('Yep'));
