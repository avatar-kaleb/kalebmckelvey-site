---
published: false
cover: /post-images/blackboard-chalk-chalkboard-21696-1-.jpg
date: '2019-09-12'
title: Coursera's Algorithmic Toolbox Week 4 - Divide & Conquer Algorithms
category: Tech
tags:
  - career
  - algorithms
---
Divide & Conquer as a term has been around for a long time - it was used in wars to multiple defeat smaller groups instead of taking on the whole army at once. Although programmers aren't at war against enemy knights or soldiers, we are battling our computer's limitation in processing power and need a way to win the problem solving war!

## High Level Overview

You can generalize that same strategy in solving algorithm problems with the following steps.

### 1. Breaking Down the Problem

Divide and conquer algorithms breaks problems down into one or more subproblems so they can be solved on their own.

This is just another type of technique or strategy one can used to solve a problem, but can't be used for every problem :). Subproblems must be the same type as the original. 

The lecture uses three visual diagrams to represent this.
1. A large rectangle broken down into smaller rectangles that aren't overlapping *(good)*
1. A large rectangle broken down into squares, triangles, and rectangles *(not good)*
1. A large rectangle broken down into rectangles that overlap *(not good)*

Further, many argue that when breaking down problems in the divide and conquer strategy - the subproblem should be divided into a constant fraction of the original problem (like 1/2 or 1/4) etc.

### 2. Solving Each Subproblem

After a problem is broken down, each subproblem (smaller rectangle) can be solved on its own.

Since the problems are broken into smaller pieces but of the same type, recursion is the natural choice for solving each subproblem in the same divide and conquer mentality. It's not required though, meaning we can re-write it into an iterative solution.

### 3. Combine Results

Once we solve each, then we combine the solutions back together and answer the main problem (large rectangle)

## Two Examples

The video lectures uses two examples to demonstrate the power and strategy of dividing and conquering as we solve challenges.

### Linear Search

Problem:

> Given an array A with **n** elements, and a specified key to find, output the index where that key is within the array. If there isn't an index, then return `'NOT_FOUND'`

> Find 3:

> `[10, 9, 7, 5, 1, 3]`

> return 5

#### Iterative Solution

_Note: Yes I know that javascript has a find function :D._

```javascript
function linearSearch(list, key) {
  let foundIndex = null
  
  list.forEach((item, index) => {
    if (item === key) {
      foundIndex = index
    }
  })
  
  if (foundIndex === null) {
    return 'NOT_FOUND'
  } else {
    return foundIndex
  }
}

const test = [2, 4, 5, 1, 4, 3, 9]
const result = linearSearch(test, 9)

console.log(result);
```

##### Runtime

There's N elements in the array, you can search to the end, so Big O(n)

#### Recursive Solution

```javascript
function linearSearch(list, low, high, key) {
  if (high < low) { 
    return 'NOT_FOUND'
  }
  
  if (list[low] === key) {
    return low
  }
  
  return linearSearch(list, low + 1, high, key)
}

const test = [2, 4, 5, 1, 4, 3, 9]
const result = linearSearch(test, 0, test.length, 9)

console.log(result);
```

##### Runtime

The professor recommends defining a **recurrence relation**, defined as an equation recursively defining a sequence of values.

He uses the following equation to define worst-case time for the recursive search algorithm:

`T(n) = T(n-1) + c`
`T(0) = c`

Big O(n)





