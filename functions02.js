// Multiple arguments
// let add = function (a, b, c) {
//   return a + b + c;
// };

// let result = add(10, 1, 5);
// console.log(result);

// // Defining previous default arguments (if a value is not provide)
// let getScoreText = function (name, score = 0) {
//   console.log(name);
//   console.log(score);
// };

// let scoreText = getScoreText();
// // score has 0 value.
// getScoreText("Carlos");

// let getScoreText1 = function (name, score = 0) {
//   return "Name: " + name + " - Score: " + score;
// };
// let scoreText1 = getScoreText(undefined, 99);

// console.log(scoreText1);

// Challenge area

//total, tipPercent .2

let getTip = function (total, tipPercent) {
  return total * tipPercent;
};

let printTip = getTip(100, 0.2);

console.log(printTip);
