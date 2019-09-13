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

## Two Beginner Examples

The video lectures uses two examples to demonstrate the power and strategy of dividing and conquering as we solve challenges.

### Linear Search

*Problem:*

> Given an array A with **n** elements, and a specified key to find, output the index where that key is within the array. If there isn't an index, then return `'NOT_FOUND'`

> Find 3:

> `[10, 9, 7, 5, 1, 3]`

> return 5

#### Iterative Solution

_Note: Yes I know that javascript has a findIndex function :D._

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

### Binary Search

*Problem:*

> Given a sorted array A with **n** elements, and a specified key to find, output the index (1 indexed) where that key is within the array or where it would be if it was there.

> Find 7:

> `[1, 3, 5, 6, 7, 9]`

> return 4


#### Recursive Solution

```
function recursiveBinarySearch(list, low, high, key) {
  if (high < low) {
    return low - 1;
  }
  const midPoint =  Math.floor(low +((high-low)/2))
  
  if (key === list[midPoint]) {
    return midPoint
  } else if (key < list[midPoint]) {
    return recursiveBinarySearch(list, low, midPoint - 1, key)
  } else {
    return recursiveBinarySearch(list, midPoint + 1, high, key) 
  }
}

const test = [1, 2, 4, 6, 7, 9]
const result = recursiveBinarySearch(test, 0, test.length-1, 9)

console.log(result);
```

##### Runtime

T(n) = T(Floor(n/2)) + c
T(0) = c

Theta(log2n)

#### Iterative Solution

```javascript
function iterativeBinarySearch(list, low, high, key) {
  
  while (low <= high) {
     const midPoint =  Math.floor(low +((high-low)/2))
    if (key === list[midPoint]) {
      return midPoint
    } else if (key < list[midPoint]) {
      high = midPoint - 1
    } else {
      low = midPoint + 1
    }
  }
  
  return low
}

const test = [1, 2, 4, 6, 7, 9]
const result = iterativeBinarySearch(test, 0, test.length-1, 3)

console.log(result);
```

##### Runtime

Same as recursive, but less stack space!

## Sorting

Sorting is a fundamental computation problem in computer science. It's an important step in many algorithm solutions, which allows you to increase run-time of queries.

Input: Giving a sequence of n elements.
Output: Permutation from 1 to n in non-decreasing order


### Selection Sort

```javascript
function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let minIndex = i;
    let j = i + 1;
    
    for (; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    const tmp = list[i]
    list[i] = list[minIndex]
    list[minIndex] = tmp
  }  
}

const test = [9,8,7,6,5,4,3,2,1]
selectionSort(test)
console.log(test);
```
##### Run Time

O(n^2)

Sorts in place, requires constant amount of memory

### Merge Sort
Divide and Conquer solution

Given an array, split it into two halves, then sort those halves recursively, finally merge it

TODO



##### Run time

O(n log n)

the recursion => log2 N
the splitting / merging => N


## Lower Bounds for comparison based sorting --

algorithms that sorts objects by comparing pairs of them (selection sort or merge) Big Omega(n log n), it isn't always the case it does

## Non-Comparison Based Sorting Algorithms

Counting Sort - array of integers -- or ids from a key of objects, scan array from left to one, and store the cell count of each integer...once filled, we can create the resulting array

TODO

Runtime:
O(m+n)


### Quick Sort

Comparison based algorithm

Running time (n log n) on average

Easy to implement and efficient in practice

Main idea:

given an array -- take the first element, then rearrange and 6 stays in the correct place - this can be done in 1 scan of the array

pivot:
TODO 

##### Runtime

Unbalanced partitians:

T(n) = n + T(n-1):
T(n) = n+(n-1)+(n-2)+....= Big Theta(n^2)

Balanced Partitions:
T(n) = 2(T(n/2)+n
T(n) = Big Theta (n log n)

We analyzed recursion tree to prove this -- can find this in merge sort videos later

in reality, we have some balance and some unbalanced partitions - so the run time depends on the balance of the partitions

we cant guantee we pick pivots for balanced paritions...so instead we do a random pivot from subarray

Random PIVOT Alg:

TODO --

## Runtime

O(n log n) average -- worst O(n^2)

average => averaging is over random numbers used by algorithm, but not over the inputs, this is for ALL arrays

### Equal Elements

-- what happens?

quick sort is slower when there are not many unique elements. Why? the array is always split into two parts...size 0 and n-1, so then
T(n) = n + T(n-1) + T(0) sooo T(n) = big theta(n^2)

TODO new algorithm?

##### implementation issues

Space complexity -> recursive calls => storing info on the stack, even tho array is in place

average recursive => logarithmic

Tail Recursion Elimination

TODO

last video (~2:30)

we want to reduce recursive calls on the longest partitions

##### Intro Quick Sort

Second -- Deterministic pivot selection heuristic
-- like median of the first, middle, and last element

this works in most instances but not all, so to fix this....if the recursion depth exceeds a certain threshold, then the algorithm to heap sort

worst case -> O(n log n)











