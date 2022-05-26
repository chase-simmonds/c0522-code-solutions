var $contactForm = document.querySelector('#contact-form');

function userSubmit(event) {
  event.preventDefault();
  var $formData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('the form data is:', $formData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', userSubmit);
