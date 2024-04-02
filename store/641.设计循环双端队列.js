/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.queue = [];
  this.front = 0;
  this.rear = 0;
  this.len = k + 1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (!this.isFull()) {
    this.front = (this.front - 1 + this.len) % this.len;
    this.queue[this.front] = value;
    return true;
  }

  return false;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (!this.isFull()) {
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.len;
    return true;
  }

  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (!this.isEmpty()) {
    this.front = (this.front + 1) % this.len;
    return true;
  }

  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (!this.isEmpty()) {
    this.rear = (this.rear - 1 + this.len) % this.len;
    return true;
  }

  return false;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (!this.isEmpty()) return this.queue[this.front];

  return -1;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (!this.isEmpty()) return this.queue[(this.rear - 1 + this.len) % this.len];

  return -1;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.front === this.rear;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return (this.rear + 1) % this.len === this.front;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end
