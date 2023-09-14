/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const queueSort = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    for (let j = 0; j < queue.length - i - 1; j++) {
      if (queue[j + 1][0] > queue[j][0]) {
        let temp = queue[j + 1];
        queue[j + 1] = queue[j];
        queue[j] = temp;
      } else if (queue[j + 1][0] === queue[j][0]) {
        if (queue[j + 1][1] < queue[j][1]) {
          let temp = queue[j + 1];
          queue[j + 1] = queue[j];
          queue[j] = temp;
        }
      }
    }
  }
};
var reconstructQueue = function (people) {
  queueSort(people);
  let queue = [];
  people.forEach((item) => {
    queue.splice(item[1], 0, item);
  });
  return queue;
};
// @lc code=end
