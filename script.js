const revealElements = document.querySelectorAll(".section, .hero-content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

const playButtons = document.querySelectorAll(".play");
playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Preview";
    button.classList.toggle("active");
  });
});
