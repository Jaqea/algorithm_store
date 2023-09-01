/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
let node;
const reverseN = (head, n) => {
  if (n === 1) {
    node = head.next;
    return head;
  }
  let last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = node;
  return last;
};
const reverseLR = (head, left, right) => {
  // console.log(head, left, right);
  if (left === 1) return reverseN(head, right);
  head.next = reverseLR(head.next, left - 1, right - 1);
  return head;
};
const computeSum = (head) => {
  let sum = 0,
    p = head;
  if (p) sum++;
  while (p.next) {
    sum++;
    p = p.next;
  }
  return sum;
};
const reverseK = (head, k, sum, left, right) => {
  let node = head;
  if (right <= sum) {
    node = reverseLR(head, left, right);
    reverseK(node, k, sum, left + k, right + k);
  }
  return node;
};
var reverseKGroup = function (head, k) {
  let left, right, sum;
  left = 1;
  right = left + k - 1;
  sum = computeSum(head);
  if (k > sum) return head;
  return reverseK(head, k, sum, left, right);
};
// @lc code=end
