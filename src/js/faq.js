import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-list-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-button');

    btn.addEventListener('click', () => {
      // Перемикаємо активний стан тільки для поточного елемента
      item.classList.toggle('active');
    });
  });
});
