---
published: true
cover: post-images/developer-runbook-template.jpg
date: 2021-12-22T13:00:00.000Z
title: "Honeypot Cult Article: Developer Runbook Template"
canonical_url: https://cult.honeypot.io/reads/developer-runbook-template
category: Tech
tags:
  - debugging
  - on-call
  - runbook
---
You’re just about to fall asleep with your head on the pillow, eyes closed, mind drifting when the phone rings; pager duty is calling. You open up Slack, see that there is an urgent production issue that requires the on-call developer’s expertise that *can’t* wait until tomorrow. Uhggggggg.

As you rub the sleep from your eyes, turn on your computer, and begin catching up on the 100 reply Slack thread, it’s apparent this is going to be a doozy. Adrenaline begins pumping through your body while you review logs, code, and respond to constant pings about progress. An hour goes by, then another, and finally you recognize the problem. The recent deployment changed a feature flag boolean value which is used in other parts of the application...it’s usually the small things, right?

**This real-world scenario demonstrates the life of an on-call web developer.** Hopefully, these situations aren’t regular occurrences, but when they are, I believe that the high-stress moment can cause us devs to forget a few of our basic debugging practices like the recent deployment issue above.

This is where the debugging/runbook checklist comes in, it documents repeatable steps that prevent forgetting the easy-to-miss items. I believe the runbook items below will help you cross your t’s and dot your i’s when figuring out an urgent production issue.

*SN: Feel free to change the checklist to fit your style and needs!*

## The runbook checklist

The steps outlined here are typically followed in sequential order, with some options being skipped depending on your specific issue.

## 1. Take five deep breaths

The first step is very easy. Before we get into the debugging flow and piecing together logs; my first step is to take five deep breaths (or at least one!).

**By centering yourself and [lowering stress levels](https://cult.honeypot.io/reads/cult.honeypot.io/reads/6-ways-to-maintain-good-mental-health-as-a-software-engineer), you can think more clearly and figure out the problem with a level head.**

## 2. Communicate with the stakeholders

Now that you are ready to start tackling the issue, **it’s time to talk to our stakeholders who are reporting the issue**. This might be the first level of the support team or the internal users who are seeing the issue.

One should ask for the problem, let stakeholders know you are there to help, and determine the priority of the issue. **If the priority is low, you will be able to look into it during work hours**, otherwise, communicate that you will be taking a look and pull out the laptop.

**TL;DR:**

* Determine the Priority / Urgency
* Determine the user who had the issue and gather information of what’s happening
* Communicate that you are diagnosing and will provide updates

## 3. Document, define, replicate

The main two actions of this list item are to document in a ticket (or notes) what you’ve gathered so far and replicate the issue in another environment. **You should ask for explicit replication steps and expected outcomes, so you’re aware of the main issue and know when it is fixed.** Further, it also allows for the reviewer of your ticket to test out the fix in a future step.

Step 3 may require a bit of nudging and soft skills to get the data you need. Ask users to send videos, ids, environment, region, and all other information you need to replicate the issue. The more info you have, the better.

**TL;DR:**

* Clear definition and replicable steps of the issue and expected outcome
* Replicate the issue in another environment
* Create a ticket or notes to document the issue properly

## 4. Start a trials and tribulations list

One common question, whether in a postmortem document or those jumping in to help debug an issue is: “What have you tried?” **I like to keep a list of the things I’ve tried out or people mention they’ve tried to easily answer.**

This gives others a jump start on their debugging and implicitly keeps track of the things that are working correctly; because eliminating possibilities helps lead us towards the resolution. Having a list may also spark other ideas based on the different perspectives team members have and document all of the things we tried for the postmortem.

**TL;DR:**

* Start a list of things you or team members have tried

## 5. Diagnose

We’ve reached the exciting part! It’s time to dig in and diagnose the issue! We want to answer: what specifically is causing the issue?

Some teams maintain a runbook, a list of common issues, and steps to fix them. These are issues that aren’t caused by bugs in the code, or they are low priority issues that haven’t been fixed because of a workaround. **If the issue is in the runbook, you are golden. Otherwise, let the diagnosing continue - next stop, the logs.**

Look into the different logging systems to determine if any extra information can be found. For backend services, are you seeing HTTP errors or auth errors? Do you see any exceptions being thrown? Any clues at all that might point to the code causing trouble should be documented or linked to in your notes.

If the logs are showing there is an actual issue, **I typically try to determine if the code changed recently in the area that’s causing the issues.** Could a recent deployment with recent pull requests be the reason errors are happening? I like to check for recently merged tickets that changed parts of the code we’re seeing errors with; this shortcut can really help prevent spinning cycles and save time.

At this point, the issue has been determined through some of the shortcuts mentioned above and some code changes will fix it. **Otherwise, diving deeper into the code and replicating it locally will be the last step.** By replicating it locally and using a debugger, eventually, the resolution will come!

**TL;DR:**

* Check the Runbook
* Check for logs to learn more about the issue
* Check recent deployments
* Check recent tickets that changed this area of the app
* Check recent PRs that touched that area of the app to see changes
* Dive deep into the code and try to replicate locally, use the debugger if needed

## 6. Define the core issue

Now that the exploration and diagnosis are complete, one can note down the core issue in their notes. You know what’s causing the issue and will begin working on a solution.

Communicate it to the proper channel or thread and get to work :D

**TL;DR:**

* Document the core issue
* Communicate you know the issue and will work on the fix

## 7. Code changes, testing, & deploy

The last step of the checklist, fixing the bug - woot!

Once you’ve authored the code changes and tested them locally, it’s time to create a pull request. Depending on your team, there will be a review process required for these types of situations.

If possible, deploy the fix to the QA environment and test that the replicated issue you created in Step 3 works correctly. If needed, get the proper approvals and then deploy to production.

Once the fix is in production, the reporting user or team should validate all is working correctly.

Pat yourself on the back and celebrate a job well done!

**TL;DR:**

* Author code changes
* Follow the PR review process for approvals
* Test in QA and get approval for prod deployment
* Original user validates and approves fix
* Close ticket

...

Trying to remember all of the things you tried, keeping track of status, and working with teammates can be quite stressful during top-tier production issues.

Utilising a checklist, similar to how pilots use them for all checks before taking off, helps everyone stay on the same page. Removing the cognitive load as much as possible while trying to fix a tough bug saves time, positively impacts the business, and makes production outages a much better experience for everyone.

Laying out the steps used when solving a production issue can be a huge time saver!