class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
  nextnode(newnode){
    this.next_node = newnode;
  }
  getnextnode()
  {
    return this.next_node;
  }
}
////head==>[1]==>[2]
class LinkedList {
  // setup head and tail
  constructor (){
    this.head = null;
    this.prvnode = null;
    this.size = 0;
    this.reqindex = null
    this.x = this.head;
  }

  add(number) {
    let newnode = new Node(number);
    if(this.head !=null){
      this.prvnode.nextnode(newnode);
    }
    this.prvnode = newnode;
    this.size ++;
    if(this.head == null)
    {
      this.head = newnode;
      newnode.next_node = null;
    }
  }

  get(index) {
    if(this.size == 0){
      return this.reqindex;
    }
    this.reqindex = this.head;
    for(let i=0 ; i<index;i++)
    {
      this.reqindex = this.reqindex.getnextnode();
    }
    if(this.reqindex == null)
      return null;
    return this.reqindex.value;
  }
}
