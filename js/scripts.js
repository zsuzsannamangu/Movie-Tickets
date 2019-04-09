function Ticket(movieTitle, timeOfDay, discount) {
  this.movieTitle = movieTitle,
  this.timeOfDay = timeOfDay,
  this.discount = discount
}

var movieTitle = ["Gloria Bell", "Hotel Mumbai", "Us"]
var timeOfDay = ["Before 4PM", "After 4PM"];
var discount = ["Senior", "None"];

Ticket.prototype.priceCalculation = function()  {
  if discount === discount[0] {
    return "Your total is $8."
  } else if timeOfDay === timeOfDay[0] {
    return "Your total is $9."
  } else if movieTitle === movieTitle[0] {
    return "Your total is $12."
  } else {
    return "Your total is $11."
  }
}
//
$(document).ready(function()  {
  $("#btn").submit(function() {
