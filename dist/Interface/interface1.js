"use strict";
//An interface is a TypeScript contract that defines what properties and types 
// an object must have.
//const makes the variable constant, but the content of objects/arrays can still be changed.
//Use const when you don’t want the variable to be reassigned. Prefer const over let 
//whenever possible.
const loginTest = {
    testId: "TC_001",
    testName: "Valid Login",
    module: "Authentication",
    priority: "High",
    isAutomated: true,
    steps: ["Open login page", "Enter credentials", "Click Login"]
};
const forgotPasswordTest = {
    testId: "TC_002",
    testName: "Forgot Password",
    module: "Authentication",
    priority: "Medium",
    isAutomated: false
    // steps is optional, so we can skip it
};
console.log(forgotPasswordTest);
