/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let hashs = [],
    res = [];
  words.forEach((str) => {
    let hash = new Map();
    str.split("").forEach((item) => {
      if (hash.has(item)) hash.set(item, hash.get(item) + 1);
      else hash.set(item, 1);
    });
    hashs.push(hash);
  });

  for (const key of hashs[0].keys()) {
    let flag = true,
      min = hashs[0].get(key);
    for (let i = 1; i < hashs.length; i++) {
      if (!hashs[i].get(key)) {
        flag = false;
        break;
      } else min = min < hashs[i].get(key) ? min : hashs[i].get(key);
    }
    if (flag) for (let i = 0; i < min; i++) res.push(key);
  }

  return res;
};
// @lc code=end
