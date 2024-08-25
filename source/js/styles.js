const process = document.querySelector('.training__process');
const steps = process.querySelectorAll('.training__step');

const height = steps[1].offsetHeight + steps[2].offsetHeight + 25*3 + steps[0].offsetHeight;
for (let i = 0; i < steps.length; i++) {
  console.log(steps[i].offsetHeight);
  console.log(height)
}
process.style.setProperty('--line-height', `${height}px`);
process.style.setProperty('--top', `${steps[0].offsetHeight/2}px`)
