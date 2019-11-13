---
published: false
cover: /post-images/ferris-wheel-at-night-2911364.jpg
date: '2019-11-12'
title: >-
  What Are Data Structures Really? The Fundamental Building Blocks of Computer
  Science
category: Tech
tags:
  - data structures
  - computer science
  - programming
---
Computers. Machines created to do the bidding of thy masters, without questions, without reasons. Sounds great right? It absolutely is! Technology has vastly transformed the world we live in and improved the overall living standard throughout its short history. 

This has been possible not because computers are incredibly smart (at this time), but because of the humans who tell computers what and how to do a task. When you truly think about how programming works and the field it has evolved into, there are a few basic elements that make it possible for us humans to tell computers what to do. One type of those elements is called a _data structure_.

Data structures are a building block to the software we write. They let us organize data in a computer for specific situations, so computers can do our bidding faster or make it easier for us to reason about. There are many different types of data structures with pros and cons in different scenarios, but my goal of this blog post is to write about each one in a way that makes it easy to understand for those interested. I won't be writing about every single data structure out there, but many of them are based on these fundamental ones or a combination of them, all making it easier for humans and computers to create better software!

*Note: I will be talking about static arrays, but all of my code examples are in JavaScript, which doesn't actually have static arrays since they are dynamic by default 🚀.*

TODO: GIF LETS GET THIS PARTY STARTED

TODO --- explain memory in a computer

# Arrays

Arrays are collections of items, typically of the same type, that are stored continuously in a block of memory. More specifically, an array is initialized to a specific size, memory for that size is allocated, and then items are added up in different indexes of the array up to that size. 

Arrays hold the same type of data because it's easier to allocate memory when that is the case. For example, if you have an array of size 4, with the type of integer in Java, then the computer can allocate 4 bytes (1 byte for each integer) in memory for you. Last but not least, arrays are zero indexed, which means that indexes are starting at 0 for the first item. See the example for static array below!

![An example of how integers are stored in memory within an array.](/post-images/int-array-example.png)

## Static Arrays

### What are they?

Static arrays are just arrays in which the size doesn't dynamically adjust based on the amount of elements inserted. Once the array reaches max capacity, then you must manually create a new array and copy elements over, or remove elements from the array you have.

### Metaphor / Real Life Connection

Have you ever tried adding a 13th egg into the carton of eggs that holds one dozen? Of course not, because it won't fit and the lid wouldn't close. That's how static arrays work.

You tell the computer, 'hey there, I'd like room for 12 eggs to use in my program. I don't have all the eggs yet, but when they come I will add them, so please save space for me'.

The computer obliges.

The egg man comes and asks you how many eggs would you like, you say 'one dozen', and he gives you twelves eggs, so you add them into your carton - you have reached full capacity.

Now, say that same egg man gives you a bonus egg for buying twelve. You have a few options:
1. Throw it away or tell him no thanks, I have no room
1. You remove one egg from the carton, add the bonus egg, and fry the one you removed so you no longer need to store it anywhere but your belly.
1. You find an 18 egg carton, so you now have room for the 13th egg, and you throw the original 12 egg carton away.

That's how an egg array works in a computer too :).

### Arrays in JS

TODO create code pen

### Basic Operations

*Add an item*
```
const array = [1]
array.push(0)
// javascript also offers unshift and splice to add new items
console.log(array) 
// prints out [1, 0]
```

*Get an item*
```
const array = [0,1,2,3,4,5]
// 0 is pointing to the first index in the array, which then retrieves that value at that location
console.log(array[0]) 
// prints out 0
```

*Delete an item*

```
// Delete first item using JS splice function
const array = [0,1,2,3,4,5]
// start at index 0, delete 1 item
array.splice(0, 1)
// javascript offers shift and pop to remove items as well
console.log(array[0]) 
// prints out [1,2,3,4,5]
```

*Update an item*
```
const array = [0,1,2,3,4,5]
// 0 is pointing to the first index in the array, which we set to a new value
array[0] = -1
console.log(array[0]) 
// prints out -1
```

### Advantages of Static Arrays
- Easily change values inside the array without needing to create or remove memory at runtime
- Allocation is done at compile time and you know the size of the array
- Easy to handle since you don't need to maintain size if you know the data is static within it
- Fast look ups for values
- Quick to add items to the end of an array (that has space of course)

### Disadvantages of Static Arrays
- Can lead to wasted memory if the memory goes un-used throughout the life of the program
- Runs out of memory if you need extra space and fill it up
- Encompassing the two above, one can just summarize as the inability to change the size of the array as needed
- Resizing requires logic and handling of memory allocation on your own
- Slow to insert update/remove/insert in the middle of the array

### Common Uses
- Hold collections of data in programs so you don't have to use a boat load of variables for each

### More Resources
- [Geeks for Geeks](https://www.geeksforgeeks.org/array-data-structure/)
- [CMU CS](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Arrays/arrays.html)

## Dynamic Arrays

* How dynamic arrays / lists use arrays under the hood
* Creating a dynamic array
* Basic operations
* Props/Cons
* Common uses
* Explain dynamic arrays in javascript
* Resources

## Multi-Dimensional Arrays

* Explain arrays of arrays
* Can continue for awhile, but uses a lot of memory
* Explain rows / columns concept
* Explain adding / inserting etc at specific rows or columns
* Basic operations
* Props/Cons
* Common uses
* Explain creating a 2D array in JS
* Resources

# Linked Lists

## Singly Linked List

### What are they?

Linked Lists are linear data structures that don't exist in the same continuous memory location. Instead, each item in the list is called a Node, which then points to its next item. The node structure allows for users to store any type of data, such as other objects, other data structures, or just numbers (Node.data => whatever you would like) and a pointer to its next Node (Node.next => Node or null).

### Real Life Metaphor

A train! 

Imagine you are creating your own train, because you have recently installed a beautiful model train track in your basement. A train track is no good without a train, so you think to your self - hmm, maybe I should start building one. 

------------------------------------

You immediately realize that at the start of every train is the the locomotive, or the car with an engine. So you declare that as the start of your train, buy one, and set it on the track. This is analogous to the head of your train (or train linked list).

Head -> 
------------------------------------

The first car is definitely an improvement, but your model track is long and you want to carry use this train to carry toys along the track - to do so, you need more cars. We'll start with the A car to carry all toys that start with the letter A and add it as the next train from the head. You want to carry toys from A to D, but unfortunately the B car hasn't arrive from Amazon yet, so you hook all the other ones up first.

Head -> A -> C -> D ->
------------------------------------

Your train and track looks great, the kids are happy with the idea of new toys, and your happy the track is no longer empty. But, it's only been one day since ordering your B car - thus you must wait another day to complete your mission.

Finally! The next day arrives, you unpack the B car, and want to add it into its correct spot. There's one problem, your having trouble finding exactly where A is on the train, so you start at the engine car and start working your way through the next cars. Well that was easy, it happened to be the next car! So you easily unhook car C from car A, add B to A, and C to B. Your train is complete! What a relief you didn't have to rebuild the entire thing from scratch.

Your final train looks like so:


Head -> A -> B -> C -> D
------------------------------------

And as you can see, you now have a linked list train with each trailer hooking the cars together.


#### Creating a Linked List Class in JavaScript

<p class="codepen" data-height="372" data-theme-id="dark" data-default-tab="js,result" data-user="avatar-kaleb" data-slug-hash="VwZOWZx" data-preview="true" style="height: 372px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Linked List Implementation">
  <span>See the Pen <a href="https://codepen.io/avatar-kaleb/pen/VwZOWZx">
  Linked List Implementation</a> by Kaleb McKelvey (<a href="https://codepen.io/avatar-kaleb">@avatar-kaleb</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Advantages
- Easy insertion and deletion anywhere in the list without having to re-organize the data structure
- Dynamic size

### Disadvantages
- Random access is difficult
- Slow to find specific item with specific data
- More memory required to store pointers

### Common Uses

### Resources
- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [Geeks for Geeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [CMU](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html)

## Doubly Linked List

* Explain notion of prev/next Node structure
* explain why you would want this
* Basic operations
* Props/Cons
* Common uses
* Resources

## Circular Linked List

* Explain notion of prev/next Node structure
* explain why you would want this
* Basic operations
* Props/Cons
* Common uses
* Resources

# Stacks

## Basic Stack

* explain concept of LIFO
* explain concept with stack of plates
* explain how stacks work
* Basic operations
* pros/cons
* common uses
* Resources

## Min-Max Stack

* explain how you can create a min/max stack with all O(1) times
* pros/cons
* Basic operations
* common uses
* resources

## Queue

* explain concept of FIFO
* explain concept with line at Target
* explain how queues work
* Basic operations
* pros/cons
* common uses
* Resources

## Hash Tables / Maps

# Trees

## Tries

* explain concept of using maps to store characters to new maps, end characters, and end words in a tree structure
* explain concept of implementing one and its use
* basic ops
* pros/cons
* common uses
* resources

## Binary Trees

* explain concept of binary trees
* explain node structure
* visual of one
* explain implementing one
* basic ops
* pros/cons
* common uses
* resources

## Binary Search Trees

* explain concept of binary search trees
* explain node structure
* explain the rules of a BST
* visual of one
* explain implementing one
* basic ops
* pros/cons
* common uses
* resources

## N-Ary Trees

* explain n-ary trees as a concept
* explain node structure
* visual of one
* pros/cons
* common uses
* resources

## AVL Tree

## Red Black Tree

## 2-3 Tree

## Graphs

## Heaps

* explain concept of max/min heaps
* explain the rules
* explain implementation with array and its formulas
* explain node structure
* pros/cons
* common uses
* resources

## Union Sets
