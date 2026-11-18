/* Hover / tap previews. No dependencies, no autoplay on load.
   Nothing is fetched until someone shows interest in a card. */
(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  const cards = [...document.querySelectorAll("[data-preview]")];
  let current = null;

  function start(card) {
    const video = card.querySelector("video");
    if (!video) return;
    if (current && current !== card) stop(current);
    if (!video.getAttribute("src")) video.setAttribute("src", video.dataset.src);
    card.classList.add("is-playing");
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
    current = card;
  }

  function stop(card) {
    const video = card.querySelector("video");
    if (!video) return;
    video.pause();
    card.classList.remove("is-playing");
    if (current === card) current = null;
  }

  for (const card of cards) {
    const video = card.querySelector("video");
    if (!video || !video.dataset.src) continue;

    if (canHover.matches && !reduced.matches) {
      card.addEventListener("pointerenter", () => start(card));
      card.addEventListener("pointerleave", () => stop(card));
    }

    const button = card.querySelector(".card__play");
    if (button) {
      button.addEventListener("click", () => {
        card.classList.contains("is-playing") ? stop(card) : start(card);
      });
    }
  }

  // Pause anything that scrolls out of view (and save the battery).
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting && entry.target.classList.contains("is-playing")) {
          stop(entry.target);
        }
      }
    }, { threshold: 0.15 });
    cards.forEach((card) => io.observe(card));
  }
})();
