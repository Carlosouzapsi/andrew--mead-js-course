// let num = 103.941;

// // to fixed() -> preserve number of decimals
// console.log(num.toFixed(2));

// console.log(Math.round(num)); // arrredonda para o inteiro mais proximo
// console.log(Math.floor(num)); // arredonda pra baixo
// console.log(Math.ceil(num)); // arrendonda pra cima

// let randomNum = Math.random();
// console.log(randomNum);

// // generation between numbers
// let min = 10;
// let max = 20;
// // integer range
// let randomNum2 = Math.floor(Math.random() * (max - min)) + min;

// Challenge
// 1 - 5 - true if correct - false if not correct
const makeGuess = (guess) => {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Generated number: " + randomNum);
  return guess === randomNum;
};

console.log(makeGuess(1));
