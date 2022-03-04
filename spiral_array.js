let testarr = [[1,2,3],[4,5,6],[7,8,9]];
let x = 0, y = 0, z = 100;
let exit = false;

while (z > 0) {
  if (testarr[x][y] !== undefined) {
    console.log(testarr[x][y]);
    y++;
  } else {
    break;
  }
  z--;
}

console.log(testarr);
