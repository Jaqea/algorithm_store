/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
  this.front1 = 0;
  this.front2 = 0;
  this.rear1 = 0;
  this.rear2 = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1[this.rear1++] = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.front1 + 1 !== this.rear1)
    this.queue2[this.rear2++] = this.queue1[this.front1++];
  const item = this.queue1[this.front1++];
  while (this.front2 !== this.rear2)
    this.queue1[this.rear1++] = this.queue2[this.front2++];
  return item;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue1[this.rear1 - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this.front1 === this.rear1 && this.front2 === this.rear2) return true;
  return false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
