# Stacks and Queues

## Stacks
A stack is similar to a list with access restricted to only one end. Stores elements in a *last in, first out* (LIFO) order.

Stacks are generally thought of as vertical data structures - lists and arrays are horizontal. The first item - the only accessible item on the stack - is referred to as the top of the stack.

Imagine a stack of plates in your kitchen. The last plate you put on the stack stays on top of the stack and it is the first plate you get to take out and use. The first

Implement a stack by using a singly linked list with constraints on its operations where items can be inserted and deleted at only one place - the top of the list.<br><br>

A stack has two functions:
- `push()`: Places data onto the top of the stack (insertion)

- `pop()`: Removes data from top of stack (deletion)

<hr>

## Creating a `Stack` class
```
    class Node{
        constructor(value, next){
            this.value = value;
            this.next = next;
        }
    }

    class Stack {
        constructor() {
            this.top = null;
        }
    }
```