---
published: true
cover: /post-images/javascript-the-good-parts-series-image.jpg
date: '2020-04-28'
title: 'Series: JavaScript the Good Parts - Chapter 1 Review'
category: Tech
tags:
  - javascript
  - webdev
  - book notes
---
Book club! Did someone say book club? 

A colleague and I have decided to co-lead a technical genre book club! We're both excited about it because let's be honest, it's difficult to read tech books on your own without some extra motivation. 

The discussions are a great way to really learn from and teach each other along the way too! I want to take these discussions and reading the book even further by passing on the knowledge to you!

*JavaScript: the Good Parts by Douglas Crockford* was decided on as our first book choice. It isn't a full manual or walkthrough of every feature in JS but gives an overview of the parts the author believes are best. I'm ecstatic to read this book to compare it with [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) by Kyle Simpson; it includes critiques of David Crockford and I'm eager to see both sides to make judgments.

One note, the book is a bit outdated, so in this series, I'm going to try my best to both give summaries of each chapter and add commentary to newer features within the language. Further, I will be creating Code Pens to show examples and solidify each concept that deems worthy.

Lastly - there is debate on good parts and bad parts of the JavaScript language. I will do my best to show when giving my own opinion versus summarizing the book. 


Let us begin!

## Chapter 1. Good Parts:

*Note: All quoted passages are quotes from the book in chapter 1*

When we decide on using a programming language, we have many options on how to implement features and requirements at our disposal. Douglas C states that when he was less experienced as a programmer, he had a habit of using all features, good or bad, and that caused some tricky or error-prone code. We should only use good parts instead.

> "Most programming languages contain good parts and bad parts. I discovered that I could be a better programmer by using only the good parts and avoiding the bad parts. After all, how can you build something good out of bad parts"

### A Small History of JS

JavaScript was created in 10 days ([or was it?](https://thehistoryoftheweb.com/the-10-day-programming-language-is-a-myth/)) and had no time to be functionally tested to rid itself of bad parts. It was necessary to get the new language out to compete with other languages at the time, and Netscape Navigator 2 wanted to win that browser war.

Winning over Java Applets, JS became the language of the web and is now used more widely today (IOT, web, and servers - who would have thought?).

Mr. Crockford argues that since the language was so little tested and rushed out, it was released with some bad parts. Unfortunately, those bad parts could not be taken out because sites in the wild still use them. Languages can be updated, but taking out the bad parts isn't an easy task because they are already integrated throughout various code bases.

> "Perhaps the greatest benefit of studying the good parts is that you can avoid the need to unlearn the bad parts. Unlearning bad patterns is very difficult."

This doesn't sound very plausible for a new language someone is learning for the first time. How do we know what to learn? We're covered in 2008 JS, but as it continues to evolve, we too must evolve.

### Analyzing JavaScript

---

Good ideas:
- Functions as first class-citizen
- Loose typing
- Dynamic Objects
- Expressive object literal notation

Bad Ideas:
- Programming model based on global variables

---

Developers coming from a strongly-typed language, such as Java, are very alarmed at the loosely-typed concept. We as a dev community believe that types help catch errors, which can be very true, but the author states:

> "...it turns out that strong typing does not eliminate the need for careful testing."

He's suggesting that types do help - either way, testing must happen to make sure the app is working correctly. Additionally, he says that the errors caught by type checking are typically we don't really worry about much. 

> "I find loose typing to be liberating. I don't need to form complex class hierarchies. And I never have to cast or wrestle with the type system to get the behavior I want." 

He mentions a controversial feature, prototypical inheritance. With many devs trained classically and on object oriented patterns, for example, I took an intro to Java as my first CS class, prototypical inheritance creates confusion because he says you will become frustrated when trying to apply classical design patterns to JS.

However, if you take the time to learn how JS inheritance works - you will be rewarded!

*I agree with this statement! We can't count things out because we don't understand them or because they might take time to understand. Think about Redux - it has a similar controversy. It's difficult to learn and understand for newcomers, powerful when used correctly, and wildly overused in apps that don't require it.*

> "Javascript depends on global variables for linkage. All of the top-level variables of all compilation units are tossed together in a common namespace called the global object. This is a bad thing because global variables are evil and in JavaScript they are fundamental.

***Feature Update: Modules take care of this!!***

[MDN Modules Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

### Why Javascript?

> "There are two answers. The first is you don't have a choice. The Web has become an important platform for application development, and JavaScript is the only language that is found in all browsers."

>"The other answer is that, despite its deficiencies, JavaScript is really good."

I couldn't agree anymore! As my knowledge of JS continues to grow each day, I grow to enjoy using it more and more.

That's chapter 1 folks - stay tuned for Chapter 2!!







