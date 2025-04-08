import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.work__form');
  const emailInput = document.getElementById('user-email');
  const commentInput = document.getElementById('user-comments');
  const emailValidationMessage = document.querySelector('.email-validation-message');
  const modal = document.querySelector('.backdrop');
  const closeModalBtn = document.querySelector('.modal__close');
  const overlay = document.querySelector('.backdrop');

  modal.classList.remove('is-open');

  function toggleModal(show) {
    modal.classList.toggle('is-open', show);
    document.body.style.overflow = show ? 'hidden' : 'auto';
  }

  function isValidEmail(email) {
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailPattern.test(email);
  }

  function showValidationMessage(isValid) {
  if (isValid) {
    emailInput.style.borderBottom = '1px solid #3cbc81';
    emailValidationMessage.textContent = 'Success!';
    emailValidationMessage.classList.remove('error');
    emailValidationMessage.classList.add('success');
  } else {
    emailInput.style.borderBottom = '1px solid #e74a3b';
    emailValidationMessage.textContent = 'Invalid email, try again';
    emailValidationMessage.classList.remove('success');
    emailValidationMessage.classList.add('error');
  }
}


  emailInput.addEventListener('input', function () {
    const value = emailInput.value.trim();

    if (value.length > 0) {
      const isValid = isValidEmail(value);
      showValidationMessage(isValid);
    } else {
      emailInput.style.borderBottom = '1px solid #aaa';
      emailValidationMessage.textContent = '';
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
      showValidationMessage(false);
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
      emailValidationMessage.textContent = '';
      emailValidationMessage.classList.remove('success', 'error');

      emailValidationMessage.textContent = '';
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
