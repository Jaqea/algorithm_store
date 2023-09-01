/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left, right, mid;
  left = 0;
  right = num;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    const SQR = mid * mid;
    if (SQR > num) right = mid - 1;
    else if (SQR < num) left = mid + 1;
    else return true;
  }
  return false;
};
// @lc code=end
