let rows = 40;
let cols = 40;
let arr = [];
let count = 0;

const random = () => {
  let i = Math.floor(Math.random() * rows);
  let j = Math.floor(Math.random() * cols);
  if (arr.includes(`${i}-${j}`)) {
    count++;
    random();
  }

  return `${i}-${j}`;
};

for (let i = 0; i < 500; i++) {
  arr.push(random());
}

export { arr, rows, cols };
