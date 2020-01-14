---
published: false
cover: /post-images/sytem-design-photo.jpg
date: '2020-01-14'
title: Designing Data-Intensive Application Summary
category: Tech
tags:
  - system design
---
# Part 1 - Foundations of Data Systems

The first part of the book explores the fundamental ideas that are in all data systems, both vertical and horizontally scaled applications.

## Chapter 1 - Reliable, Scalable, and Maintainable Applications

Applications today are DATA-INTENSIVE, not compute-intensive. This is because as our modern hardware has advanced, computing power isn't limiting applications, but the amount, complexity, and always changing data can lead to trouble in performance.

These types of apps have the common functionalities:
- Storing / retrieving data
- Speeding up expensive operations by remembering results of them if input stays the same
- Searching (like Google)
- Asynch processing
- Batch processing

Although we have common functionalities, each app has very different requirements, data structures, and user functionality. Because of this designing new systems be a tough challenge for us engineers, as we try to keep the applications running properly for our users, we discover there is no cookie cutter approach that easily makes an app scalable. There are three general ideas that we need to keep in mind though.

### Reliability

Systems should continue working as expected even when things are going wrong!

#### What could go wrong?

When things do go wrong, we call them faults. As engineers, we must anticipate and put in place ways to handle them - if we do so well, then our apps are resilient. It's important to note here that we can't handle every single fault in existence, but we can try our best :D.

#### Hardware Faults

Faults that happen when hard disks crash unexpectedly or the power supply burns out causing the machine to power off without notice are in the general category of hardware faults. They are quite common in places with large data centers.

We mitigate these faults by adding redundancy, in other words, having more than one hardware device, so the system continues running even if one of the devices fails. Cloud computing has made this much easier!

#### Software Errors

Errors within the system that are correlated across many nodes, like crashing from bad input or the leap second bug in linux kernels, can be very difficult to deal with because it isn't just one piece of hardware that's gone bad.

The book recommends thinking through your software designs and finding ways to keep systems in check, such as monitoring the length of messages in a queue and the rate at which they are being released - are they being processed at an adequate speed? If not, throw some type of error or alert so it can be preventively fixed.


#### Human Errors

Even though we are the creatures who design systems and keep them operable and have the best intentions, we are unreliable. Checklists can help us do better, but mistakes still happen.

Martin Kleppman recommends combining the following to help with this:
- Design systems that minimize opportunities for error and make it easy to do the right things
- Decouple the places where people make the most mistakes from the places where they can cause failures
- Test thoroughly at all places with all types of testing
- Allow quick recovery from human errors
- Set up detailed and clear monitoring - performance and error rates
- Implement good management practices and training

#### How Important is Reliability?

When applications go down, productivity at the business suffers or users lose data (or money). It's our jobs as developers to help prevent that from happening, so I'd say very important :).

I do agree with the author in mentioning that reliability in something like prototypes or proof of concepts isn't as important, since it most likely will be thrown away and re-written once proven.

### Scalability

### Maintainability
