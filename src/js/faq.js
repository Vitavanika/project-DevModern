import Accordion from 'accordion-js';

import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-list-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-button');
    const text = item.querySelector('.faq-text');

    text.style.maxHeight = '0px';
    text.style.overflow = 'hidden';

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      item.classList.toggle('active');

      if (isActive) {
        // Закриваємо
        text.style.maxHeight = '0px';
      } else {
        // Відкриваємо — встановлюємо висоту контенту
        text.style.maxHeight = text.scrollHeight + 'px';
      }
    });
  });
});
