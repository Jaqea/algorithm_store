/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const getNext = (s) => {
  let next = [],
    j = -1;
  next[0] = j;
  for (let i = 1; i < s.length; i++) {
    while (j >= 0 && s[i] !== s[j + 1]) j = next[j];
    if (s[i] === s[j + 1]) j++;
    next[i] = j;
  }
  return next;
};
var strStr = function (haystack, needle) {
  // 减一
  if (needle.length === 0) return 0;
  let next = getNext(needle),
    i,
    j = -1;
  for (i = 0; i < haystack.length; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) j = next[j];
    if (haystack[i] === needle[j + 1]) j++;
    if (j === needle.length - 1) return i - j;
  }
  return -1;
};
// @lc code=end
