"use strict";
// DOM - Document Object Model
const notes = [
  {
    title: "my next trip",
    body: "I would like to go to Spain",
  },
  { title: "Habbits to work on", body: "Exercise a bit better" },
  {
    title: "Office modification",
    body: "Get  a new seat",
  },
];
const filters = {
  searchText: "",
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  // Clear a element:
  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p");
    // usado textContent para mudar parte do valor do elemento html
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
}; 

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked";
});

document.querySelector("#remove-all").addEventListener("click", function () {
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove();
  });
});
// Parameter input shows in real time the characters on browser log
document.querySelector("#search-text").addEventListener("input", function (e) {
  // get the value on the input using target pop
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
