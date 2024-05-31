/*
 * @lc app=leetcode.cn id=1603 lang=javascript
 *
 * [1603] 设计停车系统
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  let res = false;
  const run = (actions) => {
    actions.some((action) => {
      if (action[0]) {
        action[1]();
        return true;
      }
    });
  };

  const actions = [
    [
      this.big && carType === 1,
      () => {
        this.big--;
        res = true;
      },
    ],
    [
      this.medium && carType === 2,
      () => {
        this.medium--;
        res = true;
      },
    ],
    [
      this.small && carType === 3,
      () => {
        this.small--;
        res = true;
      },
    ],
  ];

  run(actions);

  return res;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end
