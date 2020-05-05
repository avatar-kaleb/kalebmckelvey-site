---
published: false
cover: /post-images/javascript-the-good-parts-series-image.jpg
date: '2020-04-30'
title: 'Series: JavaScript the Good Parts - Chapter 2 - Grammar - Review'
category: Tech
tags:
  - javascript
  - webdev
  - book notes
---
As we continue reading JavaScript: The Good Parts by Douglas Crockford - I continue taking notes and updating my blog posts!

Chapter 2 focuses on JavaScript's Grammar, which is very important to know while writing it :). 

Of course, he maintains the focus only to parts he believes as good, so it won't be a thorough view.

## Whitespace
There are rarely any requirements for whitespace; but, you will find you need to separate sequences like declaring a variable. 

As developers, we typically add whitespace to help improve readability. We then add a build process that takes that nice, beautifully formatted readable code to uglify it or minify it to reduce the file sizes when loaded in the browser.

I say this because, knowing when and where JS requires whitespace isn't a key to knowing the language. Our IDE should take care of it for us.

## Comments

There are two different ways to create comments in JS:

Line Comments:

`// this line would be commented`

Block Comments:
```javascript

/*
  This block 
  of
  would be commented
*/
```

Mr. Crockford recommends only using `//`, so we can assume he never writes method headers or class headers in his code bases. 

Joking aside. He says this due to to regular expressions creating errors with block comments - maybe he does this often, but in my experience, code bases don't have regular expressions all over the place.

I don't agree with this statement at all for two reasons:
1. Comments in code are usually to give context to why code is written a specific way, not to comment the code out (commented code should be removed from code bases)
2. Method and class headers with JSDoc syntax uses block commenting by default, especially when IDEs help create the blocks for you. 

## Names

The book defines name as "a letter optionally followed by one or more letters, digits, or underbars."

This is incorrect as you can name things starting with underbars.

`const _test = 'hi'` works fine.

[MDN variable section](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations) states the following:

"A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0–9)."

I didn't look into when this changed, but do think it's important to know.

Names in JS are case sensitive, so these are not the same.

```
const test = 'test';
const TEST = 'hi';

console.log(test, TEST); // test hi
```

### Reserved word list (ES6):

```javascript
arguments
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
enum
eval
export
extends
false
finally
for
function
if
implements
import
in
instanceof
interface
let
new
null
package
private
protected
public
return
static
super
switch
this
throw
true
try
typeof
var
void
while
with
yield
```

He does mention that in addition to reserved words not being allowed in variable names, object properties can't be either. In Chrome, I'm easily able to create an object:

`const test = {class: 'hi'}`

I looked into the [ECMA Script standard](https://tc39.es/ecma262/#sec-names-and-keywords) for more detail here, but didn't find anything around object properties. If you are able to find anything - please let me know in the comments!

I did find interesting that he mentions a few words that aren't reserved, but should have been, like `undefined`, `NaN`, and `infinity`. That is very surprising to me, and am thankful it was pointed out.

You can use `-` to denote negative numbers and `e` for exponents.

`console.log(1e2); //100`

## Numbers

"JavaScript has a single number type. Internally, it is represented as a 64-bit floating point, the same as Java's double.

[BigInts are now available!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

`console.log(3 === 3.0) // true`

In most other languages, this statement would be false.

Douglas Crockford believes that this creates a lot of convenience for us because we don't have to worry about automatic type conversions in numbers or worry about overflowing integer values.

`NaN` means Not a Number, represents in JS when you try an operation between numbers that isn't allowed. 

In the past, we used `isNaN` as a global function for checking for this value. It had some weird rules and caused issues, so a new function was created: `Number.isNaN` which can be learned about [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN).

Lastly, we use the Math class for common math operations between numbers in JS. 

## Strings

"String literals can be wrapped in single quotes or double quotes." 

Additionally, [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) were introduced and are convenient for building long strings with string interpolation.

Each string can contain 0+ characters. You can use `\` to escape characters.

JS was built when Unicode was a 16-bit char set, so all characters are 16 bits wide. Further, there are no char types, but you can use a string of one character instead.

"Strings are immutable, a string can never be changed. But it is easy to make a new string by concatenating other strings together..."

You can use either concatenation or template literals to join strings.

```javascript
// initialization
const test = 'test';
const test1 = 'test1';
const test2 = `test2`;

// concatenation
const test3 = 'test3' + 'test3'; 

// interpolation
console.log(`${test} ${test1} ${test2} ${test3}`) // test test1 test2 test3 test3

// escaping (example from book)
"A" === "\u0041"
```

I personally prefer single quotes for initialization - they are less intrusive unless utilizing string templates for interpolation. Interpolation has been shown to be a bit slower than string concatenation, but also cleaner.

Two strings are equal in JS if they are exactly the "same characters in the same order."

Lastly - [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) in JS have methods. Technically these methods are on the String object class, not string literals, but thankfully for us devs, JS converts them for us.

## Statements

"A compilation unit contains a set of executable statements."

There are a list of updated statements on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements).

I'd rather not dive deep into each of these, as many of them are fundamental programming topics - but will note a few things.

### Variable scope

In the past, JavaScript only had variable declarations using `var`. The scope of variables declared with `var` is function, not block. Two new types, `let` and `const` declarations were introduced to add block level scoping to JS.

### Truthy and Falsy

With JavaScript being loosely typed, it coerces different variables into types when evaluating statements.

For example, an if statement.

```
const test = { hi: 'hi' };

if (test) {
 console.log('it is truthy!');
} else {
 console.log('it is falsy!');
}

```

When evaluating this statement, JS must determine whether test is true or false, but we can see it's an object, not a boolean.

In JS, only the following values are `falsy`:
```
false
null
undefined
''
0
NaN
```

All other values are `truthy`. 

The example above prints `it is truthy!` since test isn't one of the falsy values.

## Expressions






