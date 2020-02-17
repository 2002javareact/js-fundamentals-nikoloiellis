/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

class Person {
  constructor() {
    this.name = 'Bob';
    this.age = 44;
  }
}

const person = new Person();
