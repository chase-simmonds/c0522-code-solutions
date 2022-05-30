var $span = document.querySelectorAll('span');
var typeCount = 0;

function typingTutor(event) {
  if ($span[typeCount].textContent === event.key) {
    ++typeCount;
    $span[typeCount - 1].className = 'correct';
    $span[typeCount].className = 'underline';
  } else if ($span[typeCount] !== event.key) {
    $span[typeCount].className = 'wrong';
  }
}

document.addEventListener('keydown', typingTutor);
