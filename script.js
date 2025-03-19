function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".stack-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');
var fontSize = 15,
    columns = canvas.width / fontSize;
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}
function draw() {
  ctx.fillStyle = 'rgba(0, 3, 28, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}
setInterval(draw, 33);