// Array to store movie titles
let watchlist = [];

// Function to add a movie
function addMovie(title) {
  if (title.trim() === "") return;
  watchlist.push(title.trim());
  displayMovies();
}

// Function to display movies dynamically
function displayMovies() {
  const list = document.getElementById("movie-list");
  list.innerHTML = "";

  watchlist.forEach((movie, index) => {
    const li = document.createElement("li");
    li.className = "collection-item";

    const span = document.createElement("span");
    span.className = "movie-title";
    span.textContent = movie;

    const removeBtn = document.createElement("span");
    removeBtn.className = "material-icons remove-btn";
    removeBtn.textContent = "delete";
    removeBtn.onclick = () => removeMovie(index);

    li.appendChild(span);
    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

// Function to remove a movie
function removeMovie(index) {
  watchlist.splice(index, 1);
  displayMovies();
}

// Event listener for Add Movie button
document.getElementById("add-movie-btn").addEventListener("click", () => {
  const input = document.getElementById("movie-name");
  addMovie(input.value);
  input.value = "";
});
