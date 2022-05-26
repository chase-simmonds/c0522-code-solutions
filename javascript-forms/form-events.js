function handleFocus(event) {
  console.log('The focus event was fired');
  console.log('The focus target name is:', event.target.name);
}

function handleBlur(event) {
  console.log('The blur event was fired');
  console.log('The blur target name is:', event.target.name);
}

function handleInput(event) {
  console.log('The input target name is:', event.target.name);
  console.log('The input event target value is:', event.target.value);
}

var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
