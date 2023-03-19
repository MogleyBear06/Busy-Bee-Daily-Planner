
document.addEventListener('DOMContentLoaded',function () {
  var currentDate = dayjs().format("dddd, MMMM D YYYY");
  document.getElementById("currentDay").textContent = currentDate;
  $(".saveBtn" ).click(function() {
    alert( "Handler for .click() called." );
    var description = $(this).siblings('.description').val()
    var hour = $(this).parent().attr('id')
    localStorage.setItem(hour, description);
    var hour = localStorage.getItem("hour");
    
  });

  function timeBlock() {
    $(".time-block").each(function () {
    
    var hour = parseInt($(this).siblings(".hour").text().split(" ")[0]);
    var currentHour = dayjs().hour();
    var timeBlockId = $(this).attr("id");

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
    
  });
}
timeBlock();

})
