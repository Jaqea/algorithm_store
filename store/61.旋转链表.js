/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  const root = new ListNode();
  root.next = head;
  let len = 0,
    p = head,
    rear;

  while (p) {
    p = p.next;
    len++;
  }

  k = k % len;
  if (!k) return head;

  p = root;
  for (let i = 0; i < len - k; i++) p = p.next;

  rear = p.next;
  while (rear.next) rear = rear.next;

  rear.next = root.next;
  root.next = p.next;
  p.next = null;

  return root.next;
};
// @lc code=end
