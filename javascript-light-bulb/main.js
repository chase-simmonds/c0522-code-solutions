var $isOn = true;
var $bulb = document.querySelector('.bulb-on');
var $room = document.querySelector('body');

function lightSwitch(event) {
  if ($isOn === true) {
    $bulb.className = 'bulb-on';
    $room.className = 'bright-room';
    $isOn = false;
  } else {
    $bulb.className = 'bulb-off';
    $room.className = 'dark-room';
    $isOn = true;
  }
}

$bulb.addEventListener('click', lightSwitch);
