/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const isAdd = (num) => {
  let last, cur;
  // 另一种方法
  while (num) {
    cur = num % 10;
    num = Math.floor(num / 10);
    last = num % 10;
    if (last > cur) return false;
  }
  return true;
};
var monotoneIncreasingDigits = function (n) {
  // 法一：暴力
  // for (let i = n; i > 0; i--) {
  //   if (isAdd(i)) return i;
  // }
  // 法二：贪心
  let arr = String(n).split(""),
    flag = 0;
  for (let i = arr.length - 1; i > -1; i--) {
    if (Number(arr[i]) < Number(arr[i - 1])) {
      arr[i - 1] -= 1;
      flag = i;
    }
  }
  if (flag) for (let i = flag; i < arr.length; i++) arr[i] = "9";
  return Number(arr.join(""));
};
// @lc code=end
