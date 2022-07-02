function calculateSalePrice() {
	var itemPrice = document.getElementsByClassName("item-price")[0].value;

	var salePercentage = parseFloat(
		document.getElementsByClassName("percentages")[0].value
	);
	console.log(salePercentage);

	if (itemPrice === "") {
		window.alert("Please enter the price of the item!");
		return;
	}

	var total = itemPrice - itemPrice * salePercentage;

	var salePriceHTML = document.getElementById("sale-price");
	var finalSalePrice = document.createTextNode(total.toString());
	salePriceHTML.appendChild(finalSalePrice);
	return;
}

document.getElementById("btn").onclick = function () {
	calculateSalePrice();
};
