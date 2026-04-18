document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger
const mob = document.getElementById('mobileMenu');

document.getElementById('hamburger').onclick = () => {
    mob.classList.toggle('-translate-y-full');
    mob.classList.toggle('translate-y-0');
};


fetch("links.json")
    .then(response => response.json())
    .then(data => {

        document.querySelectorAll(".loginLink").forEach(el => {
            el.href = data.login;
        });

        document.querySelectorAll(".registerLink").forEach(el => {
            el.href = data.register;
        });

    })
    .catch(error => console.error("Error loading JSON:", error));