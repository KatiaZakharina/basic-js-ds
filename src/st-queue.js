const { ListNode } = require('../extensions/list-node.js');

module.exports = class Queue {
  constructor(){
    this.value=null;
  }

  getUnderlyingList() {
    return this.value;
  }

  enqueue(value) {
    let current=this.value;
    while(current && current.next){
      current=current.next;
    }

    if(current===null){
      this.value=new ListNode(value);
    } else {
      current.next=new ListNode(value);
    }
  }

  dequeue() {
    let first=this.value,
    second=first.next;
    const deleted=this.value.value;

    first.value=second.value;
    first.next=second.next;
    
    return deleted;
  }
}