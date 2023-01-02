// Creating an object:
let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723,
};

let getSummary = function (book) {
  // Returning directly an object
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
  //   console.log(`${book.title} by ${book.author}`);
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

// Challenge:

let fahrenheit = 32;

let calcTemp = function (tempInFarenheit) {
  let celsius = (tempInFarenheit - 32).toFixed(1);
  let kelvin = ((tempInFarenheit + 459.67) * (5 / 9)).toFixed(1);
  let fahrenheit = tempInFarenheit;
  return {
    celsius: celsius,
    kelvin: kelvin,
    fahrenheit: fahrenheit,
  };
};

let showTemps = calcTemp(fahrenheit);
console.log(showTemps);
