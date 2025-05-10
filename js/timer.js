function countdownTimer() {
  const targetDate = new Date(
    Date.UTC(new Date().getUTCFullYear() + 1, 0, 1, 0, 0, 0)
  );

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

  document.getElementById("days").innerText = remDays;
  document.getElementById("hours").innerText = remHours;
  document.getElementById("minutes").innerText = remMinutes;
  document.getElementById("seconds").innerText = remSeconds;
}
const countDown = setInterval(countdownTimer, 1000);
countdownTimer();
