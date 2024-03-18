// background.js
browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.executeScript({
      file: 'content.js'
    });
  });
  