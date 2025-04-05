document.addEventListener('DOMContentLoaded', function () {
    const menuTrigger = document.querySelector('.nav-menu'); // Посилання для відкриття меню
    const menuList = document.querySelector('.menu-list'); // Список меню
    const links = document.querySelectorAll('.menu-link'); // Якірні посилання

    // Переключення видимості меню
    menuTrigger.addEventListener('click', function (event) {
        event.preventDefault(); // Забороняємо перехід за посиланням
        menuList.classList.toggle('visible');
    });

    // Плавний скрол при кліку на якірні посилання
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Отримуємо ID секції
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Закриваємо меню після кліку
            menuList.classList.remove('visible');
        });
    });
});

// відкриття та закриття мобільного меню
document.addEventListener('DOMContentLoaded', () => {
    const menuOverlay = document.querySelector('.js-menu');
    const closeMenuButton = document.querySelector('.js-close-menu');
    const menuLinks = document.querySelectorAll('.js-link a');

    // Function to open the menu
    function openMenu() {
        menuOverlay.classList.add('is-open');
    }

    // Function to close the menu
    function closeMenu() {
        menuOverlay.classList.remove('is-open');
    }

    // Event listener for the close button
    closeMenuButton.addEventListener('click', closeMenu);

    // Event listener for menu links to close the menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Example: Add an event listener to open the menu (e.g., a button to open it)
    const openMenuButton = document.querySelector('.js-open-menu'); // Add a button with this class in your HTML
    if (openMenuButton) {
        openMenuButton.addEventListener('click', openMenu);
    }
});