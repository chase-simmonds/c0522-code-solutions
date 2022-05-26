var $tasklist = document.querySelector('.task-list');

function handleClick(event) {
  console.log('event target is:', event.target);
  console.log('event tagName is:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $taskListItem = event.target.closest('.task-list-item');
    console.log($taskListItem);
    $taskListItem.remove();
  }
}

$tasklist.addEventListener('click', handleClick);
