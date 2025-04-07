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
