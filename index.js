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
  if (12 < hh && hh < 17) {
    return "Good Afternoon";
  }
  if (17 < hh) {
    return "Good Evening";
  }
}

function displayMessage(string){
  let greeting = 
}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>JavaScript Lab</title>
</head>
<body>
  <input type="text" id="time" name="time">
  <input type="button" onclick="handleClick()" value="Submit">
  <h1 id="greeting"></h1>
  <script src="index.js"></script>
</body>
</html>

