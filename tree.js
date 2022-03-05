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
    }
    console.log("read" + value);
  }
}

a = new Bst;
//a.head = new Node(5);
a.insert(4);
console.log(a);


