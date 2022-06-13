'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  const date = new Date();
  const time = date.toLocaleTimeString('it-IT');
  paragraph.textContent = `The time now is: ${time}`;
  console.clear();
  console.log(`The time now is: ${time}`);

  return time;
}

const paragraph = document.createElement('p');
paragraph.style.fontSize = '20px';
document.body.appendChild(paragraph);

window.addEventListener('load', function () {
  setInterval(addCurrentTime, 1000);
});
