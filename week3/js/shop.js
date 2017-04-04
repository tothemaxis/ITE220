var customerName;
var price;
var quantity;
var total;

customerName = "Max";
price = 5;
quantity = 14;
total = price*quantity;


//document.write("Total is "+total);

// var h3 = document.getElementById("total");
// h3.textContent ="is "+ total;

var customer = document.getElementById("custName");
customer.textContent = customerName + "!";
var totalPrice = document.getElementById("totPrice");
totalPrice.textContent = "$"+total;