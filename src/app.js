var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

window.onload = function(){
  canvas.width = 640;
  canvas.height = 320;
  

  requestAnimationFrame(gameLoop);
}

function gameLoop(){
  drawEverything();

  requestAnimationFrame(gameLoop);
}

function drawEverything(){
  // Backrgound
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}