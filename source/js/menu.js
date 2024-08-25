const navigation = document.querySelector('.main-nav');
const toggle = document.querySelector('.main-nav__toggle');
const links = navigation.querySelectorAll('.nav-list__link');

const onToggleClick = () => {
  navigation.classList.toggle('main-nav--opened');
  navigation.classList.toggle('main-nav--closed');
  if(navigation.classList.contains('main-nav--opened')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const onLinkClick = () => {
  navigation.classList.remove('main-nav--opened');
  navigation.classList.add('main-nav--closed');
  document.body.style.overflow = '';
};

// Открытие/закрытие меню при клике на кнопку
toggle.addEventListener('click', onToggleClick);

// Закрытие меню после клика на ссылку
links.forEach((link) => {
  link.addEventListener('click', onLinkClick);
});
