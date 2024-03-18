// content.js
document.addEventListener('click', function(event) {
    if (!event.target.closest('#speech')) {
      browser.runtime.sendMessage({ closePopup: true });
    }
  });
    