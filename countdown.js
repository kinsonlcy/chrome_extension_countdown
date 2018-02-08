var timer;
// function settimer()
// {
 clearInterval(timer);

 // var timer_month=document.getElementById("month").value;
 // var timer_day=document.getElementById("day").value;
 // var timer_year=document.getElementById("year").value;
 // var timer_hour=document.getElementById("hour").value;
var today = new Date();
 var timer_month=5;
 var timer_day=6;
 var timer_year=2096;
 var timer_hour=21;

 if(timer_hour=="")timer_hour=0;
 var timer_min=45;
 if(timer_min=="")timer_min=0;
 var timer_sec=0;
 if(timer_sec=="")timer_sec=0;

 var timer_date=timer_month+"/"+timer_day+"/"+timer_year+" "+timer_hour+":"+timer_min+":"+timer_sec;
 var end = new Date(timer_date); // Arrange values in Date Time Format
 var now = new Date(); // Get Current date time
 var millisecond = 1;
 var second = millisecond*1000; // Total Millisecond In One Sec
 var minute = second * 60; // Total Sec In One Min
 var hour = minute * 60; // Total Min In One Hour
 var day = hour * 24; // Total Hour In One Day
 var year = day*365;

 function showtimer() {
  var now = new Date();
  var remain = end - now; // Get The Difference Between Current and entered date time
  if(remain < 0) 
  {
   clearInterval(timer);
   document.getElementById("timer_value").innerHTML = 'Reached!';
   return;
  }
  var years = Math.floor(remain/year);
 // var years = Math.floor(Math.floor(remain/day)/365);
  var days = Math.floor((remain % year)/day); // Get Remaining Days
  
  var hours = Math.floor((remain % day) / hour); // Get Remaining Hours
  var minutes = Math.floor((remain % hour) / minute); // Get Remaining Min
  var seconds = Math.floor((remain % minute) / second); // Get Remaining Sec
  var milliseconds = Math.floor((remain %second)/millisecond);
 
  document.getElementById("timer_value").innerHTML = years + ' yrs ';
  document.getElementById("timer_value").innerHTML += days + ' days ';
  document.getElementById("timer_value").innerHTML += hours + ' hrs ';
  document.getElementById("timer_value").innerHTML += minutes + ' mins ';
  document.getElementById("timer_value").innerHTML += seconds + ' s ';
  document.getElementById("timer_value").innerHTML += milliseconds + ' ms ';
 }
 timer = setInterval(showtimer, 1); // Display Timer In Every 1 Sec
//}