module.exports = {
  general: {
    domain: {
      all: {
        name: "Official Domain",
        description: `<p>Domains such as www.example.com or www.example.org have varying cost. You will be responsible to pay this through your hosting company or google domains.</p>`,
        price: "$~20/yr"
      }
    },
    design: {
      basicDesign: {
        name: "Basic Design Mock Ups",
        description: `<p>I'll create basic design mockups from a free WordPress theme chosen together, with requested colors, fake data, and fake navigation items.</p><p>The goal is to get the look and feel of the site correct, but not all details or content.</p>`,
        price: "$50"
      },
      basicPrototype: {
        name: "Basic Theme Prototype",
        description: `<p>I'll create a basic prototype from a free WordPress theme chosen together, with requested colors, fake data, and fake navigation items.</p><p>The goal is to get the look and feel of the site correct, but not all details or content.</p>`,
        price: "$50"
      }
    }
  },
  wordpress: {
    developmentPackage: {
      basic: {
        name: "Basic Development Package",
        description: `<p>
          I will configure the selected Free WordPress theme with the options provided and responsive design. Additional features can be added if plugins exist to easily do so, depending on the functionality requested.
        </p><p>
          Before beginning site configuration and development, we will determine the site outline with content (provided by you). Site will match the outline with provided content when completed.`,
        price: "$300"
      },
      basicPro: {
        name: "Basic Pro Development Package",
        description: `<p>
          I will configure the selected Pro WordPress theme with the options provided. Additional features can be added if plugins exist to easily do so, depending on the functionality requested.
        </p><p>
          Before beginning site configuration and development, we will determine the site outline with content (provided by you). Site will match the outline with provided content when completed.`,
        price: "$400"
      },
      custom: {
        name: "Custom Pro Development Package",
        description: `<p>
          I will customize and make layout with WordPress page builders to meet the design and brand your looking for. Sites will be responsive, mobile friendly, clean,and modern. I've priced this option with basic hosting, but performance can be increased with more expensive options..
        </p><p>
          Before beginning site configuration and development, we will determine the site outline with content (provided by you). Site will match the outline with provided content when completed.`,
        price: "$500"
      }
    },
    hosting: {
      starter: {
        name: "Starter Shared Hosting",
        description: `<p>Bought from hosting companies such as hostgator or dreamhost, this option is the cheapest. Many sites offer starter deals for the first year.</p>
        <p>The hosting company you buy from hosts multiple sites on one server. This means you have limited memory and space, which will impact performance of complex sites. </p>
        <p>For new blogs or sites, starter shared hosting can always be upgraded later.</p>`,
        price: "$~100/yr"
      },
      basic: {
        name: "Basic Shared Hosting",
        description: `<p>Bought from hosting companies such as hostgator or dreamhost, this option should be used after finding starter hosting deals for your site's first year.</p>
        <p>The hosting company you buy from hosts multiple sites on one server. This means you have limited memory and space, which will impact performance of complex sites. </p>
        <p>For new blogs or sites, basic shared hosting can always be upgraded later.</p>`,
        price: "$~200/yr"
      }
    },
    security: {
      basic: {
        name: "Basic Security",
        description: `<p>Recommended security options set from the
          <a rel=noopener target="_blank" href="https://wordpress.org/plugins/all-in-one-wp-security-and-firewall/">All In One Security plugin</a></p>`,
        price: "$30"
      }
    },
    SEO: {
      basic: {
        name: "SEO",
        description: `<p><a rel=noopener target="_blank" href="https://yoast.com/">Yoast SEO</a> will be installed and set up properly for your use. Once set up, keywords and SEO content must be updated by you.
          </p>`,
        price: "Included"
      }
    }
  }
};
