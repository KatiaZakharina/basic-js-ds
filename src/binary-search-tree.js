
module.exports = class BinarySearchTree {
  constructor() {
    this.rootElem = null;
  }

  root(){
    return this.rootElem?this.rootElem:null;
  }

  add(data) {
    this.rootElem = addWithin(this.rootElem, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  find(data){
    return findWithin(this.rootElem, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? 
        findWithin(node.left, data) : 
        findWithin(node.right, data);
    }
  }
  has(data) {
    return searchWithin(this.rootElem, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  remove(data) {
    this.rootElem = removeNode(this.rootElem, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootElem) {
      return;
    }

    let node = this.rootElem;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootElem) {
      return;
    }

    let node = this.rootElem;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}