---
published: false
cover: /post-images/blackboard-chalk-chalkboard-21696-1-.jpg
date: '2019-06-11'
title: Coursera's Data Structures and Algorithms - Algorithmic Toolbox Week 2
category: Tech
tags:
  - career
  - algorithms
  - coursera
---
_This is post 2 of a long-series of articles taking a Coursera Course on Algorithms - see [Part 1](https://www.kalebmckelvey.com/courseras-data-structures-and-algorithms-algorithmic-toolbox-week-1) if you're interested from starting at the beginning!_


## Why Algorithms Matter

I previously mentioned the reasons algorithm run time is vitally important within our daily lives in [A Rule of Thumb For Calculating an Algorithms Worst Case in Big oh](https://www.kalebmckelvey.com/a-rule-of-thumb-for-calculating-an-algorithms-worst-case-in-big-oh-notation)

Here's the quote that bares repeating:

> If computers and software didn't take time to analyze and optimize the algorithms that run our daily lives, we might never actually get those directions we asked for from Google Maps, Mint might not actually refresh our account categorization, or Twitter wouldn't show the next big POTUS tweet.

> Algorithms are in the cars we drive, the TVs we watch, and buildings we enter. They are used in medical equipment and food production. UPS literally updates you on package progress throughout the delivery cycle, and Netflix takes over the US Internet bandwidth (36%) during peak viewing hours.

> These little things called algorithms are EVERYWHERE, constantly making our lives easier, faster, and more convenient."

It goes to show just how important algorithms that are used everywhere in our life need to run fast!

## Example of Speed Differences in Computer Fibonacci Sequence

Let's just say you have a 1 core, 1 GHz processing speed on your desktop computer at home. You get a programming homework assignment that has 30 different problems for computing fibonacci sequence results. What's the result of fibonacci(30) or fibonacci(50).

Depending on which algorithm you run, you may be waiting quite awhile to actually complete the assignment. The lecture shows for week 2 that if you were to use a Naive recursive algorithm, you could actually be sitting for about 56,000 years if the problem was fibonacci(100). The good news is there are better algorithms out there to compute this, so you won't be doing homework for the rest of your life and then some :).

The next question then is this, how do we measure algorithms?

## Asymptotic && Big O Notations

Before introducing Big O, let's talk a bit why measuring the true performance of an algorithm can be difficult.

### Asymptotic Notation

The true performance would require the answer to a few questions that leads to many messy details, variances, and unknown variables when determining how fast an algorithm runs. We would need to know:

* What is the speed of the computer we're running this on?
* What is the system architecture of the computer matters and how long specific operations would take to run
* Which type of compiler is being used? 
* How does the compiler optimize and run statements?
* What type of memory hierarchy are we working with and how much memory do we have?
* Are we using caches or hard disc look ups?
* And on and on and on and on and on :D

In other words - this CAN BE HARD. Most of the time you don't know these details. This led to those in the computer science community figuring out a better way. *Asymptotic Notation*.

This new notation was created so we had a language to talk about algorithms, without having to be absolutely precise in run-times, and using the knowledge that many changes in algorithm speed are by constant multiples. It really boils down to, how does run time scale with the size of input.

What we really care about is - how long does this algorithm take with different inputs over time?

### Big O Notation

Big O is a specific type of asymptotic notation that clarifies a few things:

* Growth rate - we can see how does runtimes scale with input size
* Communicates growth rates using the same notation between different algorithms
* We don't need specific constant multiples
* We can ignore fine details of the system

It's not perfect when needing a detailed analysis, but does provide benefit for estimations of common algorithms like sorting to quickly see runtime speeds.

If you're interested in the most common notations used, and a few data structure speeds - [check out these charts on Hacker Earth!](https://www.hackerearth.com/practice/notes/big-o-cheatsheet-series-data-structures-and-algorithms-with-thier-complexities-1/)


## Writing Efficient Algorithms

The process for creating highly efficient algorithms can be boiled down to three steps.

1. Naive Algorithm -> slow - This step help's you fully understand and baseline the problem.
1. Analyze the algorithm using standard tools (big O)
1. Optimize -> Improve the existing algorithm by re-arranging the order of operations, cut out work, or use better data structures.

Repeat as necessary! 

The professor gives the following disclaimer for the activity of solving algorithms. "Sometimes the three steps are not enough, sometimes you just need some magic - unique insight or a Lemma to help take it to the next level"

## Wrapping Up Week 2

Week two was still the introductory material for the course, so for week three, I'm hoping to dive more into Greedy Algorithms with the best processes for solving them. The blogs should start becoming more valuable then too, as there will be more code and examples compared to theory!!

Thanks for reading and until next time! 


