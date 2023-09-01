/*
 * @lc app=leetcode.cn id=225 lang=c
 *
 * [225] 用队列实现栈
 */

// @lc code=start

#define LEN 100

typedef struct
{
  int queue[LEN];
  int front;
  int rear;
} MyStack;

MyStack *myStackCreate()
{
  MyStack *stack = (MyStack *)malloc(sizeof(MyStack));
  stack->front = 0;
  stack->rear = 0;
  return stack;
}

void myStackPush(MyStack *obj, int x)
{
  if (obj->front != (obj->rear + 1) % LEN)
  {
    obj->queue[obj->rear] = x;
    obj->rear = (obj->rear + 1) % LEN;
  }
}

int myStackPop(MyStack *obj)
{
  int x, index;
  if (obj->front != obj->rear)
  {
    index = (obj->rear - 1) % LEN;
    while (obj->front != index)
    {
      myStackPush(obj, obj->queue[obj->front]);
      obj->front = (obj->front + 1) % LEN;
    }
    x = obj->queue[obj->front];
    obj->front = (obj->front + 1) % LEN;
    return x;
  }
  return NULL;
}

int myStackTop(MyStack *obj)
{
  int index;
  if (obj->front != obj->rear)
    return obj->queue[(obj->rear - 1) % LEN];
  return NULL;
}

bool myStackEmpty(MyStack *obj)
{
  if (obj->front == obj->rear)
    return true;
  return false;
}

void myStackFree(MyStack *obj)
{
  if (obj->front != obj->rear)
  {
    obj->front = 0;
    obj->rear = 0;
  }
}

/**
 * Your MyStack struct will be instantiated and called as such:
 * MyStack* obj = myStackCreate();
 * myStackPush(obj, x);

 * int param_2 = myStackPop(obj);

 * int param_3 = myStackTop(obj);

 * bool param_4 = myStackEmpty(obj);

 * myStackFree(obj);
*/
// @lc code=end
