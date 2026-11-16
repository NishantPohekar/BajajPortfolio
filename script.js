// The video has been converted into 120 numbered JPEG images.
const frameCount = 120;
const hero = document.getElementById('home');
const frameImage = document.getElementById('hero-frame');
const progressBar = document.getElementById('film-progress');
const frameLabel = document.getElementById('frame-label');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const frames = [];
let wantedFrame = 0;
let shownFrame = -1;
let updateRequested = false;

// padStart changes 1 to "001", matching the saved file names.
function framePath(number) {
  return 'assets/frames/frame-' + String(number).padStart(3, '0') + '.jpg';
}

// Only replace the visible picture once the requested image is ready.
// This keeps the previous picture visible on slower devices.
function showFrame() {
  const image = frames[wantedFrame];
  if (image && image.complete && image.naturalWidth > 0 && shownFrame !== wantedFrame) {
    frameImage.src = image.src;
    shownFrame = wantedFrame;
  }
}

// Convert scroll distance into a fraction between 0 and 1, then an image number.
function updateFrame() {
  const distance = hero.offsetHeight - window.innerHeight;
  const scrolled = -hero.getBoundingClientRect().top;
  let progress = distance > 0 ? scrolled / distance : 0;
  progress = Math.max(0, Math.min(1, progress));
  if (reducedMotion.matches) progress = 0;
  wantedFrame = Math.round(progress * (frameCount - 1));
  showFrame();
  progressBar.style.width = progress * 100 + '%';
  frameLabel.textContent = String(wantedFrame + 1).padStart(2, '0') + ' / 120';
  updateRequested = false;
}

// requestAnimationFrame prevents doing the same work many times per screen refresh.
function requestUpdate() {
  if (!updateRequested) {
    updateRequested = true;
    window.requestAnimationFrame(updateFrame);
  }
}

// Load one image at a time in the background. No animation library is needed.
function preloadFrame(index) {
  if (index >= frameCount || reducedMotion.matches) return;
  const image = new Image();
  frames[index] = image;
  image.onload = function () { showFrame(); preloadFrame(index + 1); };
  image.onerror = function () { preloadFrame(index + 1); };
  image.src = framePath(index + 1);
}
preloadFrame(0);
window.addEventListener('scroll', requestUpdate, { passive: true });
window.addEventListener('resize', requestUpdate);
reducedMotion.addEventListener('change', function () {
  if (!reducedMotion.matches) preloadFrame(0);
  requestUpdate();
});
updateFrame();

// Close the Bootstrap phone menu after choosing a section.
document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    const menu = document.getElementById('navigation');
    bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  });
});

// The browser checks required fields and email format before this event runs.
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  document.getElementById('form-status').textContent = 'Thanks! The demo form works. No message was sent or stored.';
});

// Reveal each foundation card once it comes close to the visible screen.
// With only four cards, a short loop is enough; no animation library is needed.
const foundationPath = document.querySelector('.foundation-path');
const foundationSteps = document.querySelectorAll('.foundation-step');
foundationPath.classList.add('path-animated');
function revealFoundationCards() {
  foundationSteps.forEach(function (step) {
    if (step.getBoundingClientRect().top < window.innerHeight - 40) {
      step.classList.add('is-visible');
    }
  });
}
window.addEventListener('scroll', revealFoundationCards, { passive: true });
window.addEventListener('resize', revealFoundationCards);
revealFoundationCards();
