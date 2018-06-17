import Tech from "./TechData";

module.exports = [
  {
    id: "dukeOfDollars",
    category: "Personal",
    cardImage: "",
    company: "",
    images: [],
    subtitle: "Building Your Financial Kingdom",
    summary: `
    <p> A site that has the following goals: "learn how to build wealth, how to invest your capital, how to use accumulated assets to best accomplish your goals, and most importantly: how to live a fulfilling lifestyle in accordance with sound personal monetary policy." </p>

    <p>My client wanted a site to help drive the metaphor home to help change the lives of their users as they provide a roadmap to build your financial kingdom.</p>`,
    tech: [Tech.css, Tech.wordpress],
    title: "Duke of Dollars",
    url: "https://www.dukeofdollars.com"
  },
  {
    id: "eandon",
    category: "Work",
    cardImage: "",
    company: "GE",
    images: [],
    subtitle: "Alerting the right people at the right time",
    summary: `
    <p>eAndon is a self-service subscription based alerting tool for manufacturing sites. Sites define their alerts based on their own alert type definitions on specific locations.  Users can then create to specific alerts, which systemically notifies those who are subscribed to them. This let's subscribers quickly know of issues on the shop floor.</p>

    <p>Alerts can be triggered by users manually using the web or mobile apps, RESTful APIs, or integrated with GE's Historian time series data.</p>

    <p>This solution is either piloted or implemented in each of GE’s tier one industrial businesses and has 1500+ users.</p>`,
    tech: [Tech.angularOne, Tech.css, Tech.node, Tech.polymerOne, Tech.predix],
    title: "eAndon",
    url: ""
  },
  {
    id: "factory360",
    category: "Work",
    cardImage: "./factory360.png",
    company: "GE",
    images: [],
    subtitle: "Making your decisions easy",
    summary: `
    <p>Factory360 allows users to create a single dashboard using multiple source types, like Tableau, eAndon, Spotfire, or Box, enabling them display essential reports on shop floor monitors.</p>

    <p>The reports displayed in the dashboard are refreshed periodically, ensuring users have updated information to base decisions on.<p>`,
    tech: [Tech.material, Tech.node, Tech.polymerOne, Tech.predix, Tech.sass],
    title: "Factory 360",
    url: ""
  },
  {
    id: "historianWdc",
    category: "Work",
    cardImage: "",
    company: "GE",
    images: [],
    subtitle: "See your timeseries data in Tableau",
    summary: `
    <p>Tableau software doesn't come with an OLE DB Connector. GE Historian 7.0 released new REST APIs to retrieve data. Combining the two utilizing Tableau's web data connector required a custom solution; it provided results.</p>

    <p>I developed a MEAN tech stack app using a proxy server and routes. The UI utilizes bootstrap and other bower components to create an interactive user experience for data, enabling data driven decisions for our shops.</p>`,
    tech: [Tech.bootstrap, Tech.express, Tech.node, Tech.mongo],
    title: "Historian Web Data Connector",
    url: ""
  },
  {
    id: "inspireMe",
    category: "Personal",
    cardImage: "",
    company: "GE",
    images: [],
    summary: `
    <p> Inspir3me is a simple Ionic 2 Hybrid application that allows you to schedule different category:  quotes. You choose the recurrence, quot type, and time and it sends you a notification! I've always wanted an app to do this, but couldn't find one.
    </p>
    <p>I developed this over two different weekends, and don't think I will continue any efforts anytime soon. It has a slow initialization of the SQLite DB, some quotes in the quote DB I used should be removed, and the like button doesn't work on the single quote page. Overall, the app does send me a quote each morning and for now, that is good enough for me - hoping one day I will turn it into a firebase PWA instead.
    `,
    tech: [Tech.ionicTwo, Tech.sass],
    subtitle: "Inspring you each day",
    title: "Inspir3Me",
    url:
      "https://play.google.com/store/apps/details?id=kaleb.mckelvey.Inspir3Me"
  },
  {
    id: "mentalModelDictionary",
    category: "Personal",
    cardImage: "",
    company: "",
    images: [],
    subtitle: "Make rational decisions faster and easier",
    summary: `
    <p>Mental models are big ideas from various disciplines (Engineering, Finance, Math, etc) that attribute to better decision making. I won’t go into all the details here because  I hope the new project can enlighten you into mental model thinking.</p>

    <p>This dictionary is the new place one can head to see a summary, example, and defense strategy for specific mental model dictionary entries. I couldn't find this besides bloggers who write about them in longer articles (which are also very helpful).</p>

    <p>I developed this MVP quickly to get the content flowing and to learn how Polymer 2 + PWAs work. I'll be looking to improve the app in the future, but mostly focused on creating new mental model entries first. </p>`,
    tech: [Tech.firebase, Tech.material, Tech.polymerTwo, Tech.sass],
    title: "Mental Model Dictionary",
    url: "https://mentalmodeldictionary.com"
  },
  {
    id: "plantPulseOptimizer",
    category: "Work",
    cardImage: "",
    company: "GE",
    images: [],
    subtitle: "Pulsing your plant progression in real time",
    summary: `
    <p>In my last rotation of DTLP, I worked scrum style on a commercial product known as Plant Pulse Optimizer utilizing the Predix platform. It provides real time KPIs for manufacturing sites.

    I specifically contributed to front end widgets, back-end services, and E2E testing for the product.
    </p>`,
    tech: [Tech.node, Tech.polymerOne, Tech.predix, Tech.sass],
    title: "Plant Pulse Optimizer",
    url: ""
  },
  {
    id: "takt",
    category: "Work",
    cardImage: "",
    company: "GE",
    images: [],
    subtitle: "Standardizing your manufacturing metrics",
    summary: `
    <p>The Takt applications standardizes a metric tracked for cycle times for manufacturing shops.</p>

    <p> Users can create dynamic plans for their shops based on their takt time and demand. While plans are active, users are easily able to see progress on how they are meeting demand, factoring in both idle and downtime with an easy interface to guide them effectively through the shift.<p>`,
    tech: [
      Tech.node,
      Tech.predix,
      Tech.polymerOne,
      Tech.redux,
      Tech.sass,
      Tech.springBoot
    ],
    title: "Takt",
    url: ""
  }
];
