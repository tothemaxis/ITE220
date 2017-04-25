var shop = {
	customerName: "Max",
	total: 0,
	products: [
		"Brooklyn T-Shirt White", 
		"Brooklyn T-Shirt Black", 
		"Apple Watch", 
		"Android Phone"
	],
	prices: [10,10,199,159],
	displayCustomerName: function() {
		var el = document.getElementById("name");
		el.textContent = this.customerName;
	},
	displayProducts:function(){
		var productsText = "";
		var productsElement = document.getElementById("product-list");
			for(var i = 0; i<this.products.length;i++) {
				productsText += "<li class='list-group-item'><span class='badge'>$"+this.prices[i]+"</span>"+this.products[i]+"</li>";
				this.total += this.prices[i];
			}
	productsElement.innerHTML = productsText;
	var totalPriceElement = document.getElementById("total-price");
	totalPriceElement.textContent = this.total;
	}

};

shop.displayCustomerName();
shop.displayProducts();

// var products = [
// 	"Brooklyn T-Shirt White", 
// 	"Brooklyn T-Shirt Black", 
// 	"Apple Watch", 
// 	"Android Phone"
// ];
// var prices = [10,10,199,159];

// var customerName = "Max";
// var total = 0;
// var customer = document.getElementById("name");
// customer.textContent = customerName;


// var productsText = "";
// var productsElement = document.getElementById("product-list");

// for(var i = 0; i<products.length;i++) {

// 	productsText += "<li class='list-group-item'><span class='badge'>$"+prices[i]+"</span>"+products[i]+"</li>";
// 	total += prices[i];
// }


// productsElement.innerHTML = productsText;

// var totalPriceElement = document.getElementById("total-price");
// totalPriceElement.textContent = total;























