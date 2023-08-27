import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextArea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
}

function onTextareaInput(e) {
  const message = e.target.value;
  localStorage.setItem('feedback-msg', message);
}

function populateTextArea() {}
