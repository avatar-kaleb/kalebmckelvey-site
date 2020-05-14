---
published: false
cover: /post-images/javascript-the-good-parts-series-image.jpg
date: '2020-05-12'
title: 'Series: JavaScript the Good Parts - Chapter 6 - Arrays'
category: Tech
tags:
  - javascript
  - webdev
  - book notes
---
## Arrays

Inherit from the Array.prototype
Gets length property
elements can be of various types

## Array Literals

Creating a new array in literal form uses a simple syntax:

`const empty = []`;

Further, you can add values on declaration:

`const names = ['Will', 'Ashley', 'Uncle Phil'];

"The first value will get the property name '0', the second will get the property name '1', and so on.

```javascript
empty[1]; // undefined;
names[0]; // Will
names.length // 3
```

These declarations can be declared anywhere expressions are allowed.

## Length

"Every array has a length property. Unlike most other languages, JavaScript's array length is not an upper bound."

What in the world does this mean for JS devs? It means that you can set items to the array past its current length index and JS will increase the array's length property to contain the new element - no out of bounds error.

"The length property is the largest integer property name in the array plus 1."

The interesting part here is that the length can be changed, but the array's size in memory doesn't. This is vastly different than other languages but does make sense when you think of the array as an object. It does mean that every element that hasn't been set will be undefined though.

"The [] postfix subscript operator converts its expression to a string using the expressions `toString` method if it has one. That string will be used as the property name. If the string looks like a positive integer that is greater than or equal to the array's current length and is less than 4,294,965, then the length of the array is set to the new subscript plus one.

```javascript
const array = [0, 1];
array.length; // 2;

array[150] = 150;
array.length = 151;

array[149]; // undefined
```

You can manually update the length property, when making it smaller, it will delete the items above the number set.

```javascript
const array = [0, 1, 2, 3, 4];
array.length; // 5

array.length = 2;
console.log(array); // [0, 1];
```

## Delete

Technically you can delete positions in the array using the delete operator;

```javascript
const array = [0, 1, 2];

// don't do this
delete array[0];
```

But this leaves a nasty hole in the array, which we don't want.

Other alternatives are much better!

### Splice - Mutable Option

Arrays come with the `splice` method, which mutates the array and updates the positions of items within it. 

This can present in problem in your web applications - why? Because as we have learned, arrays and objects are reference types. Using mutable array methods causes data to change in various places throughout the app to the same reference, which can confuse when trying to track the flow of data changing. 

Secondly, many frameworks use `===` equality checks to determine whether data has changed. When we use the splice method, frameworks see the same object reference even though the data has changed.

This is why immutable manipulation is preferred over splice.

```javascript
const array = [0, 1, 2];

// deletes first index
array.splice(0, 1);
console.log(array); // [1, 2];

```

###  Slice & Spread - Immutable Options

Immutable means that we are not changing the initial array when deleting or adding elements, instead we are creating a new array with the updated data.

##### Slice & Spread

```javascript
let array = [0, 1, 2];

// returns a copy of the array from index 1
const newArray = array.slice(1);
console.log(newArray); // [1, 2];

// deletes index 1
const anotherNewArray = [...array.slice(0, 1), ...array.slice(2)];
console.log(anotherNewArray); // [0, 2]

// array stayed the same
console.log(array); // [0, 1, 2]

````

## Enumeration

The book states two options to iterate through arrays, `for...in` and `for` loops. He doesn't recommend `for...in` because it doesn't guarantee order and the prototype issues we talked about in [chapter 3](https://www.kalebmckelvey.com/blog/series-java-script-the-good-parts-chapter-3-objects).

There are many other ways to do so with some being added since the book was written: `forEach`, `map`, `for...of`, `do...while`, `while` and even label with break statements.

You can read about them on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) and see the examples.

The methods are flexible with regards to what you're trying to do. Looping through each without changing, `for...of` or `forEach` are great. Mapping items in an array to a new structure? `Map` is the way to go!

If you have any questions on specific situations please leave a comment!

## Methods

He talks through adding methods to the prototype chain of Array to help with functionality in your applications. It is advised to not do this throughout the web dev community.

There are lots of great built-in methods, many being added after this book that you can read up on. [Check them out here!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Dimensions

The last section of this chapter talks through the lack of initializing an array to a specific size of values.

The `fill` method with amp can make this simple. [Check out my article](https://www.kalebmckelvey.com/blog/hot-tip-do-you-know-how-array-fill-works-with-reference-variables-in-js) on using it correctly and you will be covered :D. 

## Links
- [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Arrays.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

Thank you for reading!





