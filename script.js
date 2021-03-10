
let today = moment(); // Current day's date
$("#currentDay").text(today.format("dddd, MMMM, Do")); // Displays the current date in the header with the proper format from momentjs

$('.saveBtn').on('click', function () { //saves user input for each time block
    //local storage stays in text area until user clicks save, and saves something else
    let saveButton =$(this);//save whatever user inputs, in whichever time block, with "this"

    let textarea = saveButton.siblings("textarea") //when save button is clicked, siblings in text area class are saved

    let userInput = textarea.val() //saves the user input as a value

    let timeBlock = textarea.attr('id'); // assigns timeBlock to the 'id' for each time

    localStorage.setItem(timeBlock, userInput); //sets the users input, at each time block, to save in local storage, to be grabbed later

});

$("textarea").each(function () { //for each element with the text area class, run this function
    
    let hour = moment().hours();//use moment to set the current hour
    let time = $(this).attr("id")// set "this" as time, so that whichever timeblock the user selects, is that specific time

   if (time < hour) { //when time block that is less than the current hour detected by moment, then:
    $(this).addClass('past');//add the class 'past' to keep the background the same color
    $(this).removeClass('present');//remove the class 'present' to keep the background from being red
    $(this).removeClass('future');//remove the class 'future' to keep the background from being green
   }else if (time > hour) {//when time block is greater than the current hour detected by moment, then:
    $(this).addClass('future');//add the class 'future' to change background to green
    $(this).removeClass('present');//remove class 'present' to keep background green
    $(this).removeClass('past');//remove class 'past' to keep background green
   }else { //when time block is in the present hour detected by moment
    $(this).addClass('present');//add the class 'present' to make the background color red
    $(this).removeClass('past');// remove class to 'past' to keep background color red
    $(this).removeClass('future');// remove class to 'future' to keep background color red
   }
   
});

//for #9-#18, take what the user saved in the selected time block, 
//and make sure local storage overides that time block with what user saved any time the page is refreshed
$("#9").val(localStorage.getItem("9"));

$("#10").val(localStorage.getItem("10"));

$("#11").val(localStorage.getItem("11"));

$("#12").val(localStorage.getItem("12"));

$("#13").val(localStorage.getItem("13"));

$("#14").val(localStorage.getItem("15"));

$("#16").val(localStorage.getItem("16"));

$("#17").val(localStorage.getItem("17"));

$("#18").val(localStorage.getItem("18"));
