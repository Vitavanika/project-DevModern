document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".mobmenu");
  const closeMenuButton = document.querySelector(".close-menu");
  const navigationLinks = document.querySelectorAll(".mobmenu-link");
  const body = document.body;

  const openMenuButton = document.querySelector(".js-open-menu");

  function closeMenu() {
    menu.classList.remove("is-open");
    body.style.overflow = "";
    removeListeners();
  }

  if (openMenuButton) {
    openMenuButton.addEventListener("click", openMenu);
  }

  closeMenuButton.addEventListener("click", closeMenu);

  function openMenu() {
    menu.classList.add("is-open");
    body.style.overflow = "hidden";
    addListeners();
  }

  function addListeners() {
    navigationLinks.forEach(link => {
      link.addEventListener("click", handleMenuLinkClick);
    });
  }

  function removeListeners() {
    navigationLinks.forEach(link => {
      link.removeEventListener("click", handleMenuLinkClick);
    });
  }

  function handleMenuLinkClick(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId);

    closeMenu();

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  const workButton = document.querySelector(".order-btn-mob");
  workButton?.addEventListener("click", () => {
    closeMenu();
    document.querySelector("#work_together")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
