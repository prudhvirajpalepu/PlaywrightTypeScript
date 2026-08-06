"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
//objects must be create outside the class, otherwise it will give an error.
let person1 = new Person("prudhvi", 30);
person1.greet();
let person2 = new Person("John", 25);
person2.greet();
