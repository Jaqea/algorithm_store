/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const getNum = (str) => {
  let oneNum = (zeroNum = 0);
  for (let i of str) {
    if (i == 1) oneNum++;
    else zeroNum++;
  }
  return [oneNum, zeroNum];
};

var findMaxForm = function (strs, m, n) {
  let dp = new Array(n + 1).fill(0).map(() => Array(m + 1).fill(0));

  for (let k = 0; k < strs.length; k++) {
    const [oneNum, zeroNum] = getNum(strs[k]);
    for (let i = n; i >= oneNum; i--) {
      for (let j = m; j >= zeroNum; j--) {
        dp[i][j] = Math.max(dp[i - oneNum][j - zeroNum] + 1, dp[i][j]);
      }
    }
  }
  return dp[n][m];
};
// @lc code=end
