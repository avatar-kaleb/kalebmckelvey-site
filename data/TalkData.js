const TALK_TYPES = {
  conference: 'Conference',
  lunch: 'Lunch & Learn',
  meetup: 'Meetup',
  training: "Training"
};

export default [
  {
    id: 'polymerMkeMeetup2018',
    eventName: 'Web414 Milwaukee',
    featuredImageAlt:
      'Kaleb standing in front of a portable projector screen with his presentation showing.',
    featuredImageUrl: 'polymerMeetup2018.jpg',
    location: 'Greater Milwaukee Area',
    repoUrl: '',
    slidesUrl:
      'https://docs.google.com/presentation/d/1Ci8i3PX-CiNKnXnCJUyDO2DXPN0vwwmXDRj5pzFjXqo/edit?usp=sharing',
    summary: `GE decided to use Polymer for internal development, allowing us to share them across applications while taking advantage of the Predix Design System. In this talk, JP and I talked through what web components are, why Polymer was created, and the future of web components!`,
    title: 'Web Components, Polymer, LitElement, and Beyond!',
    type: TALK_TYPES.meetup,
    youtubeUrl: ''
  },
  {
    id: 'fedsummitDevProductivity2019',
    eventName: 'Northwestern Mutual - 2019 Fed Summit',
    featuredImageAlt: 'A computer with notebooks on a white table',
    featuredImageUrl: 'fedSummitDevProductivity2019.jpg',
    location: 'New York City',
    repoUrl: 'https://github.com/avatar-kaleb/talk-dev-productivity-mdx-deck',
    slidesUrl: 'https://km-dev-productivity.netlify.com/',
    summary: `At NM, we regularly present to other front-end developers on subjects that can help us all grow. I took the time to talk through developer productivity, why it is important, and tips on how to increase your throughput.`,
    title: 'Developer Productivity',
    type: TALK_TYPES.lunch,
    youtubeUrl: ''
  },
  {
    id: 'fedsummitReactPerformance2019',
    eventName: 'Northwestern Mutual - 2019 Fed Summit',
    featuredImageAlt: 'A computer screen full of minified web development code',
    featuredImageUrl: 'fedsummitReactPerformance2019.jpg',
    location: 'New York City',
    repoUrl: 'https://github.com/avatar-kaleb/talk-react-performance-spectacle-deck',
    slidesUrl: 'https://km-react-performance.netlify.com/#/0',
    summary: `As we create components every single day to build applications for our users, performance translate into business value. This talk focuses on building each and every component as you would lay a perfect brick, leading to building a perfect web application, or a perfect wall.`,
    title: 'React Performance',
    type: TALK_TYPES.lunch,
    youtubeUrl: ''
  },
  {
    id: 'reactWeekDevProductivity2019',
    eventName: 'React Week 2019',
    featuredImageAlt:
      'A first person point of view of Kaleb waitin for conference participants to sit from the stage',
    featuredImageUrl: 'reactWeek2019.jpg',
    repoUrl: 'https://github.com/avatar-kaleb/talk-dev-productivity-mdx-deck',
    location: 'New York City',
    slidesUrl: 'https://km-dev-productivity.netlify.com/0',
    summary: `Senior developers mentor, lead, architect, and code all while staying on top of new tech trends, extinguishing production fires, and completing certifications. Sound like a tough time management task? it certainly is! That's where I come in - I'll show you how efficient developers use top apps, extensions, shortcuts, and workflows to continuously increase your productivity, and just as important, your career!`,
    title: 'Developer Productivity!',
    type: TALK_TYPES.conference,
    youtubeUrl: 'https://youtu.be/sRluD6EObOo'
  },
  {
    id: 'afroTech2020',
    eventName: 'AfroTech 2020',
    featuredImageAlt:
      'The first slide of the presentation with the name The Subtle Art of Decision Making',
    featuredImageUrl: 'subtleArtOfDecisionMakingAfroTech2020.png',
    repoUrl: '',
    location: 'New York City (remote)',
    slidesUrl: 'https://1drv.ms/b/s!AlG7su8ac95Hgt5Iod5oPeM1nEJuzA',
    summary: `Are you equipped to make unbiased, rational decisions or do you make decisions based on instincts and gut feelings? As Software Developers representing various industries, the decisions we make for design and project estimations lead to real consequences. For the last year, I've researched how to we can make better decisions - now I'm passing on the knowledge to you!`,
    title: 'The Subtle Art of Decision Making',
    type: TALK_TYPES.conference,
    youtubeUrl: ''
  },
    {
    id: 'manageYourCareerCaf2Code',
    eventName: 'Managing Your Career',
    featuredImageAlt:
      'The first slide of the presentation with the name Managing Your Career',
    featuredImageUrl: 'managingYourCareer.png',
    repoUrl: '',
    location: 'New York City (remote)',
    slidesUrl: 'https://1drv.ms/b/s!AlG7su8ac95Hgt52wcMvSeccVZcjWQ?e=dc7FhI',
    summary: `Software Engineers must keep up with an everchanging industry. We must learn new technologies regularly and grow our interpersonal skills as we advance our careers overtime.`,
    title: 'Managing Your Career',
    type: TALK_TYPES.training,
    youtubeUrl: ''
  }
];
