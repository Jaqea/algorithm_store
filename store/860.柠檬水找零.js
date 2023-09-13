/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const money = [5, 10, 20];
  let map = new Map();
  money.forEach((item) => {
    map.set(item, 0);
  });
  for (let item of bills.values()) {
    const obj = {
      5: () => {
        map.set(item, map.get(item) + 1);
      },
      10: () => {
        if (map.get(5) > 0) map.set(5, map.get(5) - 1);
        else return false;
        map.set(item, map.get(item) + 1);
      },
      20: () => {
        if (map.get(5) >= 1 && map.get(10) >= 1) {
          map.set(5, map.get(5) - 1);
          map.set(10, map.get(10) - 1);
        } else if (map.get(5) >= 3) map.set(5, map.get(5) - 3);
        else return false;
        map.set(item, map.get(item) + 1);
      },
    };
    if (obj[item]() === false) return false;
  }
  return true;
};
// @lc code=end
