class Node
{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst
{
  constructor() {
    this.head = null;
  }
  
  insert(value) {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let runner = this.head;
      if (runner.left == null) {
        runner.left = new Node(value);
      } else {
        runner = runner.left;
      }
    }
    console.log("read" + value);
  }
}

a = new Bst;
//a.head = new Node(5);
a.insert(4);
a.insert(3);
a.insert(2);
console.log(a);





