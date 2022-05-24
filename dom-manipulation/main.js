var $userClicks = 0;
var $button = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function countUp(event) {
  ++$userClicks;
  $clickCount.textContent = 'Clicks: ' + $userClicks;
  if ($userClicks < 4) {
    $button.className = 'hot-button cold';
  } else if ($userClicks < 7) {
    $button.className = 'hot-button cool';
  } else if ($userClicks < 10) {
    $button.className = 'hot-button tepid';
  } else if ($userClicks < 13) {
    $button.className = 'hot-button warm';
  } else if ($userClicks < 16) {
    $button.className = 'hot-button hot';
  } else {
    $button.className = 'hot-button nuclear';
  }
}

$button.addEventListener('click', countUp);
