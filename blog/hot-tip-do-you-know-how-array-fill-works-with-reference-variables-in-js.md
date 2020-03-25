---
published: true
cover: /post-images/hot-tip-coffee.jpg
date: '2020-03-25'
title: 'Hot Tip: Do You Know How Array.fill() Works with Reference Variables in JS?'
category: Tech
tags:
  - code
  - javascript
  - hottip
---
# Fill Overview

The [fill function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill), such a simple, and useful utility to use when creating sample test data. When called on an array, it fills the array with the value specified - additionally taking a second parameter to let JS know where to start filling that object in from.

## Filling With Primitives Vars

```
let test = [0,0,0]
test.fill(3);
console.log(test) // [3, 3, 3]

let test = [0,0,0]
test.fill(Infinity, 3);
console.log(test); // [0, 3, 3]
```

Since we are using the primitive value of 3, each index of the array is pointing to its own 3 value.

## Filling with Reference Vars

Now let's say you want to create an array full of empty objects to test an object manipulation function in your codebase.

## Our Intuition Example

```
// we should avoid using new Array outside of test cases imho
let test = new Array(5);
test.fill({});
console.log(test); // [{}, {}, {}, {}, {}]
```

Looks good right? What happens if we change one of the objects?

```
let test = new Array(2)
test.fill({});
console.log(test); // [{}, {}]
test[0].name = "Will Smith";
console.log(test); // [{name: "Will Smith"}, {name: "Will Smith"}]
```

Wait what?!?!

### Gotcha alert

Since we passed in one object literal, which is a by reference, the fill method does indeed fill the array, but to the same object reference. This means a change to one index actually changes all, because they all point to the same object.

***note: the same would happen with an array***

## Utilizing Map - the Right Way

Since we want to create an array of objects with a defined length, here's how you could do it.

```
let test = new Array(2);
// you can disregard the null here, but I feel that it
// makes the code more intentional, as you're filling with null instead of undefined
test.fill(null).map(index => {return {}});
console.log(test); // [{}, {}]
test[0].name = "Will Smith";
console.log(test); // [{name: "Will Smith"}, {}]
```

*** Note: you can checkout my [Codepen](https://codepen.io/avatar-kaleb/pen/PoqyoJX) if a live example works better for you!***


# Concluding Thoughts

The reference variable gotcha when using Array.fill() can be a headache if not caught, especially when creating tests to make sure your app works.

I hope this small example and small post helps you avoid it in the future!

Have a question? Leave a comment!








