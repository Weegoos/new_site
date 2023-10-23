// var

let timer = document.getElementById('timeLeft');
let start_timer = document.querySelector('#start_timer')
let hours_input = document.querySelector('.hours_input')
let min_input = document.querySelector('.min_input')
let sec_input = document.querySelector('.sec_input')
let edit_timer = document.querySelector('.edit_timer')
let set_time = document.querySelector('.set_time')
let audio = document.querySelector('.audio')
let close_btn = document.querySelector('.close_btn')

// storage
let hours_local = localStorage.getItem('hours')
let minute_local = localStorage.getItem('minute')
let sec_local = localStorage.getItem('sec')
console.log(hours_local);

// The formula for determining how many seconds are left
let timeLeft = ((hours_local * 3600) + (minute_local * 60) + (sec_local * 1))
console.log(timeLeft);
function isTimeLeft() {
  return timeLeft >= 0;
}

// the function that is responsible for the timer operation
function runTimer(timerElement) {
	const timerCircle = timerElement.querySelector('svg > circle + circle');
  // adding animation via css
	timerElement.classList.add('animatable');
	timerCircle.style.strokeDashoffset = 1;
    
	let countdownTimer = setInterval(function(){
		if(isTimeLeft()){
			const timeRemaining = timeLeft--;
			const normalizedTime = (((hours_local * 3600) + (minute_local * 60) + (sec_local * 1)) - timeRemaining) / ((hours_local * 3600) + (minute_local * 60) + sec_local);

			timerCircle.style.strokeDashoffset = normalizedTime;
      timer.innerHTML = timeRemaining;
      if (timeRemaining == 0){
        document.querySelector('#alert_finish').setAttribute('style', 'display: block')
        timer.innerHTML = "Finish"
      }
		} else {
			clearInterval(countdownTimer);
			timerElement.classList.remove('animatable');
		}  
	}, 1000);
}

// adds a message that the time is up
document.querySelector('#alert_finish').onmouseenter = () =>{
  document.querySelector('#alert_finish').setAttribute('style', 'display: none')
}

// tab for changing the time in the timer
edit_timer.onclick = function(){
  set_time.setAttribute('style', 'display: flex')
}

// the button is responsible for closing the tab to change the time in the page
close_btn.onclick = () =>{
  set_time.setAttribute('style', 'display: none')

}

// adding user interaction
start_timer.onclick = function (){
  if (hours_input.value > 0 && hours_input.value <= 99){
    localStorage.setItem('hours', hours_input.value)
    location.reload()
    set_time.setAttribute('style', 'display: none')
  }
  if (min_input.value > 0 && min_input.value <= 59){
    localStorage.setItem('minute', min_input.value)
    location.reload()
    set_time.setAttribute('style', 'display: none')
  }

  if (sec_input.value > 0 && sec_input.value < 60){
    localStorage.setItem('sec', sec_input.value)
    location.reload()
    set_time.setAttribute('style', 'display: none')
  }
  // message about incorrect field filling
  if (sec_input.value > 59 || min_input.value > 59 || hours_input.value > 99){
    console.log("vse");
    document.querySelector('#danger_alert').setAttribute('style', 'display: flex')
  }
}
document.querySelector('#danger_alert').onmouseenter = () => {
  document.querySelector('#danger_alert').setAttribute('style', 'display: none')
}


runTimer(document.querySelector('.timer'));