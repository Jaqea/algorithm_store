/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
const Sym = (left, right) => {
  if (left && !right) return false;
  if (!left && right) return false;
  if (!left && !right) return true;
  if (left && right && left.val !== right.val) return false;
  if (left && right && left.val === right.val) {
    let leftSym = Sym(left.left, right.right);
    let rightSym = Sym(left.right, right.left);
    return leftSym && rightSym;
  }
};

var isSymmetric = function (root) {
  // 法一
  // return Sym(root.left, root.right);
  // 法二
  let queue = [],
    front,
    rear;
  front = rear = 0;
  queue[rear++] = root.left;
  queue[rear++] = root.right;
  while (front !== rear) {
    let left = queue[front++];
    let right = queue[front++];
    if (!left && right) return false;
    else if (left && !right) return false;
    else if (left && right && left.val !== right.val) return false;
    else if (left && right && left.val === right.val) {
      queue[rear++] = left.left;
      queue[rear++] = right.right;
      queue[rear++] = left.right;
      queue[rear++] = right.left;
    }
  }
  return true;
};
// @lc code=end
