var $userClicks = 0;
var $bulb = document.querySelector('.bulb');
var $room = document.querySelector('body');

function lightSwitch(event) {
  ++$userClicks;
  if ($userClicks % 2 === 0) {
    $bulb.className = 'bulb';
    $room.className = 'bright-room';
  } else {
    $bulb.className = 'bulb-off';
    $room.className = 'dark-room';
  }
}

$bulb.addEventListener('click', lightSwitch);
