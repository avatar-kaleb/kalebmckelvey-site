---
published: true
cover: post-images/how-to-link-javascript-to-html.jpg
date: 2021-08-19T17:59:09.521Z
title: "Honeypot Cult Article: How to Link JavaScript to HTML"
canonical_url: https://cult.honeypot.io/reads/link-javascript-to-html/
category: Tech
tags:
  - tutorial
  - javascript
  - html
---
JavaScript (JS), one of the most popular programming languages in the world, empowers web developers to create dynamic web page experiences. In essence, JavaScript powers the web. Modern browsers support JavaScript through their included “engines”, which continually update and adapt to support the JS language specifications (*[ECMAScript](https://tc39.es/ecma262/)*) as it evolves over time.

With JS, HTML, and CSS - the web has become one of the most open and exciting opportunities for creators. Utilising Javascript in HTML when developing dynamic web app experiences is a key skill of web devs. And luckily, it's not complicated thanks to HTML — which makes linking JavaScript to HTML simple.

## HTML Script Element

Through *[HTML’s script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)*, devs can embed code within the web page or even link to external files to execute code. In general, web devs choose JS as the code that’s embedded.

### **Where to Place the Script Tag**

HTML allows `<script>` tags in either the `<head>` or `body` elements, so which one should you place the tags in?

It’s recommended and considered best practice to place script tags right before the body’s closing tag (`</body>`). There are a few reasons for this:

1. Your JavaScript might depend on the HTML elements being present on the page, especially for setting up event listeners or classes to certain elements. If the JavaScript is placed in the head tag, it would be loaded and executed before all of the HTML is on the page.
2. Since the Browser stops to load, parse, and run your JavaScript code before loading the rest of the page, you can see how putting it in the head tag before your HTML completely loads could cause slowness for the users.

With that being said, it’s possible to add it to the head element without causing any problems. Like many things in Web Development it really depends on what you're doing :)

### Learning through action

Let’s use a simple example, the classic button counter. We create the content, buttons, and text in HTML and use JavaScript to increase or decrease the count respectively and count over time by responding to button clicks.

### Embed (inline) JavaScript Example

*Index.html*: 

```html
<!DOCTYPE html> 
<html>
  <body>
    <button id="up" type="button" onclick="countUp()"> Up </button> 
    <p id="count"> 0 </p>
    <button id="down" type="button" onclick="countDown()"> Down</button> 
    <!-- This script tag inlines the JavaScript that increases or decreases the count --> 
    <script> let count = 0; 
      function countUp() { 
        document.getElementById("count").textContent = ++count; 
      } 

      function countDown() { 
        document.getElementById("count").textContent = --count; 
      }
    </script> 
  </body>
</html>
```

### Link External JavaScript files

*Index.html*: 

```html
<!DOCTYPE html> 
<html>
  <body>
    <button id="up" type="button" onclick="countUp()"> Up </button> 
    <p id="count"> 0 </p>
    <button id="down" type="button" onclick="countDown()"> Down</button> 
    
    <!-- This script tag downloads and executes the JavaScript located in the external file --> 
    <script src=”main.js”> </script> 
  </body> 
</html>
```


*main.js* 

```javascript
let count = 0;

function countUp() {
    document.getElementById("count").textContent = ++count;
}

function countDown() {
    document.getElementById("count").textContent = --count;
}
```

## Wrapping Up

The ability to link JavaScript to HTML has made the web a truly dynamic place where anything is possible. From sharing internal text documents to now reading emails, shopping for clothes, or communicating to all of your closest friends, you can easily see how it has made a profound impact on our lives.

Now that you know how to link JavaScript into your HTML documents, your creative journey officially begins!