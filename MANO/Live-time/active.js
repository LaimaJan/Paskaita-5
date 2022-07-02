function myFunction() {
	const weekday = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	let d = new Date();
	let day = weekday[d.getDay()];
	document.getElementById("demo").innerHTML = `Today is : ${day}.`;
	document.getElementById("demo1").innerHTML =
		`Current time is : ` +
		d.getHours() +
		" PM " +
		": " +
		d.getMinutes() +
		" : " +
		d.getSeconds();
}

setInterval(myFunction, 1000);
