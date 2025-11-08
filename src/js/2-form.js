import '../css/styles.css';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  if (event.target.name) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
