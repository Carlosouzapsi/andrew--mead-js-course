// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
// Local scope (fahrenheit, celsius)
// Local scope (isFreezing)

const convertTemp = function (temp) {
  let celsius = ((temp - 32) * 5) / 9;
  if (celsius <= 0) {
    let isFreezing = true;
  }
  return celsius;
};

let tempOne = 32;
let tempTwo = 68;

convertTemp(tempOne);
convertTemp(tempTwo);
