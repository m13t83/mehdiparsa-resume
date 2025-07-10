const btn = document.getElementById('toggle-lang');
let lang = 'fa';

btn.addEventListener('click', () => {
  lang = lang === 'fa' ? 'en' : 'fa';
  document.querySelectorAll('[data-fa]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  btn.textContent = lang === 'fa' ? 'English' : 'فارسی';
});
