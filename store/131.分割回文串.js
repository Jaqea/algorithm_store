/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  let item = [];
  const isHuiwen = (s) => {
    let i = 0,
      j = s.length - 1;
    while (i <= j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  };
  const backtracking = (s, start) => {
    if (start >= s.length) {
      res.push([...item]);
      return;
    }

    for (let i = start; i < s.length + 1; i++) {
      if (i > start && isHuiwen(s.slice(start, i))) {
        item.push(s.slice(start, i));
        backtracking(s, i);
        item.pop();
      }
    }
  };
  backtracking(s, 0);
  return res;
};
// @lc code=end
