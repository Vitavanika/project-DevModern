document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.getElementById("email-link");

  if (emailLink) {
    emailLink.addEventListener("click", function (event) {
      event.preventDefault(); // Запобігає переходу за `#`

      const email = "lloydjefferson@gmail.com";
      const subject = "Запит щодо співпраці";
      const body = "Доброго дня!\n\nЯ хотів би дізнатися більше про...";

      // Створюємо `mailto:` посилання
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Відкриваємо поштовий клієнт
      window.location.href = mailtoLink;
    });
  }
});