/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var MyLinkedList = function (val) {
  this.val = val;
  this.next = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0) return -1;
  let i = -1,
    p = this;
  while (i++ !== index && p) p = p.next;
  if (p) return p.val;
  else return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new MyLinkedList(val);
  node.next = this.next;
  this.next = node;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let p = this;
  while (p.next) p = p.next;
  p.next = new MyLinkedList(val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let pre = this,
    p = pre.next,
    i = 0;
  while (p && i !== index) {
    pre = p;
    p = p.next;
    i++;
  }
  if (i !== index) return;
  if (pre) {
    let node = new MyLinkedList(val);
    pre.next = node;
    node.next = p;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let i = 0,
    pre = this,
    p = pre.next;
  while (i++ !== index && p) {
    pre = p;
    p = p.next;
  }
  if (p) pre.next = p.next;
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
