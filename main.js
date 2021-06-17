const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    search();
  }
});

function search() {
  const input = searchInput.value;

  window.location.href =
    "https://www.google.com/search?q=" +
    input +
    "&oq=" +
    input +
    "&aqs=chrome.0.0i271j46i433j0i433j46i433j46i131i433j0j0i433j69i65.823j0j7&sourceid=chrome&ie=UTF-8";
}

function darkMode() {
  const checkbox = document.getElementById("toggle");

  checkbox.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
  });
}
