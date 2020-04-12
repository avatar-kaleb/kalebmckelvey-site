---
published: true
cover: /post-images/eslint-code-background.jpeg
date: '2019-03-05'
title: Is ESLint Worth Your time?
category: Tech
tags:
  - productivity
  - webdev
  - javascript
---
Hello everyone!

Today I'm in the process of updating documentation for our team standards so anyone interested in following them can. I thought it would be a great time to post on why I believe ESLint is worth the team to set up!

## What is Linting?

Linting is simply the static analysis of code against a set of rules to determine whether the rules are being followed.

## What is ESLint

It's a Javascript linter!! ESLint is an open-source project that was founded in 2013 by C. Zakas.

The main reason behind its creation was to give developers power in developing their own rules that could be linted against, especially for rules that are considered best practices.

You can learn more about the mission and philosophy of the project on its [About Page](https://eslint.org/docs/about/).

For the web development community, this is very helpful for beginners following the standards of experts over at Google or Airbnb, or for a team of developers at a start-up who want to make sure they are following the same practices as they begin to grow.

_SN_ - Typically the reasoning and style guides accompany ESLint configs, letting those using the config to understand the why behind certain rules.

Although the set up doesn't take long, is it worth introducing to your project?

I believe so!!

## ESLint is Worth the Time!

Code reviews, an opportunity for teammates to collaboratively introduce, fix, or break code in a codebase. Code reviews are worth doing, but can also become a huge drag on productivity when minute details such as whether or not a developer should use trailing commas in their objects or not become heavily discussed.

### Reason 1 - Enforce Standards Programmatically

By programmatically enforcing standards, teams save time and prevent team headbutting!

_Note:_ I'm not suggesting that rules themselves shouldn't be discussed, but once they are decided and agreed upon, it's no longer a battle of two developer opinions during review processes. Instead, it becomes ESLint enforcing the standards.

Let's look a quick example:

```
const pikachu = {
    type: 'electric',
    color: 'yellow',
}
```

vs.

```
const pikachu = {
    type: 'electric',
    color: 'yellow'
}
```

Opinions and discussions on these lines of code during the review process can extend the amount of time both developers should be writing code.

ESLint removes the dynamic by enforcing those rules without the need for discussion, ego, or potential arguments.

For the particular example above, here's the rule: [Comma Dangle](https://eslint.org/docs/rules/comma-dangle)

Remember, code reviews and codebases are no individuals on the team. It's our code!

_SN_ - check out this [great video from React Conf](https://www.youtube.com/watch?v=jtXgNTnVJUU) on code reviews.

### Reason 2 - Automate Code Quality

I mentioned previously being able to easily follow best practices for our industry from top companies or well-known web developers by using their ESLint config. It's important to note that you can also add or remove rules from these config extensions as well, meaning you can truly make ESLint work the way you want to for your team.

- [Google ESLint Config](https://github.com/google/eslint-config-google)
- [Airbnb ESLint Config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [Wes Bos ESLint Config](https://github.com/wesbos/eslint-config-wesbos)
- and so many more...

There are three common ways to enforce linting in your development process

1. IDE - Download ESLint for your favorite editor by following the [ESLint guide](https://eslint.org/docs/user-guide/integrations)

This will show you problems to fix quickly and easily before trying to commit.

2. Pre-commit

Check out the [Lint-Staged](https://github.com/okonet/lint-staged) module to run linting against newly staged files, disallowing commits if any linting errors are found!

3. Pipeline

Add linting into your pipeline to prevent any deployments with errors, preventing developers from completing stories when errors are found!

The effort to set up any of the 3 options above is trivial and so worth it!

### Reason 3 - Code Maintenance

Enforcing standards to prevent long discussion and ego battles, along with preventing developers from committing to the code base unless they adhere to the agreed standards are the first two big wins for using a linter like ESLint.

The last reason goes right along with the first, by following a team standard, working on other's code becomes a bit easier (can't say easy here :D) because you can now focus on logic compared to stylistic differences that contend for cognitive energy :).

## Concluding Thoughts

As developers, it's our responsibility to write high-quality code in a productive manner. We owe this to ourselves as its part of the art in our profession, and to our company/client who pays us to do the work.

Why not make it a bit easier for yourself and also for your team to make an impact, while saving time and enforcing higher quality code bases?

Thank you for reading!!

