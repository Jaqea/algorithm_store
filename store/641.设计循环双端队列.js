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
  this.len = k;
  this.front = -1;
  this.rear = -1;
  this.k = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.len > 0) {
    this.front = this.front % this.len;
    this.queue[++this.front] = value;
    this.len--;
    return true;
  }

  return false;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.len > 0) {
    this.rear = this.rear % this.len;
    this.queue[++this.rear] = value;
    this.len--;
    return true;
  }

  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  this.rear = this.rear % this.len;
  if (this.queue[this.rear]) {
    this.queue[this.rear--] = null;
    this.len++;
    return true;
  }

  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  this.front = this.front % this.len;
  if (this.queue[this.front]) {
    this.queue[this.front--] = null;
    this.len++;
    return true;
  }

  return false;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  this.front = this.front % this.len;
  if (this.queue[this.front]) return this.queue[this.front];

  return false;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.queue[this.rear]) return this.queue[this.rear];

  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.len === this.k ? true : false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.len === 0 ? true : false;
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
