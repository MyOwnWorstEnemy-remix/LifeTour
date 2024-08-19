const form = document.querySelector('.form');
const phoneInput = form.querySelector('#phone');
const emailInput = form.querySelector('#email');
const submitButton = form.querySelector('.form__button');

const checkInput = (rules, input) => {
  const inputValue = input.value.trim();
  const checkedInput = inputValue.match(rules);
  if (!checkedInput || checkedInput[0] !== inputValue) {
    input.classList.add('form__text-input--error');
    const inputText = input.nextElementSibling;
    if (inputText.value!='') {
      inputText.style.display = 'none';
    }
    return false;
  }

  input.classList.remove('form__text-input--error');
  return true;
};

const onClickCheck = (evt) => {
  evt.preventDefault();
  const phoneRules = /[^\p{L}]+/gu;
  const emailRules = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|рф)$/;
  const phoneCheckResult = checkInput(phoneRules, phoneInput);
  const emailCheckResult = checkInput(emailRules, emailInput);
  if(emailCheckResult && phoneCheckResult) {
    form.submit();
    phoneInput.value = '';
    emailInput.value = '';
  }
};

submitButton.addEventListener('click', onClickCheck);

emailInput.addEventListener('input', () => {
  emailInput.classList.remove('form__text-input--error');
});

phoneInput.addEventListener('input', () => {
  phoneInput.classList.remove('form__text-input--error');
});
