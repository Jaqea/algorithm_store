/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // if (!preorder.length || !inorder.length) return null;

  // const node = new TreeNode(preorder[0]);
  // if (preorder.length === 1) return node;

  // let deleteIndex;
  // for (deleteIndex = 0; deleteIndex < inorder.length; deleteIndex++)
  //   if (inorder[deleteIndex] === node.val) break;

  // const inorderLeft = inorder.slice(0, deleteIndex);
  // const inorderRight = inorder.slice(deleteIndex + 1, inorder.length);
  // const preorderLeft = preorder.slice(1, inorderLeft.length + 1);
  // const preorderRight = preorder.slice(inorderLeft.length + 1, preorder.length);

  // node.left = buildTree(preorderLeft, inorderLeft);
  // node.right = buildTree(preorderRight, inorderRight);

  // return node;

  const build = (preo, ino) => {
    const root = new TreeNode(preo[0]);

    if (preo.length === 1) {
      return root;
    }

    if (!preo.length) {
      return null;
    }

    let deleteIndex;
    for (deleteIndex = 0; deleteIndex < ino.length; deleteIndex++) {
      if (ino[deleteIndex] === preo[0]) break;
    }

    const inoLeft = ino.slice(0, deleteIndex);
    const inoRight = ino.slice(deleteIndex + 1);

    const preoLeft = preo.slice(1, inoLeft.length + 1);
    const preoRight = preo.slice(inoLeft.length + 1);

    root.left = build(preoLeft, inoLeft);
    root.right = build(preoRight, inoRight);

    return root;
  };

  return build(preorder, inorder);
};
// @lc code=end
