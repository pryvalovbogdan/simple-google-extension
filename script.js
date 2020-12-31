const par = document.getElementsByTagName('span');

const changeColor = color => {
  for(el of par){
    el.style.backgroundColor = color;
  }
};

changeColor('orange');

const gotMessage = request => {
  switch (request.txt) {
    case "blue":
      changeColor('blue');
      break;
    case "green":
      changeColor('green');
      break;
    case "red":
      changeColor('red');
      break;
    case "hi":
      for(el of par) {
        if (el.innerText === 'Поделиться:') {
          el.style.visibility = 'hidden';
        }
      }
      break;
    default:
      for(el of par){
        el.innerHTML = request.txt;
      }
  }
};

chrome.runtime.onMessage.addListener(gotMessage);
