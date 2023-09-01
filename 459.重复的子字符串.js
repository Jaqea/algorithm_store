/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const getNext = (s) => {
  let next = [],
    i,
    j;
  j = 0;
  next[0] = j;
  for (i = 1; i < s.length; i++) {
    while (j > 0 && s[i] !== s[j]) j = next[j - 1];
    if (s[i] === s[j]) j++;
    next[i] = j;
  }
  return next;
};
var repeatedSubstringPattern = function (s) {
  // 法一：移动匹配
  // let twoS = s.slice(1) + s.slice(0, s.length - 1);
  // return twoS.includes(s);
  // 法二：kmp
  let next = getNext(s);
  if (s.length % (s.length - next[s.length - 1]) || next[s.length - 1] === 0)
    return false;
  return true;
};
// @lc code=end
