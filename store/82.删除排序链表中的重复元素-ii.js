/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let root, left, mid, right;
  root = left = new ListNode();
  mid = head;
  right = mid.next;
  left.next = mid;
  while (mid && right) {
    if (right.val === mid.val) {
      const temp = right.next;
      left.next = temp;
      mid = temp;
      if (mid.next) right = mid;
    } else {
      left = left.next;
      mid = mid.next;
      right = right.next;
    }
  }

  return root.next;
};
// @lc code=end
