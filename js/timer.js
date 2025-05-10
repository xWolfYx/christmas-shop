const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const targetDate = new Date(
  Date.UTC(new Date().getUTCFullYear() + 1, 0, 1, 0, 0, 0)
);

function displayCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remDays = days;
  const remHours = hours % 24;
  const remMinutes = minutes % 60;
  const remSeconds = seconds % 60;

  daysElem.innerText = remDays;
  hoursElem.innerText = remHours;
  minutesElem.innerText = remMinutes;
  secondsElem.innerText = remSeconds;
}

setInterval(displayCountdown, 1000);
displayCountdown();
