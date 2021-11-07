const new_arr = [9, 4, 8, 2, 3, 6, 1];

new_arr.forEach(element => console.log(element));

let x = document.getElementsByClassName("red");

console.log(typeof(x[0]));

function changeLine1(){
  document.getElementById("line1").setAttribute("points", "0,35 200,25 200,40 0,50");
}

function changeColor() {
  document.getElementById("line1").setAttribute("fill", "blue");
}
