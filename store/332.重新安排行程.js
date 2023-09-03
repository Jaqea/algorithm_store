/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const compare = (str1, str2) => {
    let i, j;
    for (i = j = 0; i < str1.length && j < str2.length; i++, j++) {
      if (str1[i] > str2[j]) return 1;
      else if (str1[i] < str2[j]) return 0;
    }
  };
  console.log(compare("LGA", "LGB"));
};
// @lc code=end
