let isAccountLocked = true;
let userRole = "admin";
// when there is one thing or another
/*
if (isAccountLocked) {
  console.log("Is account locked");
} else {
  console.log("Welcome!");
}
*/
/*
if (isAccountLocked) {
} else if (userRole === "Admin") {
  console.log("Welcome Admin");
} else {
  console.log("Welcome");
}
*/

let temp = 45;
let celsius = ((temp - 32) * 5) / 9;
console.log("Initial temperature: " + celsius.toFixed(2) + " C");

if (temp <= 0) {
  console.log("It is freezing outside!");
} else if (temp >= 40) {
  console.log("It is hot outside");
} else {
  console.log("Its pretty nice out. Go there!");
}
