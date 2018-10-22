$(document).ready(function(){
$("#inputform").submit(function(event){
  event.preventDefault();
var favtours=$("#favts").val();
var favcandy=$("#candy").val();
var favfood=$("#food").val();
// console.log(favtours,favcandy,favfood);
var favthings=[favtours,favcandy,favfood];
console.log(favthings[2]);
var favorite = favthings.slice();
favorite.push("cars");
console.log(favorite);

$("#display").append("<li>" + favtours + "</li>");
$("#display").append("<li>" + favcandy + "</li>");
$("#display").append("<li>" + favfood + "</li>");

});
});
