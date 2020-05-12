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

What in the world does this mean for JS devs? It mens that you can set items to the array past its current length index and JS will increase the array's length property to contain the new element - no out of bounds error.

"The length property is the largest integer property name in the array plus 1."

The interesting part here is that the length can be changed, but the array's size in memory doesn't. This is vastly different than other languages, but does make sense when you think of the array as an object. It does mean that every element that hasn't been set will be undefined though.

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
const array = [0,1,2,3,4];
array.length; // 5

array.length = 2;
console.log(array); // [0,1];
```

## Delete

Technically you can delete positions in the array using the delete operator;

```javascript
const array = [0,1,2];
delete array[0];
```

But this leaves a nasty hole in the array, which we don't want.

There are other alternatives that are much better!

### Mutable Option

Arrays come with the `splice` method, which mutates the array and updates the positions of items within it. 

This can present in problem in your web applications - why? Because as we have learned, arrays and objects are reference types. Using mutable array methods causes data to change in various places throughout the app to the same reference, which can cause confusion when trying to track the flow of data changing. 

Secondly, many frame works use `===` equality checks to determine whether data has changed. When we use the splice method, frameworks see the same object reference even though the data has actually changed.

This is why immutable manipulation is preferred over splice.

```javascript

```

### Immutable Options

Immutable means that we are not changing the initial array when deleting or adding elements, instead we are creating a new array with the updated data.

##### Slice & Spread

```javascript

````

## Links
- Arrays
- Arrays.length
- Splice
- Spread
- Slice





