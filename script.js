
 // Toggle menu for mobile view
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// Set active page title based on the current URL
window.onload = function () {
  const path = window.location.pathname;
  let page = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
  if (page === '') page = 'Home';
  else page = page.charAt(0).toUpperCase() + page.slice(1);

  document.getElementById("activePageTitle").innerText = page;

  // Dynamically load the header and footer
  fetch("header.html")
    .then(response => response.text())
    .then(data => document.getElementById("header-container").innerHTML = data);

  fetch("footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer-container").innerHTML = data);
};