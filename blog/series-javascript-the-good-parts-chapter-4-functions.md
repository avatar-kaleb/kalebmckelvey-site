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

## Invocation 

"Invoking a function suspends the execution of the current function, passing control and parameters to the new function."

Each function in JS receive two additional parameters: `this` and `arguments. The `this` parameter is one of the most misunderstood parts of JS, yet it is very important for utilizing object oriented patterns in the language.

There are four invocation patterns in JavaScript, each one determining how the `this` parameter is initialized.

The invocation operator ,`()`, "follows any expression that produces a function value." 

You can pass zero or more arguments (you can even pass expressions that evaluate to an argument) within the parenthesis to the function. JS doesn't verify that the number of arguments passed match the parameter of that function or type check them at all. Arguments will be set to undefined if no value is passed into it when called.

### The Method Invocation Pattern

"When a function is stored as a propery of an object, we call it a method. When a method is invoked, `this` is bound to that object."

Modified example from the book:
```javascript
/**
* Creates a counter object, where the value is stored  
* within that object and the increment method is called 
* from that same object, allowing us to use `this.value` 
* to update it.
**/
const counterObject = {
   value: 0,
   increment: function increment(num) {
      this.value += typeof num === 'number' ? num : 1;
   }
};

counterObject.increment();
console.log(counterObject.value); // 1

counterObject.increment(3);
console.log(counterObject.value); // 4
```

Methods can use `this` to access or modify properties on that object. The `this` parameters is bound late in JS, specifically at invocation time, making it re-usable across any object. "Methods that get their object context from `this` are called _public methods_."


### The Function Invocation Pattern

"When a function is invoked with this pattern, `this` is bound to the global object. This was a mistake in the design of the language."

"A consequence of this error is that a method cannot employ an inner function to help it do its work because the inner function does not share the method's access to the object as its this is bound to the wrong value."

The example used in this section is really tough to follow and the explanation makes this concept seem very difficult to grasp. 

Let me try to show it through code and comments to help!

```javascript
// we have to use var here because const doesn't get stored on
// the global object
// if we use const, then the cost variable will be undefined in our logTotalCost function, since it uses the global scope
var cost = 500;
const product = {
    cost: 100,
    addTax: function() {
        const tax = 5;
        
        // we want to add the tax to the cost of the product
        // since this was called with the method invocation pattern
        // this.cost is the cost of the object, 100, then we add tax
        this.cost += tax;

        const logTotalCost = function() {
            console.log(this.cost);
        }

        // we can work around this by doing:
        const that = this;
        const logTotalCostWorkAround = function() {
           console.log(that.cost); // outputs 105;
        }


        // Since we use the Function invocation pattern here to call the function
        // it will be called on the global this...
        // which has a cost variable of 500, not 105.
        logTotalCost();
    }
}

// Method invocation pattern
product.addTax(); 
```

### The Constructor Invocation Pattern

"JavaScript is a prototypal inheritance language. That means objects can inherit properties directly from other objects. The language is class-free...Prototypal inheritance is powerfully expressive, but is not widely understood."

"If a function is invoked with the `new` prefix, then a new object will be created with a hidden link to the value of the function's `prototype` member, and `this` will be bound to that new object."

The `new` prefix changes the return statement behavior also.

```javascript
// Create a "constructor" function called Animal which
// creates an object with its own name property
const Animal = function(name) {
  this.name = name;
}

// We give all Animal objects a public method of getName
// to return that objects name
Animal.prototype.getName = function() {
   return this.name;
}
```

// we create two instances of Animal objects
const cheetah = new Animal('Cheetah');
const lion = new Animal('Lion');

// We use the public method
console.log(cheetah.getName()); // 'Cheetah'
console.log(lion.getName()); // 'Lion'

Constructor functions uses Pascal case within JavaScript to show it is an object that resembles a re-usable class.

Douglas Crockford states this pattern isn't recommend, but doesn't state why in this chapter.

### The Apply Invocation Pattern

In JavaScript, functions can also have methods. We use the apply method to construct an array of arguments and state the value we want to use for `this` when calling a function.

```javascript
const add = function add(a, b) {  
  return a + b;
}

const numbersToAdd = [3, 3];

// apply the arguments to the function we're calling
const sum = add.apply(null, numbersToAdd);
console.log(sum); // 6

// demonstrating changing this with the animal class above
const animalObject = {
   name: 'Liger'
}

// we're saying call the animal prototype with `this` assigned 
// to the animalObject
const name = Animal.prototype.getName.apply(animalObject);
console.log(name); // Liger
```

Hope this helps clear up the different invocation patterns! Please let me know of any questions in the comments.

## Arguments 

The arguments parameter available to functions on invocation gives access to all arguments passed in, even arguments that are not assigned parameters - giving the ability to write functions that take any number of params.

```javascript
const addABunchOfNumbers = function addABunchOfNumbers() {  
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {    
    sum += arguments[i];  
  }    
  return sum;
}

console.log(addABunchOfNumbers(1,2,3,4)); // 10

```

You can use [Rest Params](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) instead!

## Return

JS functions are interesting that they implicitly return `undefined` when there isn't a return specified with the `return` reserved word.

```javascript
const log = function log(num) {
  console.log(num);
}

const returnedValue = log(3);
console.log(returnedValue); // undefined
```

## Exceptions 

JavaScript enables simple exception handling via `try/catch` and `throw` statements.

`Throw` statements interrupt current execution and can be an object with error `name` and `message` properties. Additional object properties can be added as well.

We can use `try/catch` blocks to try to execute statements and catch any thrown errors, allowing us to easily handle unexpected errors gracefully.

```javascript
const divide = function(numerator, denominator) {
  if (denominator === 0) {
    throw {
      name: 'DivideByZero',
      message: 'Unable to divide by zero.'
    }
  }
  return numerator / denominator
}

try {
  divide(3, 0);
} catch(error) {
   console.log(`Couldn't divide: ${error}`);
}
```

## Augmenting Types

By changing the base type prototypes in JS, you can add your own functionality and enable your programs to use it throughout.

One example used in the book was a `trim` method for Strings. This has since been added to the language, but does demonstrate how we could have added beforehand.

```javascript
Function.prototype.fakeUpdate = function () {
  console.log('I updated the function prototype with a new method :D');
  return true;
}

const test = function() {
  console.log('test');
}

// use fake method
console.log(test.fakeUpdate());
// I updated the function prototype with a new method :D
// true
```

The ability to augment basic types gives us the opportunity to make improvements to JS in our programs thanks to this prototypal inheritance.

Collisions can happen, like the [Moo Tools](https://developers.google.com/web/updates/2018/03/smooshgate) flatten debacle. We can namespace our updates within a global property to help avoid this.

## Recursion

JavaScript does allow recursive functions, or functions that call itself. Recursive functions are used for algorithms that can be broken down into smaller and smaller subproblems until a base case is reached.

JS does not offer tail recursion optimization, which functions that recurse can sometimes be transformed into a loop for better efficiency. Because of this, one must be careful in the number of recursions a function will have as the stack may run out if too many calls occur.

The [fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) is a common problem solved naively with recursion:

```javascript
const getNthFib = function(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return getNthFib(n-1) + getNthFib(n-2);
  }
}

console.log(getNthFib(5)) 
// outputs 3
```

## Scope
