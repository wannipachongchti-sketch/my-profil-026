const greetingBtn = document.getElementById('greetingBtn');
const message = document.getElementById('greetingMessage');
greetingBtn.addEventListener('click', function ()  {
    message.textContent = 'สวัสดีค่ะ ยินดีที่ได้รู้จักค่ะ';
});