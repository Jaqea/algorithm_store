/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const getBST = (nums, left, right) => {
  if (left > right) return null;
  let mid = Math.floor((left + right) / 2);
  // if (mid < 0 || mid > nums.length - 1) return;
  let node = new TreeNode(nums[mid]);
  node.left = getBST(nums, left, mid - 1);
  node.right = getBST(nums, mid + 1, right);
  return node;
};
var sortedArrayToBST = function (nums) {
  //递归
  // return getBST(nums, 0, nums.length - 1);
  // 迭代
  let queue = [],
    leftQueue = [],
    rightQueue = [],
    front,
    rear,
    mid;
  front = rear = 0;
  let root = new TreeNode();
  queue[rear++] = root;
  leftQueue[rear - 1] = 0;
  rightQueue[rear - 1] = nums.length - 1;
  while (front !== rear) {
    let curNode = queue[front++];
    let leftIndex = leftQueue[front - 1];
    let rightIndex = rightQueue[front - 1];
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    curNode.val = nums[mid];

    if (leftIndex < mid) {
      queue[rear++] = new TreeNode();
      curNode.left = queue[rear - 1];
      leftQueue[rear - 1] = leftIndex;
      rightQueue[rear - 1] = mid - 1;
    }

    if (rightIndex > mid) {
      queue[rear++] = new TreeNode();
      curNode.right = queue[rear - 1];
      leftQueue[rear - 1] = mid + 1;
      rightQueue[rear - 1] = rightIndex;
    }
  }

  return root;
};
// @lc code=end
