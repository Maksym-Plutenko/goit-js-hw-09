// flatpickr import
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// notifix import
import Notiflix from 'notiflix';

const daysIndicator = document.querySelector('span[data-days]');
const hoursIndicator = document.querySelector('span[data-hours]');
const minutesIndicator = document.querySelector('span[data-minutes]');
const secondsIndicator = document.querySelector('span[data-seconds]');

const startButton = document.querySelector('button[data-start]');
startButton.disabled = true;

let timerTime;
let timerIntervalId;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const currentDate = new Date();
      const timeDifference = selectedDates[0].getTime() - currentDate.getTime();
      
      if (timeDifference > 0) {
        startButton.disabled = false;
        timerTime = timeDifference;
      } else {
        startButton.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future');
      }
    },
  };
// flatpickr instance cretion
flatpickr('#datetime-picker', options);

startButton.addEventListener('click', startTimer);

function startTimer() {
    startButton.disabled = true;
    timerIntervalId = setInterval(timerIntervalHandler, 1000);
    showTimer(timerTime);
}

function timerIntervalHandler() {
    timerTime -= 1000;
    showTimer(timerTime);

    if (timerTime <= 999) {
        clearInterval(timerIntervalId);
    }
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  function showTimer(time) {
     const timeObj = convertMs(time);
     const { days, hours, minutes, seconds } = timeObj;

     daysIndicator.textContent = addLeadingZero(days);
     hoursIndicator.textContent = addLeadingZero(hours);
     minutesIndicator.textContent = addLeadingZero(minutes);
     secondsIndicator.textContent = addLeadingZero(seconds);
  }

  function addLeadingZero(value) {
    return `${value}`.padStart(2,'0');
  }
