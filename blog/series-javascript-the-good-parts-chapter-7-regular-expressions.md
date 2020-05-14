---
published: false
cover: /post-images/javascript-the-good-parts-series-image.jpg
date: '2020-05-14'
title: 'Series: JavaScript the Good Parts - Chapter 7 - Regular Expressions'
category: Tech
tags:
  - javascript
  - webdev
  - book notes
---
Regular expressions - a weird syntax for pattern matching in our web applications. Those pesky things we typically Google for validation, like e-mails in our forms. I had no idea it was a feature from the Perl language borrowed for web dev. This chapter dives deeper into how regular expressions work and how we can use them in JS!

## What are they

"A *regular expression* is the specification of the syntax of a simple language."

"Regular expressions are used with methods to search, replace, and extract information from strings."

"Regular expressions usually have a significant performance advantage over equivalent string operations in JavaScript."

"Today's regular expressions are not strictly regular....Regular expressions tend to be extremely terse, even cryptic. They are easy to use in their simplest form, but they can quickly become bewildering."

We can only use these expressions with certain String methods, which will be detailed in chapter 8 (next chapter).

He states that these expressions can have very complex rules that make them hard to read, implement, debug, and maintain. Further, he believes that they should only be used if you have a "fairly complete understanding of the full complexity of regular expressions to correctly read them." This is important because most times, these expressions are used to implement security - so reading and understanding leads to working correctly!

Because of this, he has simplified these rules to make them more usable for JS developers in the book.

## Example from the book

He gives the following code and walks through each piece in this section. Let's start with the code:

```javascript
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";
var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port',
    'path', 'query', 'hash'];

var blanks = '       ';
var i;

for (i = 0; i < names.length; i += 1) {
   document.writeln(names[i] + ':' +
     blanks.substring(names[i].length), result[i]);
}

```

"This produces:
url:    http://www.ora.com:80/goodparts?q#fragment
scheme: http
slash:  //
host:   www.ora.com
port:   80
path:   goodparts
query:  q
hash:   fragment"


