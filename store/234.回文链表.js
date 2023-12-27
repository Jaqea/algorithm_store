/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
let computeSum = (head) => {
  let count = 0;
  while (head !== null) {
    head = head["next"];
    count++;
  }
  return count;
};
const reverseList = (head) => {
  if (!head || !head.next) return head;
  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
// let left;
const traverse = (right) => {
  if (!right) return true;
  let res = traverse(right.next) && left.val === right.val;
  left = left.next;
  return res;
};
var isPalindrome = function (head) {
  // 法一
  // if (head === null || head.next === null) return true;
  // let len,
  //   p,
  //   q,
  //   t,
  //   count = 1;
  // len = computeSum(head);
  // p = head;
  // while (p !== null && count !== Math.floor(len / 2)) {
  //   p = p.next;
  //   count++;
  // }
  // q = p.next;
  // p.next = null;
  // p = {
  //   next: null,
  // };
  // while (q !== null) {
  //   t = q.next;
  //   q.next = p.next;
  //   p.next = q;
  //   q = t;
  // }
  // q = p.next;
  // p = head;
  // while (p !== null && q != null) {
  //   if (p.val !== q.val) return false;
  //   p = p.next;
  //   q = q.next;
  // }
  // return true;
  // 法二：
  // left = head;
  // return traverse(head);
  // 法三：
  // let left, right, slow;
  // left = right = slow = head;
  // while (right && right.next) {
  //   slow = slow.next;
  //   right = right.next.next;
  // }
  // if (right) slow = slow.next;
  // right = reverseList(slow);
  // while (right) {
  //   if (left.val !== right.val) return false;
  //   right = right.next;
  //   left = left.next;
  // }
  // return true;

  let slow, fast;
  slow = fast = head;
  while (fast.next) {
    slow = slow.next;
    if (fast.next.next) fast = fast.next.next;
    else fast = fast.next;
  }
  let p = new ListNode();
  let temp = slow;
  console.log(slow, fast);
  while (temp.next) {
    const q = p.next;
    p.next = temp.next;
    temp.next = temp.next.next;
    p.next = q;
  }
  slow.next = null;
  slow = head;
  console.log(slow, fast);
  while (slow && fast) {
    if (slow.val !== fast.val) return false;
    slow = slow.next;
    fast = fast.next;
  }
  return true;
};
// @lc code=end
