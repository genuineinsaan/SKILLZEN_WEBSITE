// --- NEW: Typewriter Effect ---
document.addEventListener("DOMContentLoaded", () => {
  const taglineEl = document.getElementById("tagline");
  const text = "WHERE SKILLS >>> RESUMES";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      taglineEl.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Adjust typing speed (in ms)
    } else {
      // Stop blinking cursor after typing
      taglineEl.style.borderRight = "none";
    }
  }

  // Start typing after main heading fades in (1s delay)
  setTimeout(typeWriter, 1000); 
});


// --- Popup Form Logic (Your Original Code) ---
const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", () => popup.style.display = "flex");
closePopup.addEventListener("click", () => popup.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});


// --- NEW: Particle.js Config ---
// This loads the particle animation
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse", // Pushes particles away from cursor
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#38bdf8", // Particle color
    },
    links: {
      color: "#38bdf8", // Link color
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1, // Movement speed
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80, // Number of particles
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
});