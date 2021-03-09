

let today = moment(); // Current day's date
$("#currentDay").text(today.format("dddd, MMMM, Do")); // Displays the current date in the header with the proper format from momentjs
