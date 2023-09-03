/*
 * @lc app=leetcode.cn id=206 lang=c
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
// struct ListNode
// {
//   /* data */
//   int val;
//   struct ListNode *next;
// };

struct ListNode *reverseList(struct ListNode *head)
{
  // if (head == NULL || head->next == NULL)
  //   return head;
  // struct ListNode *p, *q, *t;
  // p = head;
  // q = head->next;
  // p->next = NULL;
  // while (q->next != NULL)
  // {
  //   t = q->next;
  //   q->next = p;
  //   p = q;
  //   q = t;
  // }
  // q->next = p;
  // return q;

  struct ListNode *p, *q, *temp;
  if (head == NULL || head->next == NULL)
    return head;
  p = head;
  q = p->next;
  p->next = NULL;
  while (q->next != NULL)
  {
    temp = q->next;
    q->next = p;
    p = q;
    q = temp;
  }
  q->next = p;
  return q;
}
// @lc code=end
