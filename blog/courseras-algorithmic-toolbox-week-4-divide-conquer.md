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
Divide & Conquer as a term has been around for a long time - it was used in wars to multiple defeat smaller groups instead of taking on the whole army at once.

Divide and conquer algorithms breaks problems down into one or more subproblems so they can be solved on their own.

This is just another type of technique or strategy one can used to solve a problem, but can't be used for every problem :). Subproblems must be the same type as the original. 

### Breaking Down the Problem

The lecture uses three visual diagrams to represent this.
1. A large rectangle broken down into smaller rectangles that aren't overlapping *(good)*
1. A large rectangle broken down into squares, triangles, and rectangles *(not good)*
1. A large rectangle broken down into rectangles that overlap *(not good)*

### Solving Each

After a problem is broken down, each subproblem (smaller rectangle) can be solved on its own.

Since the problems are broken into smaller pieces but of the same type, recursion is the natural choice for solving each subproblem in the same divide and conquer mentality. It's not required though, meaning we can re-write it into an iterative solution.

### Combine Results

Once we solve each, then we combine the solutions back together and answer the main problem (large rectangle)
