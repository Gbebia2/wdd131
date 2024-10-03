const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const h1 = document.querySelector('header h1'); // Select the h1

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
    h1.style.opacity = navMenu.classList.contains('show') ? '0' : '1';
});
