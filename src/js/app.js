const img = document.createElement('img');
img.src = 'https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png';
img.alt = 'goblin';

const cells = Array.from(document.querySelectorAll('.cell'));

const random = () => {
  const filteredCells = cells.filter((cell) => cell.getElementsByTagName('img').length === 0);
  const randomCell = Math.floor(Math.random() * filteredCells.length);
  filteredCells[randomCell].appendChild(img);
};

setInterval(random, 2000);

// console.log('app worked!');
