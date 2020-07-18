src="{% static 'bus/js/map_init.js' %}"

// Author: Stacy 

// This JQuery Function creates the date and time picker as well as limits the dates selectable by having the minimum date always be today.


$(document).ready(function () {
  var today = new Date();
  var end = moment(today).add(6, 'M');
    $('#datetimepicker4').datetimepicker({
        minDate: today,
        maxDate: end,
        format: 'DD/MM/YY LT',
        date: moment(),
        icons:{
          time:'far fa-clock',
          date: 'fa fa-calendar',
	      	up: 'fa fa-angle-up',
		      down: 'fa fa-angle-down',
		      previous: 'fa fa-angle-left',
		      next: 'fa fa-angle-right',
		      today: 'fa fa-dot-circle-o',
		      clear: 'fa fa-trash',
		      close: 'fa fa-times'
          }
});
});
// This Jquery function should change the text on the show/hide menu button when pressed 

  $("#JP-btn").click(function(e){
    e.preventDefault(); //prevents the need to double click
    $('#floating-panel').toggle();
    if($('#floating-panel').is(':visible')) {
        $(this).html('Hide Planner');
    } else {
        $(this).html('Show Planner');
    }
});
$("#BS-btn").click(function(e){
  e.preventDefault(); //prevents the need to double click
  $('#searchStopNumber').toggle();
  if($('#searchStopNumber').is(':visible')) {
      $(this).html('Hide Search');
  } else {
      $(this).html('Show Search');
  }
});
// This function takes the values entered into the intputs on the index page and re prints them out. 
function stepListBuilder() {
  for (i=0; i < stepList.length; i++ && counter <= stepList.length){
    text += "<li class='list-group-item'>" + "<span class='badge badge-primary badge-pill'>" + "Step: " + counter +  "</span>" + " " + stepList[i] + " " + "(Duration: " + durationList[i] + ")" + "</li>";
    counter += 1;
    text += "</ul>";
    }
}
function myFunction() {
  text = [] //start with an empty list each time
  counter = 1; //start with counter at 1 each time
  var input1 = document.getElementById("searchTextField_start").value;
  var input2 = document.getElementById("searchTextField_destination").value;
  stepListBuilder();
  document.getElementById("test").innerHTML = text;
  document.getElementById("test1").innerHTML = " Start: " + input1; 
  document.getElementById("test2").innerHTML = " Destination: " + input2;

}

  // Below is the code for the direction planner
  //first we show the planner
    $('#submit-btn').click(function(){
      $('#directions').show({
        bottom: '-300px',
        height:'400px',
        position: 'absolute',
      });
    });
    //then we can close the planner
   $("#close").click(function(){
      $("#directions").hide();
    });
    //then we can animate the planner each time!
    $('#submit-btn').click(function() {
      $('#directions').animate({
        bottom: '-300px',
        height: '400px',
        position: 'absolute',
      });
    });
