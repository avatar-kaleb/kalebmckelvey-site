---
published: false
cover: /post-images/javascript-the-good-parts-series-image.jpg
date: '2020-05-07'
title: 'Series: JavaScript the Good Parts - Chapter 3 - Objects'
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

They are SO useful for creating collections of data and organizing it throughout a web app. They can be nested within each other and since Arrays, Functions, and regular expressions are objects, they too can be contained and mapped efficiently.

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

Dot notation makes an easily readable access path, but can only be used on property names that are legal non-reserved JS words.

`const firstCompany = person.companies[0];`

### String Expressions in Square Brackets

For dynamic or illegal JS words, we must use the `[]` access type. I agree with Douglas Crockford here in that this notation creates less readable code, so push for dot notation instead!

`const fullName = person['full-name']`

### Avoiding Errors in Retrieval

If you access a property that isn't defined, a value of undefined is returned. Further, if you try to access a property that's nested within an undefined property, a type error is through. 

`const age = person.age //undefined`

`const birthDay = person.age.dob // type error - can't access dob of undefined`

We can handle defaults utilizing the `||` and avoid errors using `&&` or optional chaining in conjunction with nullish coalescing.

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

The new syntax looks great to me and will simplify our JS code in the future - so I will be adopting it going forward.

## Updating Objects

Objects are mutable datatypes, meaning you can update the values inside an object, but the memory location doesn't change for that same object even though updates occurred.

You can either update an existing value or create a new one on the same object.

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

When new variables are assigned to the same object, JS uses the same memory location for that variable. 

We can create an object variable, pass it to a function, update in that function, then use that same object outside the function with its updates; or, we can assign two variables to the same object, update a property in one of those variables and see that the second variable also updates.

*Note: I'm not saying doing so makes sense, only that it is possible. The mutable vs Immutable data structure debate rages on, although I will admit to leaning towards the immutable side.*

```javascript
const person = {name: 'Carlton'}; 
const anotherPerson = person; // points to the same object as person
const personCopy = {...person }; // creates a new object with the same properties

person.name = 'Will';
console.log(person); // { name: 'Will' }
// since we assigned anotherPerson to the same object as person
// it is updated too
console.log(anotherPerson; // {name: 'Will'}

// since this was a new object we created with the same top level properties as
// person, it remained the same
console.log(personCopy); // { name: 'Carlton' }
```

## Prototypes

"Every object is linked to a prototype object from which it can inherit properties. All objects created from object literals are linked to `Object.prototype`, an object that comes standard with JavaScript."

When creating new objects, you have the option to select which object will be its prototype. This link doesn't affect updates, but Douglas Crockford talks about how it affects retrieval:

"The prototype link is used only in retrieval to retrieve a property value from an object, and if the object lacks the property name, then JavaScript attempts to retrieve the property value from the prototype object. And if that object is lacking the property, then it goes to its prototype, and so on until the process finally bottoms out with `Object.prototype.` If the desired property exists nowhere in the prototype chain, then the result is the undefined value. This is called *delegation*.

TLDR:

An object tries to retrieve a value from its key-values, if it cannot, then it will continue looking up the prototype chain until it reaches `Object.prototype`. If it still can't find the value, it will then be `undefined`.

He states that we will learn more about this process in chapter 6 - stay tuned!

## Reflection

"It is easy to inspect an object to determine what properties it has by attempting to retrieve the properties and examining the values obtained."

You can use the `typeof` operator to see a property's type, but there are downsides to this.

First, as mentioned in the book, any property in the prototype chain will produce a value. Secondly, the typeof has its own set of gotchas (for example arrays being object types).

The easiest way to determine if an object has a property? 

"The `hasOwnProperty` method does not look at the prototype chain..."

```javascript
const person = {
  name: 'Will Smith',
  age: 51,
  bestMovie: 'too hard to pick one'
};

// works fine
console.log(typeof person.name) // 'string'

// we can see the issue here, toString is on the prototype not person object
console.log(typeof person.toString) // 'function

// we can check via the method like so
console.log(person.hasOwnProperty('name'); // true
console.log(person.hasOwnProperty('toString'); // false
```

## Enumeration

When we need to loop through the properties of an object in JS, there exist a few options to choose from.

The book talks through two options, the internal `for...in` loop or creating your own for loop with your array of properties. The language has introduced a few new Object methods to help make this easier. I'll talk through each of these!

### for...in

This method of looping through the properties of an object isn't necessarily bad, but it does have two gotchas. 

The first gotcha can be annoying because it includes properties that are inherited from the object's prototype. This means you have to "filter out the values you don't want. The most common filters are the hasOwnPropertyMethod and using typeof to exclude functions". 

The second gotcha causes issues because the `for...in` doesn't guarantee order, so properties can be iterated on in any order.

```javascript
// example to print only properties on the object
const person = {
  name: 'Charlie Munger',
  age: 96
};

// we should never really do this, but if we did
Object.prototype.dont = function() { console.log('hi')};

for (prop in person) {
  console.log(prop);
}
// prints out:
// "name"
// "age"
// "dont" --- from the prototype chain

// so we do this to fix that
for (prop in person) {
  if (person.hasOwnProperty(prop) {
    console.log(prop);
  }
}
// prints out:
// "name"
// "age"
```

### Your Own Properties Array

This solution solves the issues from `for...in` but requires you to know all properties you want beforehand. This is a recommended option from the book, but with the additional option of the new JS methods below, no longer needed.

```javascript
// example to print only properties on the object
const person = {
  name: 'Charlie Munger',
  age: 96
};

// we use this for loop
const properties = ['name', 'age']

// we should never really do this, but if we did
Object.prototype.dont = function() { console.log('hi')};

// copying this style from the book (don't hate on the for loop :D)
for (let i = 0; i < properties.length; i++) {
  console.log(person[properties[i]));
}
// prints out:
// Charlie Munger - name prop
// 96 - age prop
```

### Object.entries()

From MDN: "The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs, in the same order as that provided by a `for...in` loop.

This awesome method can be used to enumerate over an object's key-value pairs with the `for...of` loop.


```javascript
// example to print only properties on the object
const person = {
  name: 'Charlie Munger',
  age: 96
};

// note this is using array destructing to return the key and value variables
for (let [key, value] of Object.entries(person)) {
 console.log(`${key}: ${value}`);
}

// prints out:
// name: Charlie Munger
// age: 96
```

### Object.keys() && Object.values()

Alternatively, you can create arrays of either keys or values of an object's own enumerable properties using two other Object methods: `keys and values`.

```javascript
// example to print only properties on the object
const person = {
  name: 'Charlie Munger',
  age: 96
};

console.log(Object.keys(person); // ['name', 'age']
console.log(Object.values(person); // ['Charlie Munger', 96]
```

The new JS functions are very helpful for enumeration - making it an easy task.

## Delete

"The delete operator can be used to remove a property from an object. It will remove a property from the object if it has one. It will not touch any of the objects in the prototype linkage."

One highlight the book talks through when deleting a property, you may allow the prototype's property to come through. 

```javascript
const AllPeople = {name: 'default name', age: 0};

// Object.create uses the prototype of the object to create a new one
const person = Object.create(AllPeople);
person.name = 'Brandon Sanderson';
person.age = 44;

// deletes the age 44, but since the prototype is linked to AllPeople, 0 comes through
delete person.age;

console.log(person.age); // 0
```

## Global Abatement

In the last section of the chapter, global abatement demonstrates the idea that many JavaScript libraries use to avoid global name conflicts. 

The idea is to create one global variable within a namespace of your app, for example, REACT;

For all variables you want globally throughout the React library, you now place them within that top-level REACT global variable - avoiding collisions with another library, such as JQUERY, who would do the same thing.

I can't speak to the need of doing this, as modules have helped avoid the need to do so - please let me know if you have any use cases for applications today. I'd learn to love more about this.

## Links: 
- [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Nullish Coalescing Opterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

## Wrap-up

There you have it folks - Objects from `JavaScript: The Good Parts` with the addition of a few new language features.

Objects are one of my favorite parts of JS and I hope this helped you in understanding them better!


