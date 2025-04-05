import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
const reviwersList = document.querySelector('.reviews-list');
const leftReviewBtn = document.querySelector('.left-rev-btn');
const rightReviewsBtn = document.querySelector('.right-rev-btn');

async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const reviews = await response.json();
    renderReviewList(reviews);
    initSwiper();
  } catch (error) {
    console.error('Error:', error);
  }
}

function renderReviewList(reviews) {
  const markup = reviews
    .map(review => {
      return `<li class="reviews-items swiper-slide">
            <img class="reviews-photo" src="${
              review.avatar_url
            }" alt="reviewers photo" width="48" height="48">
            <div class="reviews-card-text">
            <h3 class="reviewer-name">${review.author}</h3>
            <p class="reviewer-text" data-full="${review.review.replace(
              /"/g,
              '&quot;'
            )}">${review.review}</p>
           </div>
            </li>`;
    })
    .join('');
  reviwersList.insertAdjacentHTML('beforeend', markup);
  // addOverlayConditionally();
}

// // function check hight text
// function addOverlayConditionally() {
//   const reviewTexts = document.querySelectorAll('.reviewer-text');

//   reviewTexts.forEach(textEl => {
//     const fullText = textEl.getAttribute('data-full');

//     const isOverflowing = textEl.scrollHeight > textEl.clientHeight;

//     if (isOverflowing) {
//       const overlay = document.createElement('div');
//       overlay.classList.add('overlay-text');
//       overlay.innerHTML = `<p>${fullText}</p><button class="close-overlay">Close</button>`;
//       textEl.insertAdjacentElement('afterend', overlay);

//       const parentItem = textEl.closest('.reviews-card-text');
//       console.log(textEl);
//       textEl.addEventListener('click', () => {
//         console.log('Text clicked');
//         parentItem.classList.add('show-overlay');
//       });

//       overlay.querySelector('.close-overlay').addEventListener('click', e => {
//         e.stopPropagation();
//         parentItem.classList.remove('show-overlay');
//       });
//     }
//   });
// }
// Додаємо обробник події на батьківський елемент .reviews-list
reviwersList.addEventListener('click', event => {
  // Перевіряємо, чи клік був на елементі .reviewer-text
  const textEl = event.target.closest('.reviewer-text');
  if (textEl) {
    console.log('Text clicked');
    const parentItem = textEl.closest('.reviews-card-text');
    parentItem.classList.add('show-overlay');
  }
});

function initSwiper() {
  new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.right-rev-btn',
      prevEl: '.left-rev-btn',
    },
    grabCursor: true,
    // autoHeight: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    on: {
      init: function () {
        updateNavButtons(this);
      },
      slideChange: function () {
        updateNavButtons(this);
      },
    },
  });
  function updateNavButtons(swiperInstance) {
    const isBeginning = swiperInstance.isBeginning;
    const isEnd = swiperInstance.isEnd;

    if (isBeginning) {
      leftReviewBtn.classList.add('rev-btn-disabled');
      leftReviewBtn.setAttribute('tabindex', '-1');
    } else {
      leftReviewBtn.classList.remove('rev-btn-disabled');
      leftReviewBtn.setAttribute('tabindex', '0');
    }

    if (isEnd) {
      rightReviewsBtn.classList.add('rev-btn-disabled');
      rightReviewsBtn.setAttribute('tabindex', '-1');
    } else {
      rightReviewsBtn.classList.remove('rev-btn-disabled');
      rightReviewsBtn.setAttribute('tabindex', '0');
    }
  }
}

document.addEventListener('DOMContentLoaded', fetchReviews);
