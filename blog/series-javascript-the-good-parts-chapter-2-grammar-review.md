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

Joking aside.

I don't agree with this statement at all for two reasons:
1. Comments in code are usually to give context to why code is written a specific way, not to comment the code out (commented code should be removed from code bases)
2. Method and class headers with JSDoc syntax uses block commenting by default, especially when IDEs help you by creating the blocks for you. 

