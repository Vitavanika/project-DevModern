document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.getElementById("email-link");

  if (emailLink) {
    emailLink.addEventListener("click", function (event) {
      event.preventDefault();

      const email = "lloydjefferson@gmail.com";
      const subject = "Запит щодо співпраці";
      const body = "Доброго дня! Я хотів би дізнатися більше про...";

      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
    });
  }
});