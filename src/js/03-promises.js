function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promiseInfo = { position, delay };

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(promiseInfo);
      } else {
        reject(promiseInfo);
      }
    }, delay);
  });

  return promise;
}

import Notiflix from 'notiflix';

const firstDelayInput = document.querySelector('input[name="delay"]');
const delayStepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const form = document.querySelector('form');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const amountOfPromises = Number(amountInput.value);
  const firstDelay = Number(firstDelayInput.value);
  const delayStep = Number(delayStepInput.value);

  for (let i = 0; i < amountOfPromises; i += 1) {
    const currentDelay = firstDelay + i * delayStep;
    promiseHandler(i+1, currentDelay);
  }

  amountInput.value = '';
  firstDelayInput.value = '';
  delayStepInput.value = '';
}

function promiseHandler(position, delay) {
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
