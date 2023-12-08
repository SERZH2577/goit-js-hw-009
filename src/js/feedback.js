const feedbackFormRef = document.querySelector('.feedback-form');
const btnRef = document.querySelector('.feedback-form button');

feedbackFormRef.addEventListener('input', onAddsDataToLocalStorage);
btnRef.addEventListener('click', onSubmitsDataAndClearsForm);

const formData = {
  email: '',
  message: '',
};

fillsFormFromLocalStorage(feedbackFormRef);

function onAddsDataToLocalStorage(e) {
  if (e.target.name === 'email') formData.email = e.target.value;

  if (e.target.name === 'message') formData.message = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitsDataAndClearsForm(e) {
  e.preventDefault();

  if (formData.email !== '' && formData.message !== '') {
    feedbackFormRef.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
  }
}

function fillsFormFromLocalStorage(form) {
  const savedSettings = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedSettings !== null) {
    formData.email = savedSettings.email;
    formData.message = savedSettings.message;

    form[0].value = savedSettings.email;
    form[1].value = savedSettings.message;
  } else {
    formData.email = '';
    formData.message = '';
  }
}
