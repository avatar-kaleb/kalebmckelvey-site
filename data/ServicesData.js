import ServiceOptions from "./ServiceOptionsData";

const { general, webApp, wordpress } = ServiceOptions;

// lowest package total price option should match min slider option, because this
// is how I am determining which package to show based on slider option picked
module.exports = [
  {
    title: "WordPress Site/Blog",
    subtitle: "User friendly, professional blog or website!",
    description: `<p>The WordPress content management system makes it easy for users to update content, write new blog posts, and manage SEO. Depending on budget, I offer a few different packages that will<strong> take your career or business to the next level!</strong></p>`,
    sliderOptions: {
      showSlider: true,
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
          wordpress.design.basicPrototype,
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
          wordpress.design.basicPrototype,
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
          wordpress.design.basicPrototype,
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
          wordpress.design.basicPrototype,
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
          wordpress.design.basicPrototype,
          wordpress.developmentPackage.basic,
          wordpress.security.basic
        ]
      }
    ]
  },
  {
    title: "Custom Web Application",
    subtitle: "Customized web applications for your business",
    description: `<p>Have a new business idea that requires custom development?  I follow best practices to develop clean solutions that meet your needs. Testing can be included if you prefer (I do), but does mean more development time.`,
    sliderOptions: {
      showSlider: true,
      label: "Budget",
      min: 1500,
      max: 4500,
      step: 1500,
      discreteTicks: 1500
    },
    packageOptions: [
      {
        name: "basic",
        totalPrice: 1500,
        options: [
          general.domain.all,
          webApp.design.mockUp,
          webApp.development.basic,
          webApp.userManagement.basic,
          wordpress.SEO.basic
        ]
      },
      {
        id: "intermediate",
        totalPrice: 3000,
        options: [
          general.domain.all,
          webApp.design.mockUp,
          webApp.development.intermediate,
          webApp.userManagement.intermediate,
          wordpress.SEO.basic
        ]
      },
      {
        id: "complex",
        totalPrice: 4500,
        options: [
          general.domain.all,
          webApp.design.prototype,
          webApp.development.complex,
          webApp.userManagement.complex,
          wordpress.SEO.basic
        ]
      }
    ]
  },
  {
    title: "Web Development PT Contracting",
    subtitle: "Developing features to impact your users!",
    description: `<p>Need extra help on your business's website or web application? I implement features to spec by following team standards, workflow, and branching strategies.</p>

    <p>I have experience in React, Polymer, Node, Springboot, Sass, and other modern web technologies.`,
    sliderOptions: {
      showSlider: false
    },
    packageOptions: []
  },
  {
    title: "AX Dynamics PT Contracting",
    subtitle: "Helping you hit project deadlines!",
    description: `<p>With over 3 years of experience working with AX 2012 R2, I am here to help with tasks that help improve user workflows through customizations, or help with data migrations and upgrades.</p><p>Have a task? I am here to help!</p>`,
    sliderOptions: {
      showSlider: false
    },
    packageOptions: []
  }
];
