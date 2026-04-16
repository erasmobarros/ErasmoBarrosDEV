// Inicializa os ícones do Lucide no carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});

// Efeito na Barra de Navegação ao fazer Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    // Se o usuário rolou mais de 50px do topo, a navbar ganha sombras e mais opacidade
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 10px -2px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid var(--color-border)';
    }
});

// Suave rolagem (Smooth Script) para links âncoras na mesma página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Desconta o tamanho da navbar para não sobrepor o título (aprox 80px a 90px)
            const yOffset = -90; 
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
                top: y, 
                behavior: 'smooth'
            });
        }
    });
});
