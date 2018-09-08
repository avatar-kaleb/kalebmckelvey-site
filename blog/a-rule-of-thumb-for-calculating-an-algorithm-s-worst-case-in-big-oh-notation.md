---
cover: /post-images/ruleof-thumb-for-big-oh.jpg
date: '2018-09-06'
title: A Rule of Thumb for Calculating an Algorithm's Worst Case in Big Oh Notation
category: Computer Science
tags:
  - big oh
  - algorithm design
  - algorithm analysis
---
Lately I've been working to refresh and grow in my skills from Computer Science because just how fascinating it really can be. 

## Algorithms are everywhere!
An algorithm is defined a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.

If computers and software didn't take time to analyze and optimize the algorithms that run our daily lives, we might never actually get those directions we asked for from Google Maps, Mint might not actually refresh our account categorization, or Twitter wouldn't show the next big POTUS tweet.

Algorithms are in the cars we drive, the TVs we watch, and buildings we enter. They are used in medical equipment and food production. UPS literally updates you on package progress throughout the delivery cycle, and Netflix takes over the US Internet bandwidth (36%) during peak viewing hours.

These little things called algorithms are EVERYWHERE, constantly making our lives easier, faster, and more convenient.

## Why Algorithms Matter to Me

I decided to turn to *The Algorithm Design Manual * to refresh on the proper ways to analyze and design algorithms. Because as our team helps make GE produce products faster through web applications, the small performance gains can make a huge difference.

My goal is first refresh on the best practices to analyze our applications, then start driving those improvements with the help of the team - it should be pretty exciting! We've been fortunate that most of our data sets are in the lower range, but still, improvements can and will be found :).

## Rule of Thumb for Software Engineers for Big OH

Here's a snippet from the book that I thought may be worth sharing on page 43:

"A basic rule of thumb in Big Oh analysis is that worst-case running time follows from multiplying the largest number of times each nested loop can iterate..."

Example used on the same page of the book:

```javascript
insertion_sort(int s[], int n)
	For (i=1; i<n; i++) {
		j = i;
		While((j > 0) && (s[j] < s[j-1])) {
			swap(s[j], s[j-1])
			j = j-1;
	}
}
```

"How often does the inner while loop iterate? This is tricky because there are two different stopping conditions: one to prevent us from running off the bounds of the array (j > 0) and the other to mark when the element finds its proper pace in the sorted order (s[j] < s[j-1]). Since worst-case analysis seeks an upper bound on the running time, we ignore the early termination and assume that this loop always goes around i times. In fact, we can assume it *always* goes around n times since i < n. Since the outer loop goes around n times, insertion sort must be a quadratic-time algorithm, i.e. O(n^2)."

TLDR:

We assume that the inner while loop always runs i times, which is n times, since i < n, and the outer for loop goes n times. With both loops running n times, n*n = n^2.

*This can sometimes be a generous analysis, meaning that it can cause your reasoning to give worst case of higher order than it implies - either way for simple algorithms, why not take advantage of it!*

## Concluding thoughts

Algorithm analysis can be fun if we remember the reason we're doing it - to make our apps faster, usable, and productive!

Thanks for reading!
 

