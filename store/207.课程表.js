/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const inDegree = new Map(),
    map = new Map();

  for (let i = 0; i < numCourses; i++) {
    inDegree.set(i, 0);
  }

  prerequisites.forEach((item) => {
    const key = item[0],
      value = item[1];
    if (map.has(key)) {
      map.get(key).push(value);
    } else {
      map.set(key, [value]);
    }
    inDegree.set(key, inDegree.get(key) + 1);
  });

  console.log(inDegree, map);
};
// @lc code=end
