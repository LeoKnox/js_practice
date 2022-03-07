class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};
  
class LinkedList{
  constructor() {
    this.head = null;
    this.count = 0;
  }
    
  insert(value) {
    let new_node = new Node(value);
    if (this.head === null) {
      this.head = new_node;
      this.count = 1;
    } else {
      new_node.next = this.head;
      this.head = new_node;
      this.count+=1;
    }
  }
  
  find(value) {
    let runner = this.head;
    while (runner != null) {
      if (runner.val == value) {
        console.log("True");
        break;
      } else {
        runner = runner.next;
      }
    }
    console.log("false");
  }
    
  display() {
    let runner = this.head;
    while (runner != null) {
      console.log("Node " + runner.val);
      runner = runner.next;
    }
  }
}


let a = new LinkedList;
a.display();
a.insert(5);
a.insert(9);
a.find(5);
a.find(10);
a.display();
