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

_Note: I will be talking about static arrays, but all of my code examples are in JavaScript, which doesn't actually have static arrays since they are dynamic by default 🚀._

TODO: GIF LETS GET THIS PARTY STARTED

TODO --- explain memory in a computer

- - -

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
2. You remove one egg from the carton, add the bonus egg, and fry the one you removed so you no longer need to store it anywhere but your belly.
3. You find an 18 egg carton, so you now have room for the 13th egg, and you throw the original 12 egg carton away.

That's how an egg array works in a computer too :).

### Arrays in JS

TODO create code pen

### Basic Operations

_Add an item_

```
const array = [1]
array.push(0)
// javascript also offers unshift and splice to add new items
console.log(array) 
// prints out [1, 0]
```

_Get an item_

```
const array = [0,1,2,3,4,5]
// 0 is pointing to the first index in the array, which then retrieves that value at that location
console.log(array[0]) 
// prints out 0
```

_Delete an item_

```
// Delete first item using JS splice function
const array = [0,1,2,3,4,5]
// start at index 0, delete 1 item
array.splice(0, 1)
// javascript offers shift and pop to remove items as well
console.log(array[0]) 
// prints out [1,2,3,4,5]
```

_Update an item_

```
const array = [0,1,2,3,4,5]
// 0 is pointing to the first index in the array, which we set to a new value
array[0] = -1
console.log(array[0]) 
// prints out -1
```

### Advantages of Static Arrays

* Easily change values inside the array without needing to create or remove memory at runtime
* Allocation is done at compile time and you know the size of the array
* Easy to handle since you don't need to maintain size if you know the data is static within it
* Fast look ups for values
* Quick to add items to the end of an array (that has space of course)

### Disadvantages of Static Arrays

* Can lead to wasted memory if the memory goes un-used throughout the life of the program
* Runs out of memory if you need extra space and fill it up
* Encompassing the two above, one can just summarize as the inability to change the size of the array as needed
* Resizing requires logic and handling of memory allocation on your own
* Slow to insert update/remove/insert in the middle of the array

### Example Uses

* Hold collections of data in programs so you don't have to use a boat load of variables for each

### More Resources

* [Geeks for Geeks](https://www.geeksforgeeks.org/array-data-structure/)
* [CMU CS](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Arrays/arrays.html)

- - -

## Dynamic Arrays

### What are they?

Dynamic arrays are very similar to static arrays, except for one distinguishing feature. They resize automatically for you! 
This means you don't need to know the size of your data before hand or worry about running out of space, because the array dynamically changes its size based on the amount of data it has.

### How Are They Managed?

Generally, dynamic arrays are actually an abstraction on top of arrays to handle the resizing and copying for you. By this I mean that, under the hood of a dynamic array is just a static array managed by own class and functions.
As the amount of data grows and reaches the current internal array's capacity, the abstracted data structure then creates a new static array that is double the size of the current one, and copies all values into the new one. You of course, don't need to worry about this part, because that is where the beauty of its abstraction comes into play.

To be a bit more clear, let's walk through a hypothetical implementation of the JavaScript array (which behaves dynamically).

```
// first create a new array 
const array = []; 
// hypothetically, internally JavaScript creates an internal static array with length of 2.

// let's add two new values
array.push(0);
array.push(1);
// array= [0,1].

// now we are at the internal capacity, but from a developer perspective you don't really care. You just want to add another value, so that's what you do.array.push(2);

// Javascript internally determines that the original static array can't hold the value 2, so it does the following:
// 1. creates a new array with length of 4
// 2. copies 0,1 into that new array
// 3. sets the class property to that new array
// 4. adds the new value, 2, to the new size 4 array
// array = [0,1,2]
```

### TODO: Metaphor / Real Life Connection

### Basic operations

The basic operations are the same as the static array, please scroll up to see them :).

### Advantages

* Adding new values to the end still mostly fast
* Fast lookups and updates
* Resizes for you!

### Disadvantages

* Resizing can take time at large data sizes when appending new items
* Slow deletion/inserts in the middle of the array* What's the best way to create new array sizes? Doubling can lead to wasted space

### Common uses

Same common uses as static arrays, please check those out above if interested!

### Resources

* [Geeks for Geeks](https://www.geeksforgeeks.org/how-do-dynamic-arrays-work/)
* [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_array)

- - -

## Multi-Dimensional Arrays (Matrices)

### What are they?

You can think of multi-dimensional arrays as just an array, of arrays - like a table. This simple explanation does make it sound like they are easy to grasp, but I find that they can be a bit difficult to wrap your head around the first time.

Why is that? 

Because understanding how to find specific indexes within a 2D or 3D array can be confusing when doing so for the first time. I'm hoping I can break it down to help!

### Rows / Columns

Before jumping into the basic operations in a 2D (or more) array, I want to dive deep into the concept of rows and columns, and how I keep track of which I'm indexing. Let's start with a picture.

![A table representing the values and indices of a 2D matrix, with values 0,1,2,3,4,5,6,7,8](/post-images/2d-array-table.png)

As you can see, each row and column is representing an index, which can be used to find a specific value.

I think of rows as the first layer and columns as second, which helps me remember that to reference rows, I only need one index, while I need two to reference a column WITHIN a row, because in our code we first create the rows with arrays inside of them for columns.

The basic operations below should help drive this point home, and you will see from the comments when and where to use indexes.

### TODO: Metaphor / Real Life Connection

### Basic Operations

Explain adding / inserting etc at specific rows or columns* Explain creating a 2D array in JS

* looping
* Getting neighbors

### Advantages

### Disadvantages

### Common uses

### Resources

# Linked Lists

## Singly Linked List

### What are they?

Linked Lists are linear data structures that don't exist in the same continuous memory location. Instead, each item in the list is called a Node, which then points to its next item. The node structure allows for users to store any type of data, such as other objects, other data structures, or just numbers (Node.data => whatever you would like) and a pointer to its next Node (Node.next => Node or null). The first item in the list is called the head node.

### Real Life Metaphor

A train! 

Imagine you are creating your own train, because you have recently installed a beautiful model train track in your basement. A train track is no good without a train, so you think to your self - hmm, maybe I should start building one. 

You immediately realize that at the start of every train is the the locomotive, or the car with an engine. So you declare that as the start of your train, buy one, and set it on the track. This is analogous to the head of your train (or train linked list).

Head -> 

The first car is definitely an improvement, but your model track is long and you want to carry use this train to carry toys along the track - to do so, you need more cars. We'll start with the A car to carry all toys that start with the letter A and add it as the next train from the head. You want to carry toys from A to D, but unfortunately the B car hasn't arrive from Amazon yet, so you hook all the other ones up first.

Head -> A -> C -> D ->

Your train and track looks great, the kids are happy with the idea of new toys, and your happy the track is no longer empty. But, it's only been one day since ordering your B car - thus you must wait another day to complete your mission.

Finally! The next day arrives, you unpack the B car, and want to add it into its correct spot. There's one problem, you're having trouble finding exactly where A is on the train, so you start at the engine car and start working your way through the next cars. Well that was easy, it happened to be the next car! So you easily unhook car C from car A, add B to A, and C to B. Your train is complete! What a relief you didn't have to rebuild the entire thing from scratch.

Your final train looks like so:

Head -> A -> B -> C -> D

And as you can see, you now have a linked list train with each trailer hooking the cars together.

### Creating a Singly Linked List Class in JavaScript

<p class="codepen" data-height="372" data-theme-id="dark" data-default-tab="js,result" data-user="avatar-kaleb" data-slug-hash="VwZOWZx" data-preview="true" style="height: 372px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Linked List Implementation">
  <span>See the Pen <a href="https://codepen.io/avatar-kaleb/pen/VwZOWZx">
  Linked List Implementation</a> by Kaleb McKelvey (<a href="https://codepen.io/avatar-kaleb">@avatar-kaleb</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Advantages

* Easy insertion and deletion anywhere in the list without having to re-organize the data structure
* Dynamic size

### Disadvantages

* Random access is difficult
* Slow to find specific item with specific data
* More memory required to store pointers

### Example Uses

* React uses Linked Lists for it's Fiber reconciliation algorithm
* Used to implement stack and queues (see those below)
* Adjacency list implementation for sparse graphs

### Resources

* [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
* [Geeks for Geeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
* [CMU](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html)

## Doubly Linked List

### What Are They?

The idea and concept of Doubly Linked list are very similar, with only two key differences. The first being, instead of each Node pointing to the next Node in the list, it also includes a pointer to it's previous Node as well. Secondly, the last node of the linked list is called the tail node. 

Having both of these pointers and both nodes allows us to easily traverse and manipulate the list without keeping track of previous nodes and also the ability to traverse in both directions.

### Creating a Doubly Linked List Class in JavaScript

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="avatar-kaleb" data-slug-hash="MWWYeGx" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Doubly Linked List Implementation">
  <span>See the Pen <a href="https://codepen.io/avatar-kaleb/pen/MWWYeGx">
  Doubly Linked List Implementation</a> by Kaleb McKelvey (<a href="https://codepen.io/avatar-kaleb">@avatar-kaleb</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Advantages

* Inserting / Deleting a node in the middle of the list is very easy if a node is given to insert it before or after
* Traversal from either direction is much easier, and no need to track prev nodes

### Disadvantages

* More complex logic for maintaining pointers and the lists for certain operations
* Extra memory required for the extra pointer

### Example Uses

### Resources

* [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list)
* [Geeks for Geeks](https://www.geeksforgeeks.org/doubly-linked-list/)

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

So far in the article, we've talked through linear data structures. Structures in which store data in a straight line type of fashion, but alas, we have arrived at our first non linear structure - Trees.

Data within a tree is stored hierarchically, meaning we can organize the data with relationships that have a hierarchy. Things like your family tree or an NFL football team. In a football team, you have the head coach, who under him or her has assistances, who then help coach every player. Even players can have hierarchy, since it is common to have captains or the quarterback be responsible for leadership over the teammates.

In Computer Science, we have MANY different types of data structures that are tees but implement them or organize data in specific ways. But before diving too deeply into the specific structures, there are a few common characteristics and terminology one should be comfortable with first.

Picture first, then definitions :).

![A tree data structure of an nfl team hierarchy.](/post-images/nfl-team-tree.png)

_Root_

The topmost node of the tree 

* Team Owner

_Leaf_

Any node without children

* QB

_Parent_

Given a node that is a child, the parent is the node in which the child is referenced from. An immediate ancestor of a given node. 

* Given the QB node, its parent is the Team Captain

_Child_

An immediate descendant from a parent node.

* Given the Team Captain, a child is the QB node

_Sibling_

Given a node, its children are nodes that reference the same parent.

* The `QB node` has a sibling of the other `QB`

_Ancestor_

Given a node, its ancestors are the nodes reached by traveling towards the root.

* Given the `Head Coach Node`, its ancestor is the `Team Owner`

_Descendant_

Given a node, its descendants are the nodes reached by traveling away the root.

* Given the `Head Coach Node`, a descendant is the `QB coach`

_Path_

A sequential list of nodes and edges that gets you from one node to another.

_Node_

A data structure that has pointers to other nodes in the tree and a data structure that represents data in the tree node, like a number value.

_Edge_

A connection from one node to another.

_Degree_

The number of children a node has. 

_Depth_

The distance of a given node from the root.

## Binary Search Trees

### What Are They?

Binary Search Trees are a specialized tree data structure, in which each node only points to at most two other nodes, typically tracked with left and right pointers, and includes only unique data points. Their are a few rules mentioned below that must be true for a tree to be a BST.

![Representation of a binary tree with 6 nodes.](/post-images/binary-tree-example.png)

The letters represent the val of each node, which could be another data structure depending on the use case.

### Rules of Binary Search Tree

The following must be true for each and every node in a BST:

1. All keys in the given node's left subtree are less than the given node's key
1. All keys in the given node's right subtree are less than the given node's key
1. Each left and right subtree must also be a BST
1. Each node must have a unique data point


### Creating One in Javascript

<p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="avatar-kaleb" data-slug-hash="eYYmROL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Binary Search Tree - Non Self-Balancing">
  <span>See the Pen <a href="https://codepen.io/avatar-kaleb/pen/eYYmROL">
  Binary Search Tree - Non Self-Balancing</a> by Kaleb McKelvey (<a href="https://codepen.io/avatar-kaleb">@avatar-kaleb</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Full and Complete Binary Search Trees

#### Complete:

A BST is complete, if every single level of the tree is complete filled except for possibly the last level, where all nodes are as far left as possible.

#### Full:

A BST is full if every single node other than the leaves of the tree has two children nodes.

_The diagram given above for BSTs is both full and complete._

### Metaphor

### Advantages
- Insert, delete, search can all be implemented in O(log n) which is very helpful for large data sets

### Disadvantages
- To maintain balance requires extra effort (see other tree structures below), but should be done to maintain fast operations
- Implementation in general is more complex than some of the other data structures
- Extra memory to store pointers to other tree nodes

### Example Uses

- Sorted data structures with large data sets
- Indexing for Databases
- Arithmetic Expressions

### Resources
- [Geeks for Geeks](https://www.geeksforgeeks.org/binary-- search-tree-data-structure/)
- [My Code School](https://www.youtube.com/watch?v=pYT9F8_LFTM)
- [Princeton CS](https://algs4.cs.princeton.edu/32bst/)

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

## Tries

* explain concept of using maps to store characters to new maps, end characters, and end words in a tree structure
* explain concept of implementing one and its use
* basic ops
* pros/cons
* common uses
* resources

## Heaps

* explain concept of max/min heaps
* explain the rules
* explain implementation with array and its formulas
* explain node structure
* pros/cons
* common uses
* resources

## Graphs

## Union Sets
