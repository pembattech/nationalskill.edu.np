document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger
const mob = document.getElementById('mobileMenu');

document.getElementById('hamburger').onclick = () => {
    mob.classList.toggle('-translate-y-full');
    mob.classList.toggle('translate-y-0');
};
