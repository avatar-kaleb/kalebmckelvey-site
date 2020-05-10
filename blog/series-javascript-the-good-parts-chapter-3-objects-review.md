---
published: false
cover: /post-images/javascript-the-good-parts-series-image.jpg
date: '2020-05-07'
title: 'Series: JavaScript the Good Parts - Chapter 3 - Objects Review'
category: Tech
tags:
  - javascript
  - webdev
  - book notes
---
Chapter 3 of *JavaScript: The Good Parts* by Douglas Crockford is all about objects. This essential part of the language makes JS special due to the flexibility and quickness one can create data maps, abstractions, and more.

Let's dive in!

## What are Objects in JS?

"Objects in JavaScript are mutable keyed collections."

"An object is a container of properties, where a property has a name and value. A property name can be any string, including the empty string. A property value can be any JavaScript value except for `undefined`."

They are SO useful for creating collections of data and organizing it throughout an web app. They can be nested within each other and since Arrays, Functions, and regular expressions are objects, they too can be contained and mapped efficiently.

Objects can inherit properties from other objects through their prototypes - something we will dive into more deeply later in the article!

## Object Literals

Creating a new object can be done in different ways - using the object literal syntax is my favorite. It's a new variable with a pair of curly braces. You can optionally have comma-separated key-value pairs within, which makes a very nice flexible map. 

You can nest arrays, objects, functions, and other expressions within the top object as well!

*note: You can use omit the `''` in keys when they are legal non-reserved JS word.

```javascript
const person = { 
  'full-name': 'Kaleb McKelvey', 
  first: 'Kaleb', 
  last: 'Kaleb',
  yearsAsADev: 7,
  companies: [
    {
      name: 'Shentel
    }
    {
      name: 'GE'
    },
    {
      name: 'Northwestern Mutual'
    },
    {
      name: 'Disney'
    }
  ],
}
```

## Retrieving Object Values

There are two options for retrieving values from an object. Both examples are using the created object above to retrieve values from.

### Dot Notation

Dot notation makes an easy readable access path, but can only be used on property names that are legal non-reserved JS words.

`const firstCompany = person.companies[0];`

### String Expressions in `[]`

For dynamic or non legal JS words, we must use the `[]` access type. I agree with Douglas Crockford here in that this notation creates less readable code, so push for dot notation instead!

`const fullName = person['full-name']`

### Avoiding Undefined Errors

There are two cases that are really important for JS devs to be weary of.

#### Undefined Properties

If you access a property that isn't defined, a value of undefined is returned. Further, if you try to access a property that's nested within an undefined property, a type error is through. 

`const age = person.age //undefined`

`const birthDay = person.age.dob // type error - can't access dob of undefined`

We can handle defaults utilizing the `||` and avoid errors using `&&` or optional chaining in conjuniction with nullish coalescing.

```javascript

/* 
* Defaults
*/
// or 
const age = person.age || 18; // default to 18 if age is falsy

// optional chaining + nullish coalescing
const age = person?.age ?? 18 // this is a 2020 feature of JS - links below


/* 
* Avoiding errors
*/
const age = person && person.age && person.age.dob || '1-5-1911'; // default to 18 if age is falsy

// optional chaining + nullish coalescing
const age = person?.age?.dob ?? '1-5-1911' // this is a 2020 feature of JS - see links section

```

The new syntax looks great to me and will definitely simplify our JS code in the future - so I will definitely be adopting :).

## Links: 
- [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Nullish Coalescing Opterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)


