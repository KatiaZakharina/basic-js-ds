 module.exports = class Stack {
   //FILO
  constructor(){
    this.value=[];
  }

  push(element) {
    return this.value.push(element);
  }

  pop() {
    return this.value.pop();
  }

  peek() {
    return this.value.slice().pop();
  }
}
