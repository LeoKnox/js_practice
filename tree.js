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
}

a = new Bst;
a.head = new Node(5);
console.log(a);



