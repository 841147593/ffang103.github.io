	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic:true,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic:true,
		price: 10.00
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic:false,
		price: 30.00
	},
	{
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic:false,
		price: 15.00
	},
	{
		name: "lamb",
		vegetarian: false,
		glutenFree: true,
		organic:false,
		price: 25.00
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 5.00
	},
	{
		name: "watermelon",
		vegetarian: true,
		glutenFree: true,
		organic:false,
		price: 9.99
	},
	{
		name: "lemon",
		vegetarian: true,
		glutenFree: true,
		organic:false,
		price: 3.00
	},
	{
		name: "mango",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 8.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let flag=true;
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push([prods[i].name," $",prods[i].price]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name," $",prods[i].price]);
		}
		else if ((restriction == "Vegetarian_and_GlutenFree") && (prods[i].glutenFree == true)&& (prods[i].vegetarian == true)){
			product_names.push([prods[i].name," $",prods[i].price]);
		}
		else if (restriction == "Organic"&&(prods[i].organic == true)){
			product_names.push([prods[i].name," $",prods[i].price]);
		}
		else if (restriction == "None"){
			product_names.push([prods[i].name," $",prods[i].price]);
		}
	}
	//inspired by https://www.w3schools.com/jsref/jsref_sort.asp
	product_names.sort(function(a, b){return a[2]-b[2]});
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
