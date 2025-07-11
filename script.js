
// اسکریپت افکت تایپ ساده
const phrases = ["من مهدی‌ام", "برنامه‌نویس خلاق", "توسعه‌دهنده آینده‌نگر"];
let i = 0, j = 0, current = [], isDeleting = false;

function typeLoop() {
  const typedText = document.querySelector(".typed-text");
  const cursor = document.querySelector(".cursor");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      current.push(phrases[i][j]);
      j++;
      typedText.innerHTML = current.join("");
    }
    if (isDeleting && j > 0) {
      current.pop();
      j--;
      typedText.innerHTML = current.join("");
    }

    if (j === phrases[i].length) {
      isDeleting = true;
      setTimeout(typeLoop, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
    setTimeout(typeLoop, isDeleting ? 50 : 120);
  }
}
document.addEventListener("DOMContentLoaded", typeLoop);
