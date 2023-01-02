// Creating an object and storing data
let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(myBook); // All Object print

console.log(myBook.title); // Showing an specific value getting the title property

console.log(`${myBook.title} by ${myBook.author}`); // Showing an specific value getting the title property

// Changing an object value
myBook.title = "Animal Farm";
console.log(myBook.title);

// Challenge area:
let person = {
  name: "Carlos",
  age: 31,
  location: "Florianópolis",
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

// Increasing age by 1
person.age += 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
