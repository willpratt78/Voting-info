$(document).ready(function() {
  var age=parseInt(prompt("How old are you?"));

  if (age >=18) {
    $('#can-vote').show();
  } else {
    $('#cant-vote').show();
  }
});