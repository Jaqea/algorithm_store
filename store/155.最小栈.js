/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
  this.top = 0;
  this.minTop = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
