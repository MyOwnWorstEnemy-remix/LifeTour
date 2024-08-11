const navigation = document.querySelector('.main-nav');
const toggle = document.querySelector('.main-nav__toggle');

toggle.addEventListener('click', () => {
  navigation.classList.toggle('main-nav--opened');
  navigation.classList.toggle('main-nav--closed');
  if(navigation.classList.contains('main-nav--opened')) {
    document.body.style.overflow = 'hidden';
  }
  else {
    document.body.style.overflow = '';
  }
});
