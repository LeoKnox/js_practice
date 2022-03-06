class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};
  
class LinkedList{
    constructor() {
      head = null;
      this.count = 0;
    }
    
    function(value) {
      new_node = Node(value);
      if (this.head === null) {
        this.head = new_node;
        this.count = 1;
      } else {
        new_node.next = this.head;
        this.head = new_node;
        this.count+=1;
      }
    }
    
    print() {
      runner = this.head;
      while (runner != null) {
        console.log("Node" + runner.value);
        runner = runner.next;
      }
    }
  };
}
