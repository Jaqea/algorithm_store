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
  this.rear = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.vMap.has(key)) {
    const node = this.vMap.get(key);
    node.next = this.head.next;
    node.front = this.head;
    this.head.next = node;
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
    node.front = this.head;
    this.head.next = node;
    this.rear = this.rear.next;
    this.vMap.set(key, node);
    --this.capacity;
  } else if (!this.capacity && !this.vMap.has(key)) {
    this.rear = this.rear.front;
    this.rear.next = null;
    const node = new ListNode(value);
    node.next = this.head.next;
    node.front = this.head;
    this.head.next = node;

    this.vMap.set(key, [value, this.rear]);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
