/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // 法一：栈
  // 法二：双指针
  let i, j, numS, numT;
  i = s.length - 1;
  j = t.length - 1;
  numS = numT = 0;

  while (1) {
    while (i > -1) {
      if (s[i] === "#") numS++;
      else {
        if (numS > 0) numS--;
        else break;
      }
      i--;
    }
    while (j > -1) {
      if (t[j] === "#") numT++;
      else {
        if (numT > 0) numT--;
        else break;
      }
      j--;
    }
    console.log(i, j);
    if (i === -1 || j === -1) break;
    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }
  console.log(i, j);
  if (s[i] === t[j]) return true;
  else return false;
};
// @lc code=end
