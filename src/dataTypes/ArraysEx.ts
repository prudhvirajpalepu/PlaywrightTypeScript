//declaring arrays
// Square bracket syntax
//In Java length of an array is fixed, in typescript we can keep adding 
// values of an array because we donot provide lenght during declaration.
let numbers: number[] = [1,2,3,4]

// Generic syntax
let names: Array<string> = ["Alice", "Bob"];
names.push("prudhvi");

// Accepts only strings or numbers
let mixedData: (string | number)[] = ["Apple", 42, "Banana", 100];

//To create arrays within arrays (like a grid or matrix), use multiple 
// sets of square brackets
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];

//common array methods

let prices: number[] = [10, 20, 30];

// Map method inherits the 'number' type automatically
let doubled = prices.map((price) => price * 2); // [20, 40, 60]

// Filter method
let expensive = prices.filter((price) => price > 15); // [20, 30]

//Printing Output in different ways
/** console.log(matrix[0][1]); // Outputs: 2 //for grid matrix
console.log('price of the doubled is '+doubled);
console.log('prices of the expensive cars are '+expensive);
console.log('first value of the prices are '+prices[0]);
console.log('the length of prices are '+prices.length); **/
console.log('names of the employees are '+names);
console.log('size of an array is '+names.length);