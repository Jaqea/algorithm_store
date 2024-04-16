/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
function ListNode(val) {
  this.val = val || "";
  this.next = null;
  this.front = null;
}
var LRUCache = function (capacity) {
  this.vMap = new Map();
  this.capacity = capacity;
  this.head = new ListNode();
  this.tail = new ListNode();
  this.tail.front = this.head;
  this.head.next = this.tail;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.vMap.has(key)) {
    const node = this.vMap.get(key);
    const preNode = node.front;
    node.next.front = preNode;
    preNode.next = node.next;
    node.next = this.head.next;
    this.head.next.front = node;
    node.front = this.head;
    this.head.next = node;
    // console.log(this.head);
    return node.val;
  } else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.capacity && !this.vMap.has(key)) {
    const node = new ListNode(value);
    node.next = this.head.next;
    this.head.next.front = node;
    node.front = this.head;
    this.head.next = node;
    this.vMap.set(key, node);
    --this.capacity;
  } else if (!this.capacity && !this.vMap.has(key)) {
    const deleteNode = this.tail.front;
    const delPreNode = this.tail.front.front;
    this.tail.front = delPreNode;
    delPreNode.next = this.tail;
    deleteNode.front = null;
    deleteNode.next = null;
    this.vMap.delete(deleteNode.val);
    const node = new ListNode(value);
    node.next = this.head.next;
    this.head.next.front = node;
    node.front = this.head;
    this.head.next = node;

    this.vMap.set(key, node);
  }

  // console.log(this.head);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
