// Бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const headerContainer = document.querySelector('header .container');
    if (headerContainer) {
        headerContainer.appendChild(menuToggle);
        
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('nav').classList.toggle('active');
        });
    }
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.menu-toggle').classList.remove('active');
            document.querySelector('nav').classList.remove('active');
        });
    });
});