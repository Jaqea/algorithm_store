/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  const arr = [
    0,
    0,
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  let res = [],
    item = [];
  const backtracking = (arr, digits, start) => {
    if (item.length === digits.length) {
      res.push(item.join(""));
      return;
    }
    // 法一
    // for (let i = start; i < digits.length; i++) {
    //   for (let j = 0; j < arr[digits[i]].length; j++) {
    //     item.push(arr[digits[i]][j]);
    //     backtracking(arr, digits, i + 1);
    //     item.pop();
    //   }
    // }
    // 法二
    for (let j = 0; j < arr[digits[start]].length; j++) {
      item.push(arr[digits[start]][j]);
      backtracking(arr, digits, start + 1);
      item.pop();
    }
  };

  backtracking(arr, digits, 0);

  return res;
};
// @lc code=end
