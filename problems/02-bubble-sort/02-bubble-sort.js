/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

let bubbleSort = numArray => {
  //holds the lenght of the array from 0 - its final lenght - 1
  // is for the array since it starts at 0
  let len = numArray.length - 1;
  //for loop to loop through the array
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      /*the if statement works as a conditional check basically saying if 
     temp array is lower than the position on the right then swap it with the left
     temp works as the number in the position and consistently evalulates it*/
      if (numArray[j] > numArray[j + 1]) {
        let tmp = numArray[j];
        numArray[j] = numArray[j + 1];
        numArray[j + 1] = tmp;
      }
    }
  }
  //just return the numArray value
  return numArray;
};
//Test section to see if it works
let arr = [21, 2, 19, 99, 100, 10, 1];
console.log(bubbleSort(arr));
