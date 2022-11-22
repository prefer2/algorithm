const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

const iskeepingDistance = (place) => {
  let roomInfo = place.map((rooms) => rooms.split(''));

  const queue = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (roomInfo[i][j] === 'P') {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (roomInfo[nx][ny] === 'X') continue;
      if (roomInfo[nx][ny] === 'P') return 0;

      for (let j = 0; j < 4; j++) {
        let aroundNX = nx + dx[j];
        let aroundNY = ny + dy[j];

        if (aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5) continue;
        if (aroundNX === x && aroundNY === y) continue;
        if (roomInfo[aroundNX][aroundNY] === 'P') return 0;
      }
    }
  }

  return 1;
};

function solution(places) {
  const keepingDistance = [];
  for (let i = 0; i < 5; i++) {
    keepingDistance.push(iskeepingDistance(places[i]));
  }

  return keepingDistance;
}
