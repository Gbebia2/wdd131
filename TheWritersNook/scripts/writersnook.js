document.addEventListener("DOMContentLoaded", function() {

    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;


    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent += lastModified;
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            localStorage.setItem("contactForm", JSON.stringify({ name, email, message }));
            responseMessage.textContent = "Thank you for your message, " + name + "! We'll get back to you soon.";
            responseMessage.style.color = "#4A90E2";
            form.reset();
        } else {
            responseMessage.textContent = "Please fill in all fields.";
            responseMessage.style.color = "red";
        }
    });
});
