import ServiceOptions from "./ServiceOptionsData";

const { general, security, wordpress } = ServiceOptions;

// lowest package total price option should match min slider option, because this
// is how I am determining which package to show based on slider option picked
module.exports = [
  {
    title: "WordPress Site/Blog",
    subtitle: "User friendly, professional blog or website!",
    description: `<p>The WordPress content management system makes it easy for users to update content, write new blog posts, and manage SEO. Depending on budget, I offer a few different packages that will<em> take your career or business to the next level!</em></p>`,
    sliderOptions: {
      label: "Budget",
      min: 500,
      max: 800,
      step: 100,
      discreteTicks: 100
    },
    packageOptions: [
      {
        name: "starter",
        totalPrice: 500,
        options: [
          general.domain.all,
          wordpress.hosting.starter,
          general.design.basicPrototype,
          wordpress.developmentPackage.basic,
          wordpress.security.basic,
          wordpress.SEO.basic
        ]
      },
      {
        id: "basic",
        totalPrice: 600,
        options: [
          general.domain.all,
          wordpress.hosting.basic,
          general.design.basicPrototype,
          wordpress.developmentPackage.basic,
          wordpress.security.basic,
          wordpress.SEO.basic
        ]
      },
      {
        id: "basicPro",
        totalPrice: 700,
        options: [
          general.domain.all,
          wordpress.hosting.basic,
          general.design.basicPrototype,
          wordpress.developmentPackage.basicPro,
          wordpress.security.basic,
          wordpress.SEO.basic
        ]
      },
      {
        id: "custom",
        totalPrice: 800,
        options: [
          general.domain.all,
          wordpress.hosting.basic,
          general.design.basicPrototype,
          wordpress.developmentPackage.custom,
          wordpress.security.basic,
          wordpress.SEO.basic
        ]
      },
      {
        id: "custom",
        totalPrice: 600,
        options: [
          general.domain.all,
          wordpress.hosting.basic,
          general.design.basicPrototype,
          wordpress.developmentPackage.basic,
          wordpress.security.basic
        ]
      }
    ]
  }
];
