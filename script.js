const player = document.getElementById('player');
const goal = document.getElementById('goal');
const obstacle = document.getElementById('obstacle');
const gameContainer = document.querySelector('.game-container');

let level = 1;

gameContainer.addEventListener('mousemove', function(event) {
  if (level <= 10) {
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
    const obstacleRect = obstacle.getBoundingClientRect();

    if (isColliding(playerRect, goalRect)) {
      if (level === 10) {
        alert('Glückwunsch! Du hast alle Level abgeschlossen!');
        level = 1;
      } else {
        level++;
        alert('Level ' + level);
        setLevel(level);
      }
    }

    if (isColliding(playerRect, obstacleRect)) {
      alert('Du hast das Hindernis berührt! Versuche es erneut.');
      setLevel(level);
    }
  }
});

function isColliding(a, b) {
  return !(
    a.bottom < b.top ||
    a.top > b.bottom ||
    a.right < b.left ||
    a.left > b.right
  );
}

function setLevel(level) {
  const goalPosition = getNewPosition();
  goal.style.top = goalPosition.top + 'px';
  goal.style.left = goalPosition.left + 'px';

  const obstaclePosition = getNewPosition();
  obstacle.style.top = obstaclePosition.top + 'px';
  obstacle.style.left = obstaclePosition.left + 'px';
}

function getNewPosition() {
  const posX = Math.floor(Math.random() * (gameContainer.offsetWidth - 50));
  const posY = Math.floor(Math.random() * (gameContainer.offsetHeight - 50));

  return { top: posY, left: posX };
}

setLevel(level);
