const player = document.getElementById('player');
const goal = document.getElementById('goal');
const gameContainer = document.querySelector('.game-container');

let level = 1;
let obstaclesCount = 1;

gameContainer.addEventListener('mousemove', function(event) {
  const x = event.clientX - gameContainer.getBoundingClientRect().left - player.offsetWidth / 2;
  const y = event.clientY - gameContainer.getBoundingClientRect().top - player.offsetHeight / 2;

  const maxX = gameContainer.offsetWidth - player.offsetWidth;
  const maxY = gameContainer.offsetHeight - player.offsetHeight;

  const boundedX = Math.min(Math.max(0, x), maxX);
  const boundedY = Math.min(Math.max(0, y), maxY);

  player.style.left = boundedX + 'px';
  player.style.top = boundedY + 'px';

  const playerRect = player.getBoundingClientRect();
  const goalRect = goal.getBoundingClientRect();
  const obstacles = document.querySelectorAll('.obstacle');

  if (isColliding(playerRect, goalRect)) {
    level++;
    obstaclesCount++;
    alert('Level ' + level);
    setLevel(level, obstaclesCount);
  }

  for (let obstacle of obstacles) {
    const obstacleRect = obstacle.getBoundingClientRect();
    if (isColliding(playerRect, obstacleRect)) {
      alert('Du

