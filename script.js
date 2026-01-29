/* ==========================================================
   Athlete Homeschool Landing Page — script.js
   Form validation, submission, smooth scroll, FAQ toggle
   ========================================================== */

(function () {
  'use strict';

  const form = document.getElementById('lead-form');
  const nameInput = document.getElementById('first-name');
  const emailInput = document.getElementById('email');
  const submitBtn = document.getElementById('submit-btn');
  const successEl = document.getElementById('form-success');
  const errorEl = document.getElementById('form-error');
  const successEmail = document.getElementById('success-email');

  // --- Validation helpers ---

  function validateName() {
    const val = nameInput.value.trim();
    const errEl = document.getElementById('first-name-error');
    if (!val) {
      errEl.textContent = 'Please enter your first name';
      nameInput.classList.add('input-error');
      return false;
    }
    if (val.length < 2) {
      errEl.textContent = 'Name must be at least 2 characters';
      nameInput.classList.add('input-error');
      return false;
    }
    errEl.textContent = '';
    nameInput.classList.remove('input-error');
    return true;
  }

  function validateEmail() {
    const val = emailInput.value.trim();
    const errEl = document.getElementById('email-error');
    if (!val) {
      errEl.textContent = 'Please enter your email address';
      emailInput.classList.add('input-error');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      errEl.textContent = 'Please enter a valid email address';
      emailInput.classList.add('input-error');
      return false;
    }
    errEl.textContent = '';
    emailInput.classList.remove('input-error');
    return true;
  }

  function updateSubmitState() {
    var nameOk = nameInput.value.trim().length >= 2;
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
    submitBtn.disabled = !(nameOk && emailOk);
  }

  // --- Real-time validation ---

  nameInput.addEventListener('input', function () {
    if (nameInput.value.trim()) validateName();
    updateSubmitState();
  });
  nameInput.addEventListener('blur', validateName);

  emailInput.addEventListener('input', function () {
    if (emailInput.value.trim()) validateEmail();
    updateSubmitState();
  });
  emailInput.addEventListener('blur', validateEmail);

  // --- Form submission ---

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorEl.hidden = true;

    var nameOk = validateName();
    var emailOk = validateEmail();
    if (!nameOk || !emailOk) return;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');

    var formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(function (res) {
        if (res.ok) {
          form.hidden = true;
          successEmail.textContent = emailInput.value.trim();
          successEl.hidden = false;
        } else {
          throw new Error('Server error');
        }
      })
      .catch(function () {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        errorEl.hidden = false;
      });
  });

  // --- Smooth scroll for CTA buttons ---

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
