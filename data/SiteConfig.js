module.exports = {
  blogPostDir: "blog", // The name of directory that contains your posts.
  siteTitle: "Kaleb McKelvey", // Site title.
  siteTitleAlt: "Kaleb McKelvey", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://kalebmckelvey.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription:
    "Kaleb McKelvey's blog and web development services in material design form!", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-87265682-1", // Tracking code ID for google analytics.
  disqusShortname: "kalebmckelvey-com", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Kaleb McKelvey", // Username to display in the author segment.
  userTwitter: "KalebMckelvey", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Greater Milwaukee Area", // User location to display in the author segment.
  userAvatar: "/Contact-Headshot.jpg", // User avatar to display in the author segment.
  userDescription:
    "Hi there, I'm Kaleb!. A young professional excited to grow through new experiences! My passion for technology and desire to make the world a better place drives me to continue learning. Life is a feeling process with a journey to achieve all that you want along the way!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    // {
    //   label: "Bitbucket",
    //   url: "https://bitbucket.org/avatar-kaleb/",
    //   iconClassName: "fa fa-bitbucket"
    // },
    {
      label: "Instagram",
      url: "https://instagram.com/on_the_journey3",
      iconClassName: "fa fa-instagram"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/KalebMcKelvey",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:kalebmckelvey3@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018 Kaleb McKelvey" // Copyright string for the footer of the website and RSS feed.
};
