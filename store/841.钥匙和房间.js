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

// let vaildity, map;

// const dfs = (rooms, index) => {
//   vaildity[index] = 1;
//   const path = rooms[index];
//   for (let i of path) {
//     if (!map.has(i)) map.set(i, 1);
//     else continue;
//     dfs(rooms, i);
//   }
// };

var canVisitAllRooms = function (rooms) {
  // const N = rooms.length;
  // map = new Map();
  // vaildity = new Array(N).fill(0);
  // dfs(rooms, 0);
  // return vaildity.indexOf(0) === -1;

  let vaildity = new Array(rooms.length).fill(0);

  const traverse = (rooms, cur) => {
    if (vaildity[cur]) return;
    else vaildity[cur] = 1;

    for (let i = 0; i < rooms[cur].length; i++) {
      traverse(rooms, rooms[cur][i]);
    }
  };

  traverse(rooms, 0);

  return vaildity.indexOf(0) === -1 ? true : false;
};
// @lc code=end
