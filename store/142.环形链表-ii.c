/*
 * @lc app=leetcode.cn id=142 lang=c
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode *detectCycle(struct ListNode *head)
{
  // struct ListNode *slow, *fast, *p, *q;
  // slow = head;
  // fast = head;
  // while (fast != NULL && fast->next != NULL)
  // {
  //   fast = fast->next->next;
  //   slow = slow->next;
  //   if (fast == slow)
  //   {
  //     p = head;
  //     q = fast;
  //     while (q != p)
  //     {
  //       p = p->next;
  //       q = q->next;
  //     }
  //     return p;
  //   }
  // }
  // return NULL;

  struct ListNode *slow, *fast;
  if (head != NULL && head->next != NULL)
  {
    slow = head;
    fast = slow;
    while (fast != NULL && fast->next != NULL)
    {
      fast = fast->next->next;
      slow = slow->next;
      if (slow == fast)
      {
        slow = head;
        while (slow != fast)
        {
          slow = slow->next;
          fast = fast->next;
        }
        return fast;
      }
    }
  }
  return NULL;
}
// @lc code=end
