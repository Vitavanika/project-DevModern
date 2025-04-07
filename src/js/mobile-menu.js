document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".mobmenu");
  const closeMenuButton = document.querySelector(".close-menu");
  const navigationLinks = document.querySelectorAll(".mobmenu-link");
  const body = document.body;

  // Відкриття меню (опціонально, якщо у вас є кнопка для відкриття)
  const openMenuButton = document.querySelector(".js-open-menu");
  if (openMenuButton) {
    openMenuButton.addEventListener("click", () => {
      menu.classList.add("is-open");
      body.style.overflow = "hidden"; // Заблокувати скрол
    });
  }

  // Закриття меню при кліку на кнопку "close menu"
  closeMenuButton.addEventListener("click", () => {
    menu.classList.remove("is-open");
    body.style.overflow = ""; // Відновлення скролу
  });

  // Закриття меню після кліку на посилання
  navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      body.style.overflow = ""; // Відновлення скролу
    });
  });
});