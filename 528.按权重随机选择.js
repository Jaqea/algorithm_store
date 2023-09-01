/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
const leftBound = (nums, target) => {
  let left, right, mid;
  left = 0;
  right = nums.length;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) right = mid;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid;
  }
  if (left === nums.length) return -1;
  return left;
};

/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.preArr = [];
  this.preArr[0] = 0;
  w.forEach((item, index) => {
    this.preArr[index + 1] = this.preArr[index] + item;
  });
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let target =
    Math.floor(Math.random() * this.preArr[this.preArr.length - 1]) + 1;
  return leftBound(this.preArr, target) - 1;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end
