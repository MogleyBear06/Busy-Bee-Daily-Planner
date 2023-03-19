// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

document.addEventListener('DOMContentLoaded',function () {
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format("dddd, MMMM D YYYY");

  document.getElementById("currentDay").textContent = currentDate;

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn" ).click(function() {
    alert( "Handler for .click() called." );

    // the following sets the variable for description. 
    // 'this' points to the 'siblings' elements (siblings becasue there
    // are more than one html element within the time block) and .description
    // in the parenthesis because it's an ID and description is what we're targeting
    // we use .val because we're grabbing text.
    var description = $(this).siblings('.description').val()

    // the following sets the variable for the hour.
    // 'this' points the parent element (there's only one parent element so its not plural)
    // and .attr because we're targeting the id and because its a parent attribute 
    // 'id' is inserted in the parenthesis because that's what we want specifically
    var hour = $(this).parent().attr('id')
    // this saves data to local storage. hour referes to the key and description refers to the value
    // we're targeting within the key.
    localStorage.setItem(hour, description);
    console.log(hour)
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    
  function timeBlock() {
    // loop over time blocks using .each function
    //
    $(".time-block").each(function () {
    //
      var hour = parseInt($(this).siblings(".hour").text().split(" ")[0]);

    // get the current hour using day.js
    var currentHour = dayjs().hour();

    //
    var timeBlockId = $(this).attr("id");

    //
    if (hour < currentHour) {
      $(this).find(".description").addClass("past");
    } else if (hour === currentHour) {
      $(this).find(".description").addClass("present");
    } else {
      $(this).find(".description").addClass("future");
    }

    $(this).find(".description").removeClass("past present future").addClass(getTimeClass(timeBlockId, currentHour));
    function getTimeClass(timeBlockId, currentHour) {
      var hour = parseInt(timeBlockId.split("-")[1]);
    
      if (hour < currentHour) {
        return "past";
      } else if (hour === currentHour) {
        return "present";
      } else {
        return "future";
      }
    }
    console.log(currentHour);
  });
}
timeBlock();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

})
