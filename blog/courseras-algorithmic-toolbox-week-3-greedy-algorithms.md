---
published: true
cover: /post-images/blackboard-chalk-chalkboard-21696-1-.jpg
date: '2019-09-11'
title: Coursera's Algorithmic Toolbox Week 3 - Greedy Algorithms
category: Tech
tags:
  - career
  - algorithms
---
When solving problems, it's important to have different types of strategies that can be used to find optimal solutions. One of those strategies, Greedy Algorithms, is the topic of week 3.
 
## What are Greedy Algorithms?
 
Greedy algorithms are one type of algorithm in our toolbox for solving problems, they can be broken down into four main steps:
 
1. Make a greedy choice
1. Prove choice is a safe choice
1. Reduce to a subproblem
1. Iterate
1. Optimize (optional if needed)
 
*Largest Number Example Problem For Steps Below*
 
Given a list of single-digit numbers, create the largest possible number from it.
 
```
Input: 8 7 6 1 3 2 4 5 9
Output: 987654321
```
 
### Make Greedy Choice & Prove It's Safe
 
Begin the problem by trying to determine a greedy choice you can make, such as scan the array and find the largest number within it, append it to the result and remove it from the original array.
 
This optimal choice will allow us to find the largest number possible for an array of single-digit integers.
 
The lecture states to first find a few greedy choices, determine which is optimal, then prove it. If it can be proven then it is a safe move, and we can use it to solve the problem.
 
### Reduce to Subproblem, Then Solve & Iterate
 
The greedy strategy re-uses its safe move over and over, on smaller chunks of the problem, leading to a solution.
 
For our largest number array example, first, the array has 9 digits. 9 is found as the largest digit and removed.
 
We break it down into a subproblem of now 8 digits. We find the next highest number, 8, and append it to the result. `98`.
 
As this continues, the problem continues to be reduced in size while our optimal greedy choice helps us solve it!
 
### Optimize
 
As Donald Knuth said, "Premature optimization is the root of all evil." 
 
One wonderful part of Computer Science is the ability to find better and better solutions as you learn from previous mistakes or discoveries. Algorithms can be changed to run faster, if necessary. 
 
This optional step of Greedy Algorithms can be used when solving challenging problems that require top performance. 
 
## Closing Thoughts
 
Solving algorithm problems with the Greedy Algorithm strategy can be a very useful and simple technique for Software Engineers. The lecture provided great information on other types of problems that can be solved, the min refill problem, or the fractional knapsack. It gave good overviews of the runtimes and analysis of algorithms to solve them, and then asked for us to solve a few in the programming assignment.
 
Overall - the program assignments take me back to doing my assignments at the JMU Computer Labs, the nostalgia is unreal and I look forward to refreshing on all of the knowledge my professors taught us back then!
 
Stay tuned for week 4!!
 
