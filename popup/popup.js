const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const greenBtn = document.getElementById('green');
const input = document.getElementById('input');

const sendMessagePopUp = message => {
  const params = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(params, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, message)
  });
};

redBtn.addEventListener('click', () => {
  const message = {
    txt: 'red'
  };
  sendMessagePopUp(message)
});

blueBtn.addEventListener('click', () => {
  const message = {
    txt: 'blue'
  };
  sendMessagePopUp(message)
});

greenBtn.addEventListener('click', () => {
  const message = {
    txt: 'green'
  };
  sendMessagePopUp(message)
});

input.addEventListener('input', e => {
  const message = {
    txt: e.target.value
  };
  sendMessagePopUp(message)
});

