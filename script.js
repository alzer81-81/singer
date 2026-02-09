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
const sampleAudio = document.getElementById("sample-audio");

playButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const audioSrc = button.dataset.audio;

    if (!audioSrc || !sampleAudio) {
      button.textContent = "Preview";
      button.classList.toggle("active");
      return;
    }

    if (sampleAudio.paused) {
      sampleAudio.src = audioSrc;
      await sampleAudio.play();
      button.textContent = "Pause";
    } else {
      sampleAudio.pause();
      button.textContent = "Play";
    }
  });
});
