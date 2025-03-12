// C1-A2: Mathematical and Comparison Operations, and Type Conversions

// 1. Develop a program initializing 4 variables (a, b, c, d) and 1 constant (e), store the following values:
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;


// 2. a. Display the sum of the declared variables (a, b, c, d) and constant (e) combined.
let sum = a + b + c + parseInt(d) + e; 
//parseInt is to niconvert string 'd' to a number for performing mathematical operation.
console.log("The Sum of a, b, c, d, and e is", sum);
//Then console the output of combining all declared variables.


// b. Compare the values of variable d and constant e using relational operators [>, <, >=, <=, and ===], then display the results.

console.log('Is d greater than e:', d > e);
//Check if variable d is greater than to variable e using console.

console.log('Is d less than e:', d < e);
//Check if variable d is less than to variable e using console.

console.log('Is d greater than or equal to e:', d >= e);
//Check if variable d is greater than or equal to variable e using console.

console.log('Is d less than or equal to e:', d <= e);
//Check if variable d is less than or equal to variable e using console.

console.log('Is d strictly equal to e:', d === e);
//Check if variable d is strictly equal to variable e using console.


// c. Declare new variables to store the results of the following operations, then after, display the results:

// 1. Subtract all the values of the declared variables.
let subtractionResult = a - b - c - d;
console.log('The Result of subtracting all variables is', subtractionResult);
//console the result of subtracting  values of the declared a,b,c and d variables.

// 2. Multiply the values of variable a and c, divided by constant e.
let multiplicationResult = (a * c) / e;
console.log('The Result of multiplying a and c, then dividing by e is', multiplicationResult);

// 3. Display the exponent value of constant e raised to the power of variable c.
let exponentResult = e**c;
console.log('The Result of e raised to the power of c is', exponentResult);

//4.Reassign the value of c.3 to constant e, then display the result.

let newE = c; 
console.log("Result of reassigning c to e:", newE);
