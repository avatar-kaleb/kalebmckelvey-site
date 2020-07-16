---
published: false
cover: /post-images/quick-lightning-tip-post-image.jpg
date: '2020-07-16'
title: 'Angular Lightning Quick Tip: [ngClass] and Compound Logic'
canonical_url: ''''''
category: Tech
tags:
  - angular
  - lightning quick tip
---
An interesting question came up in a pull request recently that led to a new TIL when dealing with ngClass in Angular, so I thought it would be worth sharing.

## ngClass Overview

When creating components in Angular, it's common to change classes on particular HTML Elements in your template based on variables or logic. `[ngClass]` handles this for you.

`<div [ngClass]="{'one': shouldHaveThisClass}">Random div</div>`

When the class property of `shouldHaveThisClass` has a truthy value, then the class of `one` would be added to the div.

In interactive web apps, you can see why this feature helps us out.

_[NgClass Documentation for more details](https://angular.io/api/common/NgClass)_

## Compound Logic

What happens when multiple classes are used and how does Angular decide which classes to add?

```
// template class
// editMode = true;
// isPrimary = true;
// isSecondary = false;

<div
  [ngClass]="{
    'edit': editMode
    'primary': isPrimary, 
    'primary-edit': isPrimary && editMode, 
    'secondary': isSecondary,
    'secondary-edit': isSecondary && editMode
  }">
Random div
</div>`
```

What class or classes would be added to our div here?

The key line from the Angular docs:
> "Object - keys are CSS classes that get added when the expression given in the value evaluates to a truthy value, otherwise they are removed."

No precedence rules are used here. 

__All classes would be added that have truthy values:__ `edit`, `primary`, `primary-edit`.

This was a great question and something to keep in mind when designing our components in the future to make sure the right classes with the right styles are used.
 



