/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  // let flag, R, D;
  // flag = 0;
  // R = D = true;
  // while (R && D) {
  //   R = D = false;
  //   for (let i = 0; i < senate.length; i++) {
  //     if (senate[i] === "R") {
  //       if (flag >= 0) R = true;
  //       else
  //         senate =
  //           senate.slice(0, i) + "0" + senate.slice(i + 1, senate.length);
  //       flag++;
  //     }
  //     if (senate[i] === "D") {
  //       if (flag <= 0) D = true;
  //       else
  //         senate =
  //           senate.slice(0, i) + "0" + senate.slice(i + 1, senate.length);
  //       flag--;
  //     }
  //   }
  //   console.log(senate);
  // }

  // return R ? "Radiant" : "Dire";

  let map = new Map();
  map.set("R", 0);
  map.set("D", 0);
  for (let str of senate) map.set(str, map.get(str) + 1);
  senate = senate.split("");
  while (map.get("R") !== 0 && map.get("D") !== 0) {
    for (let i = 0; i < senate.length; i++) {
      let j = i + 1;
      if (senate[i] === "R") {
        while (senate[j] !== "D" && j < senate.length) j++;
        if (j < senate.length) {
          senate[j] = null;
          if (map.get("D") > 0) map.set("D", map.get("D") - 1);
        }
      } else if (senate[i] === "D") {
        while (senate[j] !== "R" && j < senate.length) j++;
        if (j < senate.length) {
          senate[j] = null;
          if (map.get("R") > 0) map.set("R", map.get("R") - 1);
        }
      }
    }
  }
  console.log(senate, map);
  return map.get("R") === 0 ? "Dire" : "Radiant";
};
// @lc code=end
