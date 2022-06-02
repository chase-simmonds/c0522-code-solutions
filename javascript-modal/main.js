var $openButton = document.querySelector('.open-button');
var $noButton = document.querySelector('.no-button');
var $modal = document.querySelector('.hide-modal');

function openModal(event) {
  $modal.className = 'modal show-modal';
}

function closeModal(event) {
  $modal.className = 'modal hide-modal';
}

$openButton.addEventListener('click', openModal);
$noButton.addEventListener('click', closeModal);
