const new_arr = [9, 4, 8, 2, 3, 6, 1];

new_arr.forEach(element => console.log(element));

let x = document.getElementsByClassName("red");

console.log(typeof(x[0]));

newpoint = 75;

function changeLine1(){
  document.getElementById("line1").setAttribute("points", "0,35 200,"+ newpoint +" 200,40 0,50");
}

function changeColor() {
  console.log("change color");
  document.getElementById("line1").style.fill="blue";
}
