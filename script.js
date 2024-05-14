function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

window.addEventListener("load", function () {
	setTimeout(function () {
		document.querySelector(".loader-wrapper").style.display = "none";
		document.querySelector(".content").classList.remove("hidden");
	}, 2200);
});

document.addEventListener("DOMContentLoaded", function () {
	// Add 'show' class to nav-links after a delay
	setTimeout(function () {
		document.querySelector(".nav-links").classList.add("show");
	}, 2500); // Adjust the delay time as needed
});
