/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let sum,
    carry,
    str,
    res = 0;

  for (let j = num2.length - 1; j >= 0; j--) {
    carry = 0;
    str = "";
    for (let i = num1.length - 1; i >= 0; i--) {
      sum = carry;
      sum += parseInt(num2[j]) * parseInt(num1[i]);
      str += sum % 10;
      carry = Math.floor(sum / 10);
    }

    if (carry > 0) str += carry;

    res +=
      parseInt(str.split("").reverse().join("")) *
      Math.pow(10, num2.length - 1 - j);

    console.log(
      res,
      parseInt(str.split("").reverse().join("")) *
        Math.pow(10, num2.length - 1 - j)
    );
  }

  return res + "";
};
// @lc code=end
