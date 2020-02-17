/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

let randObject = {
  a: 'new',
  b: 'blob',
  c: 'block'
};
function objectProperties(someObj) {
  for (let obj in someObj) {
    console.log(`${obj}: ${someObj[obj]}`);
  }
}

console.log(objectProperties(randObject));
