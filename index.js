

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');



// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

function correctTime(seconds){
  const correctSeconds = seconds % 60;
  const allMinutes = Math.floor(seconds / 60);
  const correctMinutes = allMinutes % 60;
  const correctHours = Math.floor(allMinutes / 60);

  return `${correctHours >= 10 ? correctHours : '0'+correctHours} часа ${correctMinutes >= 10 ? correctMinutes : '0'+correctMinutes} минут ${correctSeconds >= 10 ?  correctSeconds : '0'+correctSeconds} секунд`
  }


const createTimerAnimator = () => {
  return (seconds) => {
    let secondsForTimer = seconds;
    setInterval(() => {
    if (secondsForTimer >= 0) {
      timerEl.innerText = correctTime(secondsForTimer)
      secondsForTimer--
    }else{}},1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  console.log(seconds)
  animateTimer(seconds);

  inputEl.value = '';
});
