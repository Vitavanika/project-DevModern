document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.getElementById("email-link");

  if (emailLink) {
    emailLink.addEventListener("click", function (event) {
      event.preventDefault();

      const email = "lloydjefferson@gmail.com";
      const subject = "Запит щодо співпраці";
      const body = "Доброго дня! Я хотів би дізнатися більше про...";

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(gmailLink, '_blank');
    });
  }
});
  

