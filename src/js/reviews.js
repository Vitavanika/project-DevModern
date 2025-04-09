import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';

const reviewersList = document.querySelector('.reviews-list');
const leftReviewBtn = document.querySelector('.left-rev-btn');
const rightReviewsBtn = document.querySelector('.right-rev-btn');

const reviewsSection = document.querySelector('.reviews-section');
const errorWrapper = document.getElementById('reviews-error-wrapper');
const retryBtn = document.querySelector('.retry-reviews-btn');
const reviewsContainer = document.querySelector('.reviews-wrapper');

// backend request
let reviewsLoadError = false;

async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const reviews = await response.json();
    reviewsLoadError = false;
    errorWrapper.classList.add('hidden');

    renderReviewList(reviews);
    initSwiper();
  } catch (error) {
    console.error('Error:', error);
    reviewsLoadError = true;
  }
}

function renderReviewList(reviews) {
  const markup = reviews
    .map(review => {
      return `<li class="reviews-items swiper-slide">
            <img class="reviews-photo" src="${review.avatar_url}"  alt="${review.author} of photo" width="48" height="48">
            <div class="reviews-card-text">
            <h3 class="reviewer-name">${review.author}</h3>
            <p class="reviewer-text">${review.review}</p>
           </div>
            </li>`;
    })
    .join('');
  reviewersList.insertAdjacentHTML('beforeend', markup);
}

// Intersection Observer — показує помилку лише коли секція в полі зору
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && reviewsLoadError) {
        errorWrapper.classList.remove('hidden');
        leftReviewBtn.classList.add('hidden');
        rightReviewsBtn.classList.add('hidden');
        observer.unobserve(reviewsSection);
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(reviewsSection);

//Reload
retryBtn.addEventListener('click', () => {
  errorWrapper.classList.add('hidden');
  reviewsContainer.innerHTML = '';

  observer.observe(reviewsSection);
  fetchReviews();
});

function initSwiper() {
  new Swiper('.reviews-wrapper', {
    modules: [Keyboard],
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.right-rev-btn',
      prevEl: '.left-rev-btn',
    },
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

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

    leftReviewBtn.disabled = isBeginning;
    leftReviewBtn.classList.toggle('rev-btn-disabled', isBeginning);

    rightReviewsBtn.disabled = isEnd;
    rightReviewsBtn.classList.toggle('rev-btn-disabled', isEnd);
  }
}
reviewersList.addEventListener('click', function (e) {
  const card = e.target.closest('.reviews-items');
  if (!card) return;

  const textBlock = card.querySelector('.reviewer-text');
  if (!textBlock) return;

  // перевірка чи більше 5 рядків
  const lineHeight = parseFloat(getComputedStyle(textBlock).lineHeight);
  const lines = textBlock.scrollHeight / lineHeight;

  if (lines > 5) {
    textBlock.classList.toggle('scrollable');
  }
});
document.addEventListener('DOMContentLoaded', fetchReviews);
