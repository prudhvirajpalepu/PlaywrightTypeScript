"use strict";
let Message = () => {
    console.log("Hello from Arrow function");
};
Message();
let sumArrow = (a, b) => a + b;
{
    console.log("Sum of 5 and 10 is: " + sumArrow(5, 10));
}
