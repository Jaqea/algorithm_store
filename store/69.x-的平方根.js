/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // if (x === 0 || x === 1) return x;
  // let left, right, mid;
  // left = 0;
  // right = x;
  // while (left < right) {
  //   mid = left + Math.floor((right - left) / 2);
  //   const sqr = mid * mid;
  //   if (sqr == x) return mid;
  //   else if (sqr < x) left = mid + 1;
  //   else right = mid;
  // }
  // return left - 1;

  let left = 0,
    right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const powMid = mid * mid;
    if (powMid === x) {
      return mid;
    } else if (powMid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left - 1;
};
// @lc code=end
