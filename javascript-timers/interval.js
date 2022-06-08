var $countdownDisplay = document.querySelector('.countdown-display');
var count = 4;
var countdownId = null;

function countdown() {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownId);
  }
}

countdownId = setInterval(countdown, 1000);
