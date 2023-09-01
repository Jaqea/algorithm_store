/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // 法一：暴力解法
  // let i,
  //   str,
  //   hash = new Map(),
  //   res = new Set();
  // for (i = 0; i < s.length; i++) {
  //   str = s
  //     .split("")
  //     .slice(i, i + 10)
  //     .join("");
  //   if (hash.has(str)) res.add(str);
  //   else hash.set(str, 1);
  // }
  // return [...res];
  // 法二：滑动窗口
  // let left,
  //   right,
  //   hash = new Map(),
  //   res = [],
  //   str = "";
  // left = right = 0;
  // while (right < s.length) {
  //   str += s[right];
  //   right++;
  //   while (right - left === 10) {
  //     if (hash.get(str) === 1) {
  //       res.push(str);
  //       hash.set(str, hash.get(str) + 1);
  //     } else hash.set(str, (hash.get(str) || 0) + 1);
  //     left++;
  //     str = str.split("").slice(1).join("");
  //   }
  // }
  // return res;
  // 法三：滑动窗口优化
  let left, right, nums, hash, L, R, RL, winHash, res;
  left = right = 0;
  nums = [...s];
  hash = new Map();
  res = [];
  for (let [index, item] of nums.entries()) {
    switch (item) {
      case "A":
        nums[index] = 0;
        break;
      case "G":
        nums[index] = 1;
        break;
      case "C":
        nums[index] = 2;
        break;
      case "T":
        nums[index] = 3;
        break;
    }
  }
  L = 10;
  R = 4;
  RL = Math.pow(R, L - 1);
  winHash = 0;
  while (right < nums.length) {
    winHash = winHash * R + nums[right];
    right++;
    while (right - left === L) {
      if (hash.get(winHash) === 1) {
        res.push(s.slice(left, right));
        hash.set(winHash, hash.get(winHash) + 1);
      } else hash.set(winHash, (hash.get(winHash) || 0) + 1);
      winHash = winHash - nums[left] * RL;
      left++;
    }
  }
  return res;
};
// @lc code=end
