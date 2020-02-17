/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
//test array
let arr = [1, 's', 2];

function spliceElement(someArr, index) {
  //returns a spimple splice of someArr
  return someArr.splice(index);
}

console.log(spliceElement(arr, 1));
