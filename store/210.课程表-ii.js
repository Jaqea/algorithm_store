/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const inDegree = new Map(),
    map = new Map(),
    queue = [],
    res = [];
  let front = (rear = 0);

  for (let i = 0; i < numCourses; i++) {
    inDegree.set(i, 0);
  }

  prerequisites.forEach((item) => {
    const first = item[0],
      second = item[1];

    if (!map.has(second)) {
      map.set(second, [first]);
    } else {
      map.get(second).push(first);
    }

    inDegree.set(first, inDegree.get(first) + 1);
  });

  for (let [key, value] of inDegree) {
    if (value === 0) {
      queue[rear++] = key;
    }
  }

  while (front < rear) {
    const course = queue[front++];

    if (!map.has(course)) {
      continue;
    }
  }
};
// @lc code=end
