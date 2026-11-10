document.addEventListener('DOMContentLoaded', function () {
  // ฟังก์ชันเดิมของปุ่มทักทาย
  const greetingBtn = document.getElementById('greetingBtn');
  const message = document.getElementById('greetingMessage');

  if (greetingBtn && message) {
    greetingBtn.addEventListener('click', function () {
      message.textContent = 'สวัสดีค่ะ ยินดีที่ได้รู้จักค่ะ';
    });
  }

  // เพิ่มระบบ Smooth Scroll เมื่อคลิกเมนูนำทาง
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
});