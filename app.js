const pages = ['assets/1.svg', 'assets/2.svg'];
let current = 0;
const image = document.querySelector('#slide');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
function show(index) {
  current = Math.max(0, Math.min(pages.length - 1, index));
  image.src = pages[current];
  image.alt = `Invitation design, page ${current + 1} of ${pages.length}`;
  image.classList.remove('reveal');
  void image.offsetWidth;
  image.classList.add('reveal');
  document.querySelector('#counter').textContent = `${current + 1} / ${pages.length}`;
  previous.disabled = current === 0;
  next.textContent = current === pages.length - 1 ? 'Replay' : 'Next';
  document.querySelector('#artwork').ariaLabel = current === pages.length - 1 ? 'Replay invitation' : 'Next invitation page';
}
function advance() { show((current + 1) % pages.length); }
next.addEventListener('click', advance);
previous.addEventListener('click', () => show(current - 1));
document.querySelector('#artwork').addEventListener('click', advance);
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); advance(); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
});
