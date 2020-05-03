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











