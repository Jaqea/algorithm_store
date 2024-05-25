/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  /** 法一 */
  // if (!head || !head.next) return head;
  // let p = head,
  //   root;
  // const arr = [];
  // while (p) {
  //   arr.push(p.val);
  //   p = p.next;
  // }
  // arr.sort((pre, next) => pre - next);
  // root = new ListNode(arr[0]);
  // p = root;
  // for (let i = 1; i < arr.length; i++) {
  //   p.next = new ListNode(arr[i]);
  //   p = p.next;
  // }
  // return root;
  /** 法二 */
  if (!head || !head.next) return head;

  let len = 0,
    node = head,
    dummyHead = new ListNode();
  dummyHead.next = head;
  while (node) {
    len++;
    node = node.next;
  }

  for (let subLen = 1; subLen < len; subLen *= 2) {
    let prev = dummyHead,
      cur = dummyHead.next;
    while (cur) {
      const leftHead = cur;
      for (let i = 1; i < subLen && cur.next; i++) cur = cur.next;

      const rightHead = cur.next;
      cur.next = null;
      cur = rightHead;
      for (let i = 1; i < subLen && cur && cur.next; i++) cur = cur.next;

      let next = null;
      if (cur) {
        next = cur.next;
        cur.next = null;
      }

      const merged = mergeTwoLists(leftHead, rightHead);
      prev.next = merged;
      while (prev.next) prev = prev.next;

      cur = next;
    }
  }

  function mergeTwoLists(l1, l2) {
    let head = new ListNode(),
      pre = head;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        pre.next = l1;
        l1 = l1.next;
      } else {
        pre.next = l2;
        l2 = l2.next;
      }
      pre = pre.next;
    }

    if (l1) {
      pre.next = l1;
    }

    if (l2) pre.next = l2;

    return head.next;
  }

  return dummyHead.next;
};
// @lc code=end
