var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow> 18){
    greeting = 'Good Evening';
}
else if (hourNow> 12){
    greeting = 'Good Afternoon';
}
else if (hourNow> 0){
    greeting = 'Good Morning';
}
else {
    greeting = 'Welcome';
}
// console.log(greeting);
// document.write('<h3>' + greeting + '</h3>');

var price;
var quantity;
var total;

price = 10;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;


function changeText(){
    var newMsg = "Hey, you have changed this text with the JS custom function changeText() :)";
    var el = document.getElementById('js');
    el.textContent = newMsg;
}
