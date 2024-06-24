/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

const ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : val;
};

var MyLinkedList = function () {
  this.head = null;
  this.rear = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }

  let cur = this.head;
  while (index >= 0) {
    cur = cur.next;
    --index;
  }

  return cur.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val);
  if (this.head) {
    node.next = this.head;
  }
  this.head = node;
  ++this.size;
};

MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val);
  if (this.rear) {
    this.rear.next = node;
  } else {
    this.rear = node;
  }

  ++this.size;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0) {
    this.addAtHead(val);
  }

  if (index + 1 === this.size) {
    this.addAtTail(val);
  }

  let cur = this.head;
  while (index > 0 && cur) {
    cur = cur.next;
    --index;
  }
  if (!cur) {
    return;
  }

  const node = new ListNode(val);
  node.next = cur.next;
  cur.next = node;
  ++this.size;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  let cur = this.head;

  while (index > 0 && cur) {
    cur = cur.next;
    --index;
  }

  let node = cur.next;
  cur.next = node.next;
  node = null;
  --this.size;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
