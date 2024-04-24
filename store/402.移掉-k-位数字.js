/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let min = 9,
    count = k,
    i,
    arr = num.split("");
  for (i = 0; i < arr.length; i++) min = min < arr[i] ? min : arr[i] - "0";

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > min) {
      count--;
      arr[i] = -1;
    }
    if (!count) break;
  }

  if (count) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] >= min) {
        count--;
        arr[i] = -1;
      }
      if (!count) break;
    }
  }

  i = 0;
  while ((arr[i] === "0" || arr[i] === -1) && i < arr.length) {
    arr[i] = -1;
    i++;
  }

  arr = arr.filter((item) => item !== -1);

  return arr.length ? arr.join("") : "0";
};
// @lc code=end
