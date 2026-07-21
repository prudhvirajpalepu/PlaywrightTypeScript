let Message =() => { 
    console.log("Hello from Arrow function"); 
}
Message();

let sumArrow = (a: number, b: number): number => a+b;{
    console.log("Sum of 5 and 10 is: " + sumArrow(5, 10));
}