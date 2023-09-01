/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverse = (s, start, end) => {
  let i, j, temp;
  i = start;
  j = end;
  while (i < j) {
    temp = s[i];
    s.replace(s[i], s[j]);
    console.log(s);
    s = s.replace(s[j], temp);
    i++;
    j--;
  }
  return s;
};
var reverseStr = function (s, k) {
  let i,
    len = s.length;
  for (i = 0; i < s.length; i += 2 * k) {
    if (len < k) s = reverse(s, i, s.length);
    else s = reverse(s, i, i + k - 1);
    len = len - 2 * k;
  }
  return s;
};
// @lc code=end
