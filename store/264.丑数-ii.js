/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let len = (num = 1);

  while (len < n) {
    num++;
    let flag = 1;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        console.log(i);
        // flag = 0;
        // break;
      }
    }
    if (flag) len++;
  }

  return num;
};
// @lc code=end
