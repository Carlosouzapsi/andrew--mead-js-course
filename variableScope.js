// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope tou ca access variables defined on that scope, or any parent/ancestor

// Global Scope (varOne)
// Local Scope (varTwo)
// Local Scope (varFour)
// Local Scope (varThree)
let varOne = "VarOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo"; // block scope

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}
console.log(varTwo); // error, is not define. Because of the scope is only the block.
