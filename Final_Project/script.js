// Personalized welcome message
document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcomeMessage");
  if (welcome) {
    welcome.textContent = "Ready to build your playlist?";
  }
});

// Playlist functionality
let playlist = [];

function renderPlaylist(filter = "") {
  const list = document.getElementById("playlist");
  if (!list) return;

  list.innerHTML = "";
  let songs = [...playlist];

  if (filter === "favorites") {
    songs = songs.filter(song => song.favorite);
  }

  const searchBar = document.getElementById("searchBar");
  if (searchBar && searchBar.value) {
    songs = songs.filter(song =>
      song.title.toLowerCase().includes(searchBar.value.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchBar.value.toLowerCase())
    );
  }

  if (songs.length === 0) {
    list.innerHTML = "<li>No songs yet!</li>";
    return;
  }

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${song.title}</strong> by ${song.artist}
      <button onclick="toggleFavorite(${index})">${song.favorite ? "★" : "☆"}</button>
      <button onclick="removeSong(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function addSong(title, artist, url) {
  playlist.push({ title, artist, url, favorite: false });
  renderPlaylist();
}

function removeSong(index) {
  playlist.splice(index, 1);
  renderPlaylist();
}

function toggleFavorite(index) {
  playlist[index].favorite = !playlist[index].favorite;
  renderPlaylist();
}

// Event listeners
const songForm = document.getElementById("songForm");
if (songForm) {
  songForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const artist = document.getElementById("artist").value.trim();
    const url = document.getElementById("url").value.trim();
    if (title && artist) {
      addSong(title, artist, url);
      songForm.reset();
    }
  });
}

const showFavorites = document.getElementById("showFavorites");
if (showFavorites) {
  showFavorites.addEventListener("click", () => renderPlaylist("favorites"));
}

const searchBar = document.getElementById("searchBar");
if (searchBar) {
  searchBar.addEventListener("input", () => renderPlaylist());
}

// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const feedback = document.getElementById("formFeedback");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name && emailRegex.test(email) && message.length >= 10) {
      feedback.textContent = "Message sent successfully!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Please enter a valid name, email, and a message of at least 10 characters.";
      feedback.style.color = "red";
    }
  });
}
