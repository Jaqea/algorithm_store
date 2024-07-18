/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let max = Number.MIN_SAFE_INTEGER,
    num = 0,
    cls = 2,
    i = 0,
    j = i + 1;

  while (j < fruits.length) {
    if (cls > 0) {
      if (fruits[j - 1] !== fruits[j]) {
        cls--;
      } else {
        num++;
      }
      j++;
    } else {
      max = max > num ? max : num;
      num = 0;
    }
  }

  return max;
};
// @lc code=end
