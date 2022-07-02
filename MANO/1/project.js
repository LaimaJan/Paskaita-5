let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menu.onclick = () => {
	menu.classList.toggle("fa-times"); //changes the 3 bars (menu) to cancel sign
	navbar.classList.toggle("active"); //while media is 768px, the menu bar rolls down from the navbar when menu is pressed
};

window.onscroll = () => {
	menu.classList.remove("fa-times"); //changes the 3 bars (menu) to cancel sign
	navbar.classList.remove("active"); //while media is 768px, the menu bar rolls down from the navbar when menu is pressed
};
