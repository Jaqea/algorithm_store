/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
const pointsSort = (points) => {
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length - i - 1; j++) {
      if (points[j + 1][0] < points[j][0]) {
        let temp = points[j];
        points[j] = points[j + 1];
        points[j + 1] = temp;
      }
    }
  }
};

var findMinArrowShots = function (points) {
  let num = 1;
  points.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < points.length - 1; i++) {
    if (points[i][1] < points[i + 1][0]) num++;
    else points[i + 1][1] = Math.min(points[i][1], points[i + 1][1]);
  }
  return num;
};
// @lc code=end
