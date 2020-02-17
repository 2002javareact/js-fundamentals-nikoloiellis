/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function subString(someStr, startIndex, endIndex) {
  //Try and catch is there for error handling
  /*if somestring is blank or its not the type of string then
      throw an error */
  try {
    if (typeof someStr === 'string' || someStr === '') {
      return someStr.substring(startIndex, endIndex);
    } else {
      throw 'Input is incorrect';
    }
  } catch (err) {
    console.log(err); // log out the error
  }
}
/* the first should give us  */
console.log(subString('Hello World', 1, 4));

console.log(subString(2, 0, 3));
