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

  let R = (D = true),
    flag = 0;
  senate = senate.split("");
  while (R && D) {
    R = false;
    D = false;
    for (let i = 0; i < senate.length; i++) {
      if (senate[i] === "R") {
        if (flag < 0) senate[i] = 0;
        else R = true;
        flag++;
      }
      if (senate[i] === "D") {
        if (flag > 0) senate[i] = 0;
        else D = true;
        flag--;
      }
    }
  }

  return D ? "Dire" : "Radiant";
};
// @lc code=end
