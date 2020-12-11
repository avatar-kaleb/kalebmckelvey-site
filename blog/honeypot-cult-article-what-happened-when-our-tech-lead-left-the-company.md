---
published: true
cover: post-images/techleadwriteonchalkboard.jpg
date: '2020-11-26'
title: "Honeypot Cult Article: What Happened When Our Tech Lead Left the Company"
canonical_url: https://cult.honeypot.io/reads/tech-lead-left-company
category: Tech
tags:
  - career
  - webdev
  - polymer
  - standards
---
> This article was authored as a contribution to the [Honeypot Cult Community](https://cult.honeypot.io/reads/tech-lead-left-company)- you can read it there too!

After graduating from GE Healthcare’s IT Leadership Program, a two-year rotational program to help members learn through experience, my first role was a Full-Stack Software Engineer working on manufacturing productivity applications.

## Manufacturing Productivity Tools

Our team managed a suite of internal web applications that endowed shops around the globe with productivity gains. We facilitated working faster and smarter through our products and constantly improved them each sprint as users suggested improvements that made their jobs easier.

Our frontend applications used Google’s web component library called Polymer. It promoted strong re-use throughout our various applications and helped keep consistent, simple design patterns. We took advantage of components from GE’s internal component library and developed our own in an effort to truly modernize and modularize our development processes.

Much of our app suite’s success can be credited to these two elements (Polymer and user feedback); which in turn created our flexible development culture and set the stage to test new ideas quickly! Thus, two-week hackathons were introduced!

Hackathons gave both developers and product teams an amazing opportunity to test out new product ideas, determining their feasibility from the tech and user experience perspectives. Our hackathons were a huge success for exploration, and it was at one of these hackathons this story begins in earnest.

## A New Hackathon Project – TAKT

One of the ideas submitted for a hackathon product was real-time Takt tracking.

My first step when evaluating this idea of course was to google what in the world Takt was.

## What is Takt Time?

From *[Wikipedia](https://en.wikipedia.org/wiki/Takt_time)*: “Takt time is a manufacturing term to describe the required product assembly duration that is needed to match demand.”

In other words, shops could track how their actual completed cycles were matching up to what they expected. If an assembly line was supposed to complete one pencil every hour, and that line was running for 8 hours a day, then they could reasonably complete 8 pencils per day.

![Takt Time](https://images.ctfassets.net/cjwb7umaxoxv/buzNloKGI67l3HAiak5dS/ea4fc854a1def2eb8fc03efbfa773ec5/takt-time-formula.png)

SOURCE: PROCESS STREET

Takt time tracks progress in real-time, meaning line managers could make data-driven adjustments as needed due to unexpected issues, such as running out of materials or a fire drill.

The idea itself manifested into a project for the hackathon, we received designs from the design team and got to work!

## The Hackathon

We had two very experienced team members who were in charge of the architecture of the suite. Naturally, they helped every team author initial design diagrams for their hackathon projects.

My manager assigned me to the Takt team; typically, hackathon teams consisted of 4-5 members, but ours only consisted of myself and two experienced team members. With designs and architecture complete, we were ready to deliver the Takt Proof of Concept by the end of the two-week mark.

The hackathon started in a whirlwind of effort. I worked on the frontend with our lead frontend developer, while he worked with our backend lead to making sure the data contract was correct.

We were focused and hacking away, excited to see where the product would land!

Those two weeks went by like a blink of an eye, we started and one blink later the hackathon had reached the end of the second week. That meant it was presentation time!

We loaded up two browsers pointed to our dev environment, excited to share yet nervous it wouldn’t work with everyone watching. We talked through the project, what Takt was, and demonstrated creating a new Takt plan with the same scenario mentioned above.

The screen showed the Takt clock count down and the current status of 0 out of 8. My teammate clicked the complete button and we saw the 0 tick up to 1 on both screens: 1/8 complete! It worked!

We felt like the dream team winning a championship! Takt was tracked in real-time across browsers – no reload required!

> We felt like the dream team winning a championship!

## App Lead Leaving Company and MVP

The successful hackathon presentation led to the product team asking for a Takt MVP soon after. We broke down the work involved via user stories and started work on them immediately in our following sprint.

It was around this time that we learned of our app lead deciding to take on a new opportunity. We were excited for him, although Takt had officially lost its tech lead and we had lost our most productive team member.

“Who would lead Takt going forward and how would team members' work be split up?”

With my experience working on Takt through the hackathon, my manager asked me to step up and take lead on Takt; additionally, some of my teammates would be 100% focused on helping to develop it too!

We were ready to grow, learn, and enjoy the new opportunity!

## Leading the Project

Being an app lead on a new application granted many amazing experiences and lessons for me.

With a new product, users gave feedback quickly, meaning lots of iterations and changes as it matures. Secondly, visiting manufacturing shops using the Takt app, and learning from their feedback was an absolute blast. We learned how different shops sometimes had different processes, so we decided on a configuration-based architecture. Lastly, our Software Team as a whole was new, processes and standards changed regularly. We were able to shape them to work more efficiently.

## Upholding Team Standards

Since we had less legacy code with the newer app, the slate was clean to easily meet team standards without much tech debt work required.

**Here are the three main application-level standards we upheld:**

1. Implement ESLint and SonarQube

2. Code Documentation (JS Docs on all methods and components, and architecture and business cases documented (not always in detail, but high level at least))

3. Unit Test Code coverage at 80%

The Takt team partnered with the product to allocate time as we made sure these standards were upheld on our project – this was one of our proudest achievements as we eventually took on new app projects or roles.

## Implementing New Features

Learn by doing – it’s a vibe! Leading the architecture and design decisions in the lead role for Takt helped me learn often through action. We made decisions as a team, brainstorming, diagramming, and weighing the different options against each other. It was the consequences of those decisions, both good and bad, that we learned the most from!

I believe in a principle-based decision-making style. We tried to adhere to the following:

**1.** Keep our architecture modular

**2.** Working and improvable, not perfect

**3.** Enable or leverage re-use across our app and our suite

**4.** Performant and reliable

With these in mind, we weighed different options to make decisions based on obtaining the best results on our principles. This helped us follow the wise words of Boomi from Avatar the Last Airbender: “Instead of seeing what they want you to see, you gotta open your brains to the possibilities”, because we looked for solutions that best met our principles together!

## Concluding Thoughts

Spending two years at GE as a Software Engineer introduced many wonderful experiences into my career.

GE Healthcare manufactures equipment that saves lives – I visited some of these shops and saw how the manufacturing processes led to the fantastic technology hospitals and doctors use every day.

There were tough days during my time there, maybe we had an outage, or Takt had a difficult bug or requirement to solve for. There might have been tough tradeoffs and architecture decisions to make without clear cut answers. Our agile processes evolved and changed to help complete tasks on time as priorities changed for the business.

The role of app lead can be stressful during tough times, but being part of something larger than myself, something that helped save lives, gave me the inspiration and motivation to get through those days. The experiences from my GE Software Engineer days are ones I will continue to cherish, and the team we had was so much fun to be a part of!
