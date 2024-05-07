/* MENU */

const menu = document.querySelector(".header__menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
	btn.addEventListener("click", () => {
		menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
	});
});

menu.addEventListener("transitionend", function() {
	this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > .menu__arrow").forEach((arrow) => {
	arrow.addEventListener("click", function() {
        this.closest(".dropdown").classList.toggle("active");
    });
});


/**
 * Change Header color after scroll 
 */
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector(".header");
        if (header && window.scrollY > 70) {
            header.classList.add("header--active");
        } else if (header) {
            header.classList.remove("header--active");
        }
    });
});


document.addEventListener("click", function(e) {
    const targetElement = e.target;

	if (targetElement.closest('.open-menu-btn')) {
		document.documentElement.classList.toggle('menu-open');
	}
    
    if (targetElement.closest('.close-menu-btn')) {
		document.documentElement.classList.remove('menu-open');
	}
});