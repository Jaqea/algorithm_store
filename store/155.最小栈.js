/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
  this.normalTop = 0;
  this.minTop = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack[this.normalTop++] = val;
  if (
    this.minStack[this.minTop - 1] !== undefined &&
    this.minStack[this.minTop - 1] > val
  )
    this.minStack[this.minTop++] = val;
  else if (this.minStack[this.minTop - 1] === undefined)
    this.minStack[this.minTop++] = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const item = this.stack[--this.normalTop];
  if (this.minStack[this.minTop - 1] === item) {
    if (!this.stack.slice(0, this.normalTop).some((v) => v === item))
      this.minTop--;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.normalTop - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minTop - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
