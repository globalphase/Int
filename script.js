<script>
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

window.onload = function() {
  const path = window.location.pathname;
  let page = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
  if (page === '') page = 'Home';
  else page = page.charAt(0).toUpperCase() + page.slice(1);

  document.getElementById("activePageTitle").innerText = page;
};
</script>
