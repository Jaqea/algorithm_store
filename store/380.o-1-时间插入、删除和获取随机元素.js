/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function () {
  this.arr = [];
  this.hash = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.hash.has(val)) return false;
  else {
    this.arr.push(val);
    this.hash.set(val, this.arr.length - 1);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.hash.has(val)) {
    const INDEX = this.hash.get(val);
    this.arr[INDEX] = this.arr[this.arr.length - 1];
    this.hash.set(this.arr[this.arr.length - 1], INDEX);
    this.hash.delete(val);
    this.arr.pop();
    return true;
  } else return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
