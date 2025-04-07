import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.work__form');
  const emailInput = document.getElementById('user-email');
  const commentInput = document.getElementById('user-comments');
  const modal = document.querySelector('.backdrop');
  const closeModalBtn = document.querySelector('.modal__close');
  const overlay = document.querySelector('.backdrop');

  modal.classList.remove('is-open');

  function toggleModal(show) {
    modal.classList.toggle('is-open', show);
    document.body.style.overflow = show ? 'hidden' : 'auto';
  }

  function showValidationColor(isValid) {
    if (isValid) {
      emailInput.style.borderBottom = '1px solid #3cbc81';
    } else {
      emailInput.style.borderBottom = '1px solid #e74a3b';
    }
  }

  function isValidEmail(email) {
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailPattern.test(email);
  }

  emailInput.addEventListener('input', function () {
    if (emailInput.value.length > 0) {
      showValidationColor(isValidEmail(emailInput.value.trim()));
    } else {
      emailInput.style.borderBottom = '1px solid #aaa';
    }
  });

  commentInput.addEventListener('input', function () {
    if (this.value.length > 50) {
      this.value = this.value.slice(0, 50) + '...';
    }
  });

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  }

  closeModalBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', event => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const comment = commentInput.value.trim();

    if (!isValidEmail(email)) {
      showValidationColor(false);
      return;
    }

    const formData = {
      email: email,
      comment: comment,
    };

    try {
      await axios.post('https://portfolio-js.b.goit.study/api/requests', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      toggleModal(true);
      form.reset();
      emailInput.style.borderBottom = '1px solid #aaa';
    } catch (error) {
      let errorMessage = 'Error sending application. Please check the entered data and try again.';
      if (error.response) {
        errorMessage += ` Error code: ${error.response.status}`;
      } else if (error.request) {
        errorMessage += ' Network problem.';
      }

      iziToast.error({
        title: 'Error',
        message: errorMessage,
        position: 'topRight',
      });

      console.error('Submission error:', error);
    }
  });
});




