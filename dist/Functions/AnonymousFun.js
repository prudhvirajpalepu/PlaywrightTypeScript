"use strict";
function PrintHello() {
    console.log("Hello");
}
PrintHello();
//Anonymous function: Without name, can be assigned to a variable or passed as an argument 
// to another function
let message = function () {
    console.log("Hello from Anonymous function");
};
message();
function sum(a, b) {
    return a + b;
}
let sumResult = sum(5, 10);
console.log("Sum of 5 and 10 is: " + sumResult);
