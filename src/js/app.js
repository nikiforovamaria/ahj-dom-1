const cells = Array.from(document.querySelectorAll('.cell'));

const random = () => {
  const filteredCells = cells.filter((cell) => cell.getElementsByTagName('img').length === 0);
  const randomCell = Math.floor(Math.random() * filteredCells.length);
  if (document.querySelector('.goblin')) {
    document.querySelector('.goblin').classList.remove('goblin');
  }
  filteredCells[randomCell].classList.add('goblin');
};

setInterval(random, 2000);
