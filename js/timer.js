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

  const remDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const remHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const remMinutes = Math.floor((difference / (1000 * 60)) % 60);
  const remSeconds = Math.floor((difference / 1000) % 60);

  daysElem.innerText = remDays;
  hoursElem.innerText = remHours;
  minutesElem.innerText = remMinutes;
  secondsElem.innerText = remSeconds;
}

setInterval(displayCountdown, 1000);
displayCountdown();
