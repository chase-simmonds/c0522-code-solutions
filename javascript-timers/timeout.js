var $h1 = document.querySelector('.message');

function changeMessage() {
  $h1.textContent = 'Hello There';
}

setTimeout(changeMessage, 5000);
