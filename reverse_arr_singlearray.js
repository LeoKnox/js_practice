let a = [5, 6, 3, 9, 1];
let b = [4, 2, 9, 8];
c = a;

for (i = c.length-1; i >= 0; i--) {
  c.push(c[i]);
}
d = c.slice(c.length/2);

console.log(d);
