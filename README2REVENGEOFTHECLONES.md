## Acceptance Criteria

```md
WHEN I open the planner
JS Needed
a function that checks if the $(document) is READY to open from jQUERY





--------THEN the current day is displayed at the top of the calendar----------------
---HTML ELEMENTS NEEDED (minimum) ---
A <div> or <h1> to <h6> element with an id that can be selected by the $() jQuery selector

---JS NEEDED ---
A function that uses moment.format() to get a text version of the date to add to the appropriate html element
ex: 
function getCurrentTime() {
    const currentTime = moment.format();
    $('#IDFORANELEMENTICREATEDTODISPLAYTHECURRENTTIME').???(currentTime)
}

--- CSS NEEDED ---
Style the above element





WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

---EXTRA REFERENCES---
https://momentjs.com/docs/#/displaying/
https://api.jquery.com/each/
https://api.jquery.com/addclass/
https://api.jquery.com/removeclass/

--- HTML Elements NEEDED ---
<div> that acts as a container for all the events
<div>'s for each hours of the day

--- JS Needed ---
Function that gets ALL events in localStorage


--- CSS Needed ---
Style the schedule so that it appears on screen in nice, neat ROWS with the content inside taking up the appropriate amount of COLUMN space.

3 classes that have a specific color attached to that class. (past, present, future)

ex: .past {
    background-color: red
}






WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
---EXTRA REFERENCES---
https://stackoverflow.com/questions/18966222/jquery-each-and-attaching-click-event
^^ Check out this link to see how to attach one click event to multiple html elements based on their class.

--- HTML ELEMENT ---
<div> with a common class for all timeblocks. maybe <div class="timeblock">
ex: <div class="timeblock"> 
<div> EVENT INFORMATION </div>
</div>

--- JS NEEDED ===
you can manually add $('#hour-1').click(function() {}); for each of the 8 hrs of the day. You would need to add an id for each timeblock that is unique.
 $('#hour-1').click(function(event) {
     event.preventDefault();
     // Get typed in value. Lots of ways to do this.
     event.target.value, text Content etc
     const eventInfo = {
         description: ???,
         timeOfDay: ???
     }
     // Save in localStorage
     localStorage.setItem('???', ???);
     don't forget about JSON.stringify and JSON.parse. Should you store all events in an array?
 });





WHEN I refresh the page
THEN the saved events persist
a function that runs when the page loads can look like this
--- JS NEEDED ===
function init() {
    let allEvents = [];

    if (???SOMETHING IS IN LOCALSTORAGE AND I PARSE IT SINCE I PROBABLY STRINGIFIED IT???) {
        ??????
    }


}
 ```