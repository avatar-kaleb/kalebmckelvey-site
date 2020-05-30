---
published: false
cover: /post-images/javascript-the-good-parts-series-image.jpg
date: '2020-05-30'
title: 'Series: JavaScript the Good Parts - Chapter 4 - Functions'
canonical_url: ''''''
category: Tech
tags:
  - javascript
  - webdev
  - book notes
---
Functions - one of the best features of our beloved JS language, allowing us to re-use code, abstract information, and construct a beautiful piece of art that runs a web application.

Chapter 4 of the book is all about functions - let's start!

## Function Objects

In JavaScript, functions are a special type of object. As discussed in [chapter 3](https://www.kalebmckelvey.com/blog/series-java-script-the-good-parts-chapter-3-objects) - every objects are linked to a prototype object. 

"Function objects are linked to `Function.prototype` (which is itself linked to `Object.prototype`). Every function is also created with two additional hidden properties: the function's context and the code tat implements that function's behavior."

Functions are created with a `prototype` property, which is linked to "an object with a constructor property whose value is the function. This is distinct from the hidden link to `Function.prototype`"

We can use functions as we can use any object in the language. We can assign them to variables, as object properties, they can be returned, they can be parameters, and they too can have additional methods.

Douglas Crockford states that the ability to be invoked is what makes them special objects.

## Function Literal

Functions are created with function literals, which has four parts, and can "appear anywhere that an expression can appear."

_Note: An additional feature in newer JS: [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)._


1. `function` reserved word
1. (optional) function name
1. parameters (arguments passed to the function) in parenthesis
1. set of statements within curly braces (function body)

```javascript
const add = function add(a, b) {
   return a + b;
}

add(1, 2); // returns 3
```

It's a best practice to use named functions to help with debugging and stack traces.

Additionally, JavaScript grants us the powerful ability of creating _closures_  - a very important concept and expressive pattern to recognize. JS allows us to use this by creating functions within other functions, but allowing inner functions to access the variables from the outer function - the inner function object is linked to the outer context.


```javascript
const math = function(a, b, type) {
   const add = function add() {
      // I can still access a and b in the inner function
      return a + b;
   }

   const subtract = function subtract() {
      // I can still access a and b in the inner function
      return a - b;
   }

   if (type === 'MATH') {
      return add(a, b);
   }
}

math(1,2, 'MATH') // returns 3

```

