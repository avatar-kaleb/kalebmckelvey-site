---
published: true
cover: /post-images/pipe-proposal.jpg
date: 2022-04-27T00:47:01.386Z
title: "Log Rocket Article: Investigating the JavaScript pipe operator proposal"
canonical_url: https://blog.logrocket.com/investigating-javascript-pipe-operator-proposal/
category: Tech
tags:
  - javascript
  - pipe operator
  - writing portfolio
---
The ECMAScript committee continually accepts and encourages innovative ideas that make development easier for JavaScript developers. Although not all ideas are implemented into the language, a particular and often-proposed concept has started gaining traction: the JavaScript [pipe operator](https://github.com/tc39/proposal-pipeline-operator).

The new operator proposal has reached stage two because it enables developers to perform consecutive operations on an input value with better syntax, readability, and convenience compared to current methods.

In this article, we’ll cover the current multiple ways to execute concurrent operations on an input value, the pros and cons of each method, and discuss what introducing the pipe operator might mean for JavaScript developers moving forward.

## The current design paradigms in JavaScript

Within JavaScript today, it’s possible to execute operations consecutively with a few common options — each one with its own trade-offs.

### Deep nesting in JavaScript

Using [deep nesting function](https://en.wikipedia.org/wiki/Nested_function) calls is one way we accomplish consecutive operations. Here’s an example:

```
function exclaim(sentence) {
        return sentence + '!';
}

function addIntroGreeting(sentence) {
        return 'Hello friend, ' + sentence
}

function addInspiration(sentence) {
        sentence + 'You are destinated for greatness!'
}

let sentence = 'live life to the fullest';

const modifiedSentence = addInspiration(addIntroGreeting(exclaim(sentence)).trim());
console.log(modifiedSentence);

// "Hello my friend, live life to the fullest! You are destinated for greatness!"
```

To read the following code, here’s what a dev has to do:

1. Find where the most nested function is and which value is passed to it, scanning to the right
2. Find the function to determine what `exclaim` returns
3. Read to the left, and see `addGreeting`
4. Look through the code to find the function to determine what it returns
5. Look to the right, see that there’s a `trim` call at the same level as `addGreeting`
6. Finally, we look at the last function, `addInspiration`

These steps combined, especially with the simple operations being performed above, are quite difficult to read and keep track of in our heads at one time; reading from left to right without moving your eyes back and forth isn’t possible.

Additionally, once you sprinkle in edits over time, multiple arguments being passed to each function at the different nested levels, combined with complicated operations that require their own cognitive load to process, the code becomes difficult to maintain.

Nesting functions do work, but at what cost to our codebases?

### Using temporary variables in JavaScript

Instead of using deeply nesting function calls, creating temporary variables can alleviate the readability issues above.

[](https://blog.logrocket.com/investigating-javascript-pipe-operator-proposal/)

```
function exclaim(sentence) {
        return sentence + '!';
}

function addIntroGreeting(sentence) {
        return 'Hello friend, ' + sentence
}

function addInspiration(sentence) {
        sentence + ' You are destinated for greatness!'
}

const sentence = 'live life to the fullest';
const exclaimedSentence = exclaim(sentence);
const introAndExclaimedSentence = addIntroGreeting(exclaimedSentence);
const trimmedSentence = introAndExclaimedSentence.trim();
const finalInspirationalSentence = addInspiration(trimmedSentence)
console.log(finalInspirationalSentence)

// "Hello my friend, live life to the fullest! You are destinated for greatness!"
```

The readability of the code above makes sense and is easy to follow, but temporary variables add developer friction, verbose code, and naming variables is time-consuming.

Furthermore, the variable itself could have unexpected values at unexpected times due to async code (callbacks, `async/await`, or promises, for example). It can be tough to trace bugs where the variable has been mutated in multiple places.

Temporary variables are a viable option, but I believe the new pipe operator solves many of these issues without causing these disadvantages, making the process less tedious without the cost of verbosity.

### Method chaining in JavaScript

Another design pattern for executing consecutive operations is method chaining. Developers are familiar with this option, thanks to the JavaScript array methods currently implementing it.

```
console.log([1, 2, 3].map(num => num * 2).filter(num => num > 2));
// [4, 6]
```

This style allows for code to be read left to right, making it easy to understand. It isn’t as verbose as temporary variables and doesn’t require us to read code from the inside out. The question, then, is why isn’t method chaining good enough?

For once, its limited application makes utilizing it throughout all use cases difficult, as the value being operated on must have the methods of the class available.

In the array example above, each returned value from the operations is another array and has access to the array methods — otherwise, we wouldn’t be able to chain them. It also doesn’t work out of the box with some of JavaScript’s other syntax or operators, such as `await`.

## Why use the pipe operator?

Like most things in tech, each common pattern above has advantages and disadvantages. Developer discretion allows us to make tradeoffs depending on the code we’re trying to write, and we do our best to write maintainable, readable code.

It’s quite common in architecture or code review discussions that those with differing opinions aren’t necessarily right or wrong. That’s why so many answers in tech come down to: “it depends.”

The pipe operator takes in all of the options and returns an alternative solution that combines the best of all of them. It isn’t taking any of the old patterns away, and it’s adding an option that can make developers and the language better. A win-win, if you will.

With that being said, let’s dive further into the pipe operator.

## What is the pipe operator proposal in JavaScript?

The pipe operator combines the best of today’s options and signifies that we’re performing consecutive operations (such as function calls) on a value, which can be combined into multiple steps, where the value from the previous operation is passed to the next pipe.

The proposal mentions two different operator syntaxes and functionality but recommends going forward with the [hack pipe operator](https://github.com/tc39/proposal-pipeline-operator). The F# operator, on the other hand, has the same purpose of making concurrent operations simpler with a different syntax (note: it was stymied twice by the TC39 committee so far). The syntax debate comes down to optimizing for the common use cases, making them less verbose, and that’s why the proposal author recommends the hack pipe going forward.

## Using the hack pipe operator

The syntax for the hack pipe operator is quite simple:

* `|>`: the pipe operator
* `%`: the placeholder symbol for the value (this could change before it reaches approval)

Its precedence is the same as arrow functions, assignment operators, and generator operators. This means one should use parentheses when using any operators of the same precedence, otherwise, an error would be thrown.

```
function exclaim(sentence) {
        return sentence + '!';
}

function addIntroGreeting(sentence) {
        return 'Hello friend, ' + sentence
}

function addInspiration(sentence) {
        sentence + ' You are destined for greatness!'
}

const sentence = 'live life to the fullest';

// Nested
const modifiedSentence = addInspiration(addIntroGreeting(exclaim(sentence)).trim());

// pipe operator as 1 line
const finalSentence = sentence |> exclaim(%) |> addIntroGreeting(%) |> %.trim() |> console.log(%);

// pipe operator split per line
const finalSentence = sentence 
  |> exclaim(%) 
  |> addIntroGreeting(%) 
  |> %.trim()
  |> console.log(%);

// "Hello my friend, live life to the fullest! You are destined for greatness!
```

I absolutely love the syntax and feeling of the pipe operator, especially when compared to the nesting option because it truly provides the readability of method chaining without the limited applicability.

You can easily read it left to right and see both where the initial variable starts, as well as the operations of order. I’m a huge fan!

### Why the proposal hasn’t advanced

The full history of the idea and various proposals can be read in the [proposal’s history doc](https://github.com/tc39/proposal-pipeline-operator/blob/main/HISTORY.md). In general, the concern is around its syntax and how it overlaps with other dataflow proposals. Committee members have various levels of support for it, from strongly for to weakly against, and talks of a holistic approach for dataflow operations in JavaScript continue.

To keep up with the latest information, I recommend following the history document and its links.

## Conclusion

The pipe operator proposal has become a topic of interest for web devs. With it being only in [Stage 2](https://github.com/tc39/proposal-pipeline-operator) at the moment, we don’t yet know if it will be approved and added to the language just yet. Further, the past proposals for the [F# pipe operator were rejected](https://github.com/tc39/proposal-pipeline-operator#tc39-has-rejected-f-pipes-multiple-times).

By combining the advantages of common patterns into a syntax that’s both easy to use and learn, I think that the new operator will be of huge use to developers. I recommend reading through the [proposal](https://github.com/tc39/proposal-pipeline-operator) or exploring it in your projects with the [babel plugin](https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator) to learn more.