const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


let hour = 00;
let minute = 00;
let second = 00;


inputEl.addEventListener('input', () => {
  if( inputEl.value.match(/^\d+$/)){
    inputEl.value=inputEl.value;
  }else{
    inputEl.value='';
  }
});
   
buttonEl.addEventListener('click', () => {
  var fiveMinutes = inputEl.value;
startTimer(fiveMinutes,timerEl );
});

function startTimer(duration,timerEl ) {
  var timer = duration, hour, minutes, seconds;
  setInterval(function () {
      hour = parseInt((timer/ 60 )/ 60, 10);
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      hour = hour < 10 ? "0" + hour : hour;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

     timerEl .textContent = hour + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}