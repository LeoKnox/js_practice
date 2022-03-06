class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  };
  
  class LinkedList{
    constructor() {
      head = null;
      this.count = 0;
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
