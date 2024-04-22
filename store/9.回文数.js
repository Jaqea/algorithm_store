/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x + "";
  let left = 0,
    right = x.length - 1;
  while (left <= right) {
    if (x[left] !== x[right]) return false;
    left++;
    right--;
  }

  return true;
};
// @lc code=end
