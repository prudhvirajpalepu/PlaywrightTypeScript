"use strict";
class employeeDetails {
    name; //accessible from anywhere
    age; //accessible only within the class where declared
    gender; //accessible within the class and its subclasses
    static company = "ABC Corp"; //accessible without creating an instance of the class
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getemployeeDetails() {
        console.log(`Employee Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}
let employee1 = new employeeDetails("Prudhvi", 30, "Male");
employee1.getemployeeDetails();
console.log(employeeDetails.company); // Accessing static property without creating an instance
console.log(employee1.name); // Accessible
// console.log(employee1.age); // Error: Property 'age' is private and only accessible within class 'employeeDetails'.
// console.log(employee1.gender); // Error: Property 'gender' is protected and only accessible
