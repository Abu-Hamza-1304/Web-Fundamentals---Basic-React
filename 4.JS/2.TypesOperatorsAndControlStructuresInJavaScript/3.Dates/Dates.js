"use strict";

var time = new Date();
// Date() gives day, date, month, year and time along with timezone.
console.log("Current time: \n", time);

time = new Date(2022, 3, 27, 13, 2, 10);
console.log("Year, Month, Day, Hour, Minute, Seconds :\n", time);

time = new Date("March 27, 2022");
console.log("Initialized with a date string: \n", time);

time = new Date("2022-03-27");
console.log("Initialized with (yyyy-mm-dd): \n", time);

time = new Date();
console.log("Current time in my timezone: ", time);

console.log("My timezone offset in minutes: ", time.getTimezoneOffset());
console.log("The UTC time is: ", time.toUTCString());