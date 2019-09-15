---
published: false
cover: /post-images/blackboard-chalk-chalkboard-21696-1-.jpg
date: '2019-09-15'
title: Coursera's Algorithmic Toolbox Week 5 - Dynamic Programming P1
category: Tech
tags:
  - algorithms
  - career
  - ''
---
What is dynamic programming?

Cashier Change Problem

Input: Integer Money and positive integers coin1,...coind
Output: Min number of coins with denominations coin1....coind that changes money exactly


## Greedy Change

Change -> empty collection of coins
while money > 0:
  coin -> largest denomination that does not exceed money
  add coin to Change
  money = money - coin
return Change

This fails in Tanzia when changing 40 cents, compared to in the US it works

## Recursive Change

if money = 0
  return 0

for i from 1 to coins
   if money >= coin
      numCoins -> recursiveChange(money - coin[i], coins)
      if (numCoins+1 < minNumCoins)
         minNumCoins = numCoins + 1
return min NumCoins

super slow bc so many recursions !

optimal coin combination for 30 cents....computed trillions of times


## Dynamic Programming

Programming in Dynamic Programming -> when Richard Bellman came up with the idea he was trying to hide what he was doing from secretary of defense, so he called it Programming and it wa dynamic so congress couldn't object.

minNumCoins = 0
for m from 1 to money
  MinNumCoins(m) -> infinitiy

  for 1 to coins {
     if (m >= coin[i]) {
        NumCoins = MinNumCoins(m-coin[i]) + 1
         
        if (NumCoins < MinNumCoins(m) {
            minNumCoins(m) = numCoins
        }
     }
return MinNumCoins(money)

### Edit Distance

5 min video for computing edit distance

output alignment -> backtracking nodes then we can optimally find the distance for the edit distance
