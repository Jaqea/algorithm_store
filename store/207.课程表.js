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
    map = new Map(),
    queue = [];
  let front = (rear = 0);

  for (let i = 0; i < numCourses; i++) {
    inDegree.set(i, 0);
  }

  prerequisites.forEach((item) => {
    const first = item[0],
      second = item[1];
    if (map.has(second)) {
      map.get(second).push(first);
    } else {
      map.set(second, [first]);
    }
    inDegree.set(first, inDegree.get(first) + 1);
  });

  for (let [key, value] of inDegree.entries()) {
    if (value === 0) {
      queue[rear++] = key;
    }
  }

  while (front < rear) {
    const course = queue[front++];

    if (!map.has(course)) {
      continue;
    }

    const relates = map.get(course);
    relates.forEach((item) => {
      inDegree.set(item, inDegree.get(item) - 1);
      if (inDegree.get(item) === 0) {
        queue[rear++] = item;
      }
    });
    map.delete(course);
  }

  for (let value of inDegree.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
};
// @lc code=end
