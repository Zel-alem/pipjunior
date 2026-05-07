// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Free Tracker Download
document.getElementById('download-btn').addEventListener('click', (e) => {
  e.preventDefault();
  alert("✅ Money Habit Tracker downloaded successfully!\n\nThank you for teaching kids smart money habits! 🦉");
});