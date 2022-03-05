function Bst(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  
  this.add = function(treeValue) {
    this.left = new Bst(treeValue);
  }
  
  this.print = function() {
    console.log(this.left.value);
  }
  
}

a = new Bst(5);
a.add(3);
a.print();

