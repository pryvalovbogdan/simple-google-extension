const buttonClicked = tab => {
  const message = {
    txt: 'hi'
  };
  chrome.tabs.sendMessage(tab.id, message)
};

chrome.browserAction.onClicked.addListener(buttonClicked);