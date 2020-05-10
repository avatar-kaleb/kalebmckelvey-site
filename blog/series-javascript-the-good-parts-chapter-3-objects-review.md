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

## Updating Objects

Objects are mutable datatypes, meaning you can update the values inside an object, but the memory location doesn't change for that same object even though updates occurred.

You can either update an existing value, or create a new one on the same object.

*Note: I'm using a `const` which signifies that the variable itself won't be re-assigned, but in JS, `const` allows reference type values to be updated.

```javascript
const newPerson = {name: 'Kramer'};

// update in place
newPerson.name = 'George';
console.log(newPerson); // { name: 'George'}

// add new key-value pair
newPerson.age = 30;
console.log(newPerson); // { name: 'George', age: 30}
```

## Passing by Reference

When new variables are assigned to the same object, JS uses the same memory location for that variable. This means, we can create an object variable, pass it to a function, update in that function, then use that same object outside the function with its updates.

*Note: I'm not saying doing so makes sense, only that it is possible. The mutable vs Immutable data structure debate rages on, although I will admit to leaning towards the immutable side to an extent.*

```javascript
const person = {name: 'George'}; 
const anotherPerson = person; // points to the same object as person
const personCopy = {...person }; // creates a new object with the same properties

person.name = 'Kaleb';
console.log(person); // { name: 'Kaleb' }
// since we assigned anotherPerson to the same object as person
// it is updated too
console.log(anotherPerson; // {name: 'Kaleb'}

// since this was a new object we created with the same top level properties as
// person, it remained the same
console.log(personCopy); // { name: 'George' }
```

## Prototypes

"Every object is linked to a prototype object from which it can inherit properties. All objects created from object literals are linked to `Object.prototype`, an object that comes standard with JavaScript."

When creating new objects, you have the option to select which object will be its prototype. This link doesn't have an effect on updates, but Douglar Crockford talks about how it effects retrieval:

"The prototype link is used only in retrieval to retrieve a property value from an object, and if the object lacks the property name, then JavaScript attempts to retrieve the property value from the prototype object. And if that object is lacking the property, then it goes to its prototype, and so on until the process finally bottoms out with `Object.prototype.` If the desired property exists nowhere in the prototype chain, then the result is the undefined value. This is called *delegation*.

TLDR:

An object tries to retrieve a value from it's own key-values, if it cannot, then it will continue looking up the prototype chain until it reaches `Object.prototype`. If it still can't find the value, it will then be `undefined`.

He states that we will learn more about this process in chapter 6 - stay tuned!

## Reflection

## Enumeration

## Delete

## Global Abatement

## Links: 
- [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Nullish Coalescing Opterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)


