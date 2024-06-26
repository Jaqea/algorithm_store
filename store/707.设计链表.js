/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

const ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

MyLinkedList.prototype.getNode = function (index) {
  let cur = new ListNode(0, this.head);
  while (index >= 0) {
    cur = cur.next;
    --index;
  }

  return cur;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }

  return this.getNode(index).val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val, this.head);
  this.head = node;
  ++this.size;
  if (!this.tail) {
    this.tail = node;
  }
};

MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val);
  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
  } else {
    this.tail = node;
    this.head = node;
  }
  ++this.size;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  if (index <= 0) {
    this.addAtHead(val);
    return;
  }

  let cur = this.getNode(index - 1);

  const node = new ListNode(val, cur.next);
  cur.next = node;
  ++this.size;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }

  if (index === 0) {
    this.head = this.head.next;
    if (index === this.size - 1) {
      this.tail = this.head;
    }
    --this.size;
    return;
  }

  let cur = this.getNode(index - 1);

  cur.next = cur.next.next;
  if (index === this.size - 1) {
    this.tail = cur;
  }
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
