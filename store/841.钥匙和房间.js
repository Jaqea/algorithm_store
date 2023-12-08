/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

let vaildity, map;

const dfs = (rooms, index) => {
  vaildity[index] = 1;
  const path = rooms[index];
  for (let i of path) {
    dfs(rooms, i);
  }
};

var canVisitAllRooms = function (rooms) {
  const N = rooms.length;
  vaildity = new Array(N).fill(0);
  dfs(rooms, 0);
  return vaildity.indexOf(0) === -1;
};
// @lc code=end
