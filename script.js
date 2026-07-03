// script.js

// Run when the page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to IT Defined sample site!");

  // Add a click effect on navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      alert(`You clicked on ${link.textContent}`);
    });
  });

  // Highlight the header when hovered
  const header = document.querySelector("header");
  header.addEventListener("mouseenter", () => {
    header.style.backgroundColor = "#0066cc";
  });
  header.addEventListener("mouseleave", () => {
    header.style.backgroundColor = "#004080";
  });
});
