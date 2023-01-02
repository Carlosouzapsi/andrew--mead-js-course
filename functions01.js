// Function - input (arguments), code, output

let greetUser = function () {
  console.log("Welcome user!");
};

greetUser(); // To execute the function its necessary to call it.
let num = 3;
let square = function (num) {
  // using a argument on the function
  let result = num * num;
  return result;
};

square(num);

let value = square(3); // calling a function e putting the result inside a variable
let otherValue = square(10);
console.log(value);
console.log(otherValue);

// Challenge area:

// Create a function called convertFahrenheitToCelsius

// Call a couple of times  (32 -> 0) (68 -> 20)

// Print the converted values
const convertTemp = function (temp) {
  let celsius = ((temp - 32) * 5) / 9;
  return celsius;
};

let fahrenheit1 = 32;
let fahrenheit2 = 68;
convertTemp(fahrenheit1);
convertTemp(fahrenheit2);
