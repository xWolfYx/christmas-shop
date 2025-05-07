// timer
function countdownTimer() {
  // gets the target date in UTC + 0
  const targetDate = new Date(
    Date.UTC(new Date().getUTCFullYear() + 1, 0, 1, 0, 0, 0),
  );

  const currentTime = new Date();
  const difference = targetDate - currentTime;

  // calculates difference in days, hours, minutes and seconds based
  // on milliseconds
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // calculates the remaining time
  const remDays = days;
  const remHours = hours % 24;
  const remMinutes = minutes % 60;
  const remSeconds = seconds % 60;

  // output
  document.getElementById("days").innerText = remDays;
  document.getElementById("hours").innerText = remHours;
  document.getElementById("minutes").innerText = remMinutes;
  document.getElementById("seconds").innerText = remSeconds;
}
// timer refresher
const countDown = setInterval(countdownTimer, 1000);
// function call added for the timer to not start at default values
countdownTimer();
