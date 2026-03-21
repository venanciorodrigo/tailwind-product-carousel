// Script to increase scrollbar height while scrolling and revert back after a short delay
const el = document.querySelector(".scrollbar-dynamic");
let timeout;
el.addEventListener("scroll", () => {
  el.classList.add("scrolling");

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    el.classList.remove("scrolling");
  }, 700);
});

// Script to show all cards and hide the button when "Show More" is clicked
const btn = document.getElementById("showMoreBtn");
const container = document.querySelector(".scrollbar-dynamic");

btn.addEventListener("click", () => {
  // Show all cards
  container.classList.remove("[&_.card:nth-child(n+5)]:hidden");

  // Hide button
  btn.style.display = "none";

  // Scroll to the bottom of the container to show the newly revealed cards
  window.scrollTo(0, document.body.scrollHeight);
});
