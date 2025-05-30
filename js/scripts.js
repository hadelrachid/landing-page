 // Menu Mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Menu Flutuante
const floatingBtn = document.getElementById('floatingBtn');
const floatingMenuContent = document.getElementById('floatingMenuContent');

floatingBtn.addEventListener('click', () => {
    floatingMenuContent.classList.toggle('show');
});

// Fechar menu flutuante ao clicar fora
document.addEventListener('click', (e) => {
    if (!floatingBtn.contains(e.target) && !floatingMenuContent.contains(e.target)) {
        floatingMenuContent.classList.remove('show');
    }
});