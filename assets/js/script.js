// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    
    // Applies past, present, future class based on each time

    var currentHour = dayjs().hour;
  
    if (currentHour === 9) {
      $('#hour-9').addClass('present');
      $('#hour-10, #hour-11, #hour-12, #hour-1, #hour-2, #hour-3, #hour-4, #hour-5').addClass('future');
    } else if (currentHour === 10){
      $('#hour-9').addClass('past');
      $('#hour-10').addClass('present');
      $('#hour-11, #hour-12, #hour-1, #hour-2, #hour-3, #hour-4, #hour-5').addClass('future');
    } else if (currentHour === 11){
      $('#hour-9, #hour-10').addClass('past');
      $('#hour-11').addClass('present');
      $('#hour-12, #hour-1, #hour-2, #hour-3, #hour-4, #hour-5').addClass('future');
    } else if (currentHour === 12){
      $('#hour-9, #hour-10, #hour-11').addClass('past');
      $('#hour-12').addClass('present');
      $('#hour-1, #hour-2, #hour-3, #hour-4, #hour-5').addClass('future');
    } else if (currentHour === 1){
      $('#hour-9, #hour-10, #hour-11, #hour-12').addClass('past');
      $('#hour-1').addClass('present');
      $('#hour-2, #hour-3, #hour-4, #hour-5').addClass('future');
    } else if (currentHour === 2){
      $('#hour-9, #hour-10, #hour-11, #hour-12, #hour-1').addClass('past');
      $('#hour-2').addClass('present');
      $('#hour-3, #hour-4, #hour-5').addClass('future');
    } else if (currentHour === 3){
      $('#hour-9, #hour-10, #hour-11, #hour-12, #hour-1, #hour-2').addClass('past');
      $('#hour-3').addClass('present');
      $('#hour-4, #hour-5').addClass('future');
    } else if (currentHour === 4){
      $('#hour-9, #hour-10, #hour-11, #hour-12, #hour-1, #hour-2, #hour-3').addClass('past');
      $('#hour-4').addClass('present');
      $('#hour-5').addClass('future');
    } else if (currentHour === 5){
      $('#hour-9, #hour-10, #hour-11, #hour-12, #hour-1, #hour-2, #hour-3, #hour-4').addClass('past');
      $('#hour-5').addClass('present');
    } else {
      $('#hour-9, #hour-10, #hour-11, #hour-12, #hour-1, #hour-2, #hour-3, #hour-4, #hour-5').addClass('future');
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // Display's the current date in the header of the page.
    
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D'));
  });
  