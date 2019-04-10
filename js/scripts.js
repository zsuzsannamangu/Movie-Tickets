function Ticket(movieTitle, timeOfDay, discount) {
  this.movieTitle = movieTitle;
  this.timeOfDay = timeOfDay;
  this.discount = discount;

}
Ticket.prototype.movies = { //this.movies =
  "Gloria Bell": 12,
  "US": 13
}

Ticket.prototype.times = {
  "Before 4PM": 9
}

Ticket.prototype.discounts = {
  "Senior": 8,
  "Student": 7
}

Ticket.prototype.priceCalculation = function()  {
  var price = 11; // the standard price
  // special discounts
  if (this.discount in this.discounts){
    price = this.discounts[this.discount]
  }
  // generic discounts
  else if (this.timeOfDay in this.times){
    price = this.times[this.timeOfDay]
  }
  // movie price
  else if (this.movieTitle in this.movies){
    price = this.movies[this.movieTitle]
  }
  // standard price
  return price
}

var ticket1 = new Ticket("Gloria Bell", "Before 4PM", "Student") //$9
// var ticket2 = new Ticket("Gloria Bell", "Before 4PM", "Senior") //$8
// var ticket3 = new Ticket("Gloria Bell", "After 4PM", "None") //$12
// var ticket4 = new Ticket("Hotel Mumbai", "Before 4PM", "None") //$9
// var ticket5 = new Ticket("Hotel Mumbai", "After 4PM", "Senior") //$8
// var ticket6 = new Ticket("Hotel Mumbai", "After 4PM", "None") //$11
// var ticket7 = new Ticket("US", "After 4PM", "None") //$11
//
// console.log(ticket1.movieTitle)
// console.log(ticket1.priceCalculation())
// console.log(ticket2.movieTitle)
// console.log(ticket2.priceCalculation())
// console.log(ticket6.movieTitle)
// console.log(ticket6.priceCalculation())
// console.log(ticket7.movieTitle)
// console.log(ticket7.priceCalculation())


$(document).ready(function()  {
  $(".btn").click(function() {
    var ticket = new Ticket(
      $("#movieTitle").val(),
      $("#timeOfDay").val(),
      $("#discount").val()
    )
    var price = ticket.priceCalculation();


    $(".price").text(price);
    $(".answer").show();
    console.log(ticket.movieTitle)
    console.log(ticket.priceCalculation())
  });
});
