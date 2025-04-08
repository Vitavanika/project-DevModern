import Accordion from 'accordion-js';

import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  duration: 500,
  showMultiple: true,
  elementClass: 'accordion-item',
  triggerClass: 'accordion-header',
  panelClass: 'accordion-content',
  activeClass: 'is-active',
});
