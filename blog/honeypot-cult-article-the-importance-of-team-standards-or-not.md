---
published: true
cover: /post-images/important-of-standards-or-nott.jpg
date: '2020-11-11'
title: "Honeypot Cult Article: The Importance of Team Standards... Or Not?"
canonical_url: https://cult.honeypot.io/reads/the-importance-of-team-standards
category: Tech
tags:
  - team
  - writing portfolio
  - leadership
---
Duke University’s basketball coach - Mike Krzyzewski, also known as Coach K, has an overall record of 1,157 wins and 370 losses at Duke and has coached the USA men’s national basketball team to a gold medal in the Olympics.

He’s won many coaching awards and has watched his players win many others, sometimes becoming NBA basketball stars or coaches themselves. His accolades prove that he will be known as one of the best college basketball coaches in history; now this is someone to learn from!

## Why standards > rules (Coach K)

When listening to Coach Mike Krzyzewski speak at a conference one year, I learned of a fascinating activity that he does every year with his new team. He gathers everyone together to create team standards. They do this by first **brainstorming a list of standards, followed by all players voting to agree on the ones they believe in most**. Agreement is only the first step, each team member and coach must be held accountable to the accepted ideals – not only by coaches but by each other.

Here are a few examples:

* “All players and coaches will arrive for practice at least 30 minutes before start time.”
* “When speaking, we will always be honest with each other even when it is challenging.”
* “We will always treat each other with respect.”

Coach K wants players to feel part of the culture they create. If coaches dictated the rules, now they are just something to follow because coach said to; instead, by creating standards as a team, everyone plays their part in upholding them!

My favourite anecdote from the story was when he mentioned doing this with the Olympic team – could you imagine creating team standards with people like Kobe Bryant, Lebron James, and other top competitors in the world? Incredible!

## Basketball vs Dev Teams

It’s quite obvious that software engineering teams have stark differences compared to basketball teams, but there are certain rules that we observe in both.

The delineation of rules vs. standards hit home for me from Coach Krzyzewski, because as a dev joining a new team, **we usually join a team that already has standards or rules to follow that were created before arriving**. This leads to following standards you might not agree with or haven’t had any say in.

It’s easy to see how frustrations can occur in this scenario.

Being asked to uphold something you didn’t agree to can instigate [internal team conflicts](https://cult.honeypot.io/reads/how-to-deal-with-difficult-developers-on-the-team) and tension. The “*[five whys](https://en.wikipedia.org/wiki/Five_whys)*” mental model comes to mind to help resolve frustrations quickly: we must make an effect to **first learn the “why” before suggesting a change or deciding against following a specific standard.**

If standards on ever-evolving teams can cause conflicts – what’s the point of having them?

## Why Do We Have Standards

> “Alone we can do little; together we can do so much.” – Helen Keller

Each product built by software engineers has different requirements, structures, frameworks, and methodologies cobbled together by a team. **Standards are there to help team members stay on the same page**, work together effectively, and create consistency throughout a codebase.

We can use them to keep code formatting consistent and readable or restrict certain antipatterns from being used as best practices are determined. *[Code reviews](https://medium.com/disney-streaming/the-art-of-effective-pull-request-reviews-376d05ce3ad4)* can focus on the right things as linting automates catching the little things since rules are configurable and agreed on by the team. Lastly, **they help us hold each other accountable to write code to the best of our ability,** because it isn’t one person’s code, it's all of ours, and by holding each other to a high standard we make that code base stronger.

Overall, having fundamental principles to believe in and uphold helps teams accomplish much more together than apart.

## A Few Common Standards in Web Dev Teams

**Story Pointing:** Fibonacci sequence or -shirt sizes.

**Linting:** ESLint to check against established linting rules while we code, commit, or push up to GitHub.

**SAST Security Scans:** Using static code analyzers for security risks with technologies like CheckMarx and fixing all issues above a certain risk (like medium).

**Design Patterns or Language Features:** Do we prefer to use React Hooks or Class Components?

**Directory Structure:** How do we structure our directories for util functions or global typography classes? How do we name files? Determining these beforehand increases productivity for all dev team members.

**Code reviews:** How many approvals before merging? Automated pipeline checks like tests and linting before allowing merges.

**Discussion / Respect:** How do we discuss new architecture options? We always must treat each other with respect when discussing different options.

The list goes on and on, right? In my experience these things continually evolve over time – we must record those changes as time goes passes to keep everyone on the same page.

## Do standards matter

Should all products or teams use strict standards? Like most things in our profession – it depends.

Each project is different – my belief boils down to three main factors to determine the strictness required:

1. Project size

2. Number of developers on the project

3. Business risk on malfunctions

Overall, by using the three main factors, one can easily decide on the strength and need of team standards for a software project. We want to move fast to deliver features, but not so fast we create a swamp of code that is impossible to change quickly.

Let’s go through some common project types:

### Proof of Concepts

Proof of concepts with throwaway code like hackathon projects do not need standards, they need to work by demo time.

### Side Projects

Side projects with one or two developers that aren’t for commercial use or with intentions to scale out in the future – then you probably don’t need that strong of standards.

### **Small to Medium Projects**

It’s difficult to size applications because they vary. I’d consider small projects to be a small To-do app similar to those used in many tutorials. Medium is decent-sized projects, but when compared to something like G-Mail or YouTube, they pale in comparison.

### **Large Projects or Highly Impactful Code**

When working on a large product like MacOs or Android, working with many developers, and having a huge impact if a bug affects users, then you will want very high standards. Code should be rigorously reviewed and tested to make sure no impacts on the user will occur.

## How can leaders use standards effectively

First and foremost, **standards should be created by and for the current team.**

If people leave, or new members join, the standards should be reviewed and accepted again. I believe that similarly to Coach K having a new team each year (even though many players are returners), development teams should follow his lead.

**Strong principles help drive decision-making based on outcomes instead of opinions** because many times results can be measured and objectively decided upon based on those fundamental ideas to uphold.

Teams are able to accomplish so much together that individuals would not be able to.

By having stronger team bonds that we hold each other too, **the team works better together and each individual feels part of something bigger than themselves** – not only is this inspirational in of itself – but additionally, it helps us work well together!

**Leaders should facilitate authoring standards for their teams**, doing their best to uphold and evolve them appropriately over time.

If Coach K believes standards are important for winning championships, **I believe that standards are important for delivering products that help change the world.**
