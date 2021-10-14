
module.exports = class BinarySearchTree {
  constructor(data) {
    this.data = data || null;
}

  root() {
    return this.rootElem || null;
  }

  add(value) {
    if (!this.data) {
      this.data=new BinarySearchTree(value); //this.data=BinarySearchTree(где BinarySearchTree.data=value)
      this.rootElem=(this.data).data; //запишет дерево
  } else if(value<this.data){
    this.left=new BinarySearchTree(value);
  } else{
    this.right=new BinarySearchTree(value);
  }
  }

  has(data) {

  }

  find(data) {

  }

  remove(data) {

  }

  min() {

  }

  max() {

  }

}