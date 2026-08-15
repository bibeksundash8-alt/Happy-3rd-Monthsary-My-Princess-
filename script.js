// Envelope open + scroll
window.addEventListener("load", () => {
  const envelope = document.getElementById("envelope");
  const letter = document.querySelector(".envelope-letter");
  const topFlap = document.querySelector(".envelope-top");
  const scrollBtn = document.getElementById("scrollBtn");

  if (envelope && letter && topFlap && scrollBtn) {
    envelope.addEventListener("click", () => {
      topFlap.style.transform = "rotateX(-120deg)";
      letter.style.opacity = "1";
      letter.style.transform = "translateY(0)";
      scrollBtn.style.display = "inline-block";
    });

    scrollBtn.addEventListener("click", () => {
      const content = document.querySelector(".content");
      if (content) {
        window.scrollTo({
          top: content.offsetTop,
          behavior: "smooth"
        });
      }
    });
  }
});

// Fade-in on scroll (Intersection Observer)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// Floating emojis (flowerisblooming vibes)
function createFallingEmoji(layerId, emojis, maxSize, durationRange) {
  const layer = document.getElementById(layerId);
  if (!layer) return;

  const el = document.createElement("div");
  el.classList.add("falling");
  el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (Math.random() * maxSize + 20) + "px";
  el.style.animationDuration = (Math.random() * durationRange + 5) + "s";

  layer.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

setInterval(
  () => createFallingEmoji("blossom-layer", ["🌸", "💮", "🌺", "🌷", "🌹"], 18, 6),
  280
);
setInterval(
  () => createFallingEmoji("heart-layer", ["💗", "💕", "💞"], 14, 7),
  520
);
setInterval(
  () => createFallingEmoji("sparkle-layer", ["✨", "⭐"], 10, 5),
  800
);

// PLAY MUSIC ALWAYS
window.addEventListener("click", () => {
  const bgMusic = document.getElementById("bgMusic");
  if (bgMusic) {
    bgMusic.play().catch(() => {
      bgMusic.muted = true;
      bgMusic.play();
      setTimeout(() => {
        bgMusic.muted = false;
      }, 500);
    });
  }
});

