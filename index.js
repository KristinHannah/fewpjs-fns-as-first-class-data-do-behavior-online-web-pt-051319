/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  let time_array = time.split(":");
  let hh = parseInt(time_array[0]);
  let mm = parseInt(time_array[1]);
  if (hh <= 12){
    return "Good Morning";
  }
  if (12 < hh < 17) {
    return "Good Afternoon";
  }
  if (hh > 17) {
    return "Good Evening";
  }
}
