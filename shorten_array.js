let arr = [1,2,3,4];
let i = arr.length;

while (i > 0) {
  console.log(arr);
  arr.length = arr.length-1;
  i--;
}
