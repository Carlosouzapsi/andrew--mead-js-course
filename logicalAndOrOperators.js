let temp = 65;

// And operator - True if both side are true. False otherwise
// Or operator - True at least one side is true. false otherwise
if (temp >= 60 && temp <= 90) {
  console.log("it is pretty nice out");
} else if (temp <= 0 || temp >= 120) {
  console.log("Do not go outside");
} else {
  console.log("Do what you want!");
}

// Challenge area

let isGuestOneVegan = false;
let isGuestTwoVegan = true;

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options
// Else, Offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer up vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Make sure to offer up some vegan options");
} else {
  console.log("Offer up anything on the menu");
}
