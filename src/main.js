const htmls = require('./htmls');
const newCharacter = require('./new_character');

document.addEventListener("DOMContentLoaded", () => {
    const wrapContent = document.getElementById('wrap-content');
    wrapContent.innerHTML = htmls.justPlay; 

    const playButton = document.getElementById('clickNPlay');
    console.log(newCharacter);
    playButton.onclick = newCharacter;     
});

// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
