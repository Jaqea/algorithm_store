/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let count = 0,
    sum = 0;
  people.sort((a, b) => a - b);

  for (let i = 0; i < people.length; i++) {
    if (people[i] <= limit) sum += people[i];
    // if(sum > limit)
  }
};
// @lc code=end
