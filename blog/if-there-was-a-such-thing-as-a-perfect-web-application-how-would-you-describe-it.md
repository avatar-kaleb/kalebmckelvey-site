---
published: true
cover: /post-images/perfect-web-app.jpg
date: '2020-01-19'
title: >-
  If there was a such thing as a perfect web application - how would you
  describe it?
category: Tech
tags:
  - web development
  - performance
  - accessibility
---
Lately, I've had an idea of just what makes a "perfect" web application and wanted to put some of that idea up for discussion with the community!

Below I've outlined a few things that I believe would be part of the "perfect" web app. 

# The Perfect Web Application

## Up-to-date Documentation

One of the biggest challenges in documenting software projects is change. The architecture continually changes with new features requirements or bug fixes. Code structures have to be reconstructed because of changes in how new tickets are implemented. We've all been there - pointing someone to the docs with the "they might not be up to date, but the general idea is the same".

I believe that a priority for documentation using the 80/20 rule (documenting the important things like high-level architecture and code patterns used in the app) can go a long way in productive team discussions and implementation decisions.

## Context for big architecture decisions

Trying to remember why a feature was implemented in a specific way becomes more difficult as more time passes every single day. It's faster and easier to collaborate in person than through ticket comments and slack messages, as the effectiveness of communication in person drastically increases. 

If your team has a wonderful collaborative environment where there are many "swing around" meetings, that's great! The discussion results should be what's added as a summary of various tickets or documentation somewhere to keep track of why decisions were made.

This helps with debugging bugs later or remember why decisions were made when they need to be revisited!


### Code standards and onboarding guides

The way new devs are onboarded makes a huge impact on their productivity and the productivity of the team. Guides on where to start with learning the architecture, where to request items for their desk, and general company how-to links help them get set up and  integrate into the new workflow faster. The reason we're hiring new developers is to increase capacity on the team, the faster they ramp up, the better off we are as a team!

## Consistent Design Across the App

Having designers on a project that are keeping components, spacing, and colors consistent across the app (especially when multiple teams are working on the same platform) makes users experience stronger.

Design systems and guidelines (like Material Design) can help the design of the "perfect" app be consistent :).

##  User Flow

Extra clicks for common tasks across an app that you use on a daily bases add up. Not only does it add up in time, but man is it irritating!

Creating a user flow with experts in user experiences keeps users happy. Users might be upset for a few hours when the app has downtime, but they will be annoyed every single day if the user flow makes zero sense.

[We must crush the beetles of life and user flow :D](https://www.joshuakennon.com/beware-the-beetles-of-life/)

## Responsive Design

In the modern web age, people are using devices in all different sizes to access applications. The "perfect" web application handles this flawlessly, keeping user flows and design pristine.


We must continue pushing this!

## Sound Architecture

As the natural life-cycles of a software project take their course, architecture should be updated, upgraded, and adapted to make change easier.

Micro-services has helped SO much in this regard, so in most cases, we should find ways to modularize and separate concerns so various features can be changed without affecting other parts of the system.

### Performance

The first line of defense against lackadaisical performance? [Performance budgets](https://web.dev/performance-budgets-101/). 

Follow this up with performance testing, lighthouse audits, and standards around the requirements for our app.

Like functions in JS, performance should be a first-class citizen in our lifecycle and design.

Our app should be scalable, reliable, and maintainable throughout its various life stages.

### Monitoring

Monitoring should be in place to easily determine if the performance and services are working as needed for the users. An easy to load dashboard and alert system should be set up to help us do our Ops job easier.

### Logging

In addition to monitoring, client-side and server-side warnings, errors, and requests should be logged. Data changes? Logged. Any action in the system? Probably logged (depending on security requirements and sensitivity of data).

Not only does this help from the security perspective, but debugging a prod issue when you can look at legible logs SAVES SO MUCH TIME!


## Code

### Strict Linting / Formatting for consistency

Stylistic decisions and formatting should be handled by the team and implemented in linting rules. This keeps the code consistent and reduces arguments in merge requests over things that can be opinions based on style.

By documenting and adding linting rules for these types of issues, we can make it easier for new teammates, keep throughput of code reviews high, and have a consistent codebase together as a team!


### Consistent Patterns for Common Features (like data loading)

When developing similar features, for example, modals or data loading, developers can have wildly different ideas or patterns on implementing them.

I believe that code should have personalization and artistic expression to an extent, but debugging and throughput when codebases use consistent patterns (file names, folder structure, abstractions, etc) is faster. It also helps new developers joining the team begin making contributions sooner rather than later.

### Updated dependencies

Dependencies should be regularly checked and upgraded to keep software up to date, remove security concerns, and potentially increase performance through library updates (like React Fiber).

### Developer Experience

Scripts for starting the application, testing it, and reloading changes should all be handled without having to memorize random commands. This is where npm scripts come in handy :).

## Testing

Features should be tested to ensure confidence in the code and confidence it doesn't break with changes. Refactoring should be a fun experience! Here are three types of tests I find important:

- 100% unit test coverage for business logic
- 100% UI Integration tests (like React Testing Library)
- E2E Testing for Major Features

---

I'd love to hear different opinions based on different experiences in the comments - what's the perfect web app look like to you?
