let rows = 40;
let cols = 40;
let arr = [];

const random = (rows = 40, cols = 40) => {
  let i = Math.floor(Math.random() * rows);
  let j = Math.floor(Math.random() * cols);
  if (arr.includes(`${i}-${j}`)) {
    random(rows, cols);
  }

  return `${i}-${j}`;
};

for (let i = 0; i < 500; i++) {
  arr.push(random());
}

const seeder = (x, y) => {
  let j = (x * y) / 3;
  let arr = [];
  for (let i = 0; i < j; i++) {
    arr.push(random(x, y));
  }
  return arr;
};

export { arr, rows, cols, seeder };
