let name = "Carlos Souza";

// Length property - comprimento
console.log(name.length); //neste caso retorna a qtd de caracteres de uma string

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = "abc123password";
console.log(password.includes("password")); // return true or false

// trim (remove blank or white space in the end and the beginning)
name = "   Carlos Souza  ";
console.log(name.trim());

// Challenge area:
function isValidPassword(pass) {
  return pass.length >= 8 && !pass.includes("word");
}

console.log(isValidPassword("abcd"));
console.log(isValidPassword("abcd5678"));
console.log(isValidPassword("abcd12word"));

