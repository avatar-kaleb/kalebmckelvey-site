import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList() {
  const NavList = [];

  // Home / Services
  NavList.push(
    {
      key: "home",
      primaryText: "Home",
      component: Link,
      to: "/"
    },
    {
      primaryText: "Services",
      component: Link,
      to: "/services/"
    }
  );

  // Professional
  NavList.push({
    primaryText: "Professional",
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: "drawer-nav-nested-list-item",
    nestedItems: [
      {
        primaryText: "About Me",
        leftIcon: <FontIcon>person_pin</FontIcon>,
        component: Link,
        to: "/about-me/"
      },
      {
        primaryText: "Portfolio",
        leftIcon: <FontIcon>zoom_in</FontIcon>,
        component: Link,
        to: "/professional/portfolio/",
        activeClassName: "md-text--theme-primary"
      },
      {
        divider: true
      }
    ]
  });

  // Journey to Achieve
  NavList.push({
    primaryText: "Journey to Achieve",
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: "drawer-nav-nested-list-item",
    nestedItems: [
      {
        primaryText: "About the Journey",
        leftIcon: <FontIcon>info</FontIcon>,
        component: Link,
        to: "/journey-to-achieve/about-the-journey/"
      },
      {
        primaryText: "Core Fundamentals",
        leftIcon: <FontIcon>fitness_center</FontIcon>,
        component: Link,
        to: "/journey-to-achieve/core-fundamentals/"
      },
      // {
      //   primaryText: "Scholarship",
      //   leftIcon: <FontIcon>school</FontIcon>,
      //   component: Link,
      //   to: "/journey-to-achieve/scholarship/"
      // },
      {
        primaryText: "Observations",
        leftIcon: <FontIcon>language</FontIcon>,
        component: Link,
        to: "/journey-to-achieve/observations/"
      },
      {
        divider: true
      }
    ]
  });

  // Resources
  NavList.push({
    primaryText: "Resources",
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: "drawer-nav-nested-list-item",
    nestedItems: [
      {
        primaryText: "Life",
        leftIcon: <FontIcon>local_library</FontIcon>,
        component: Link,
        to: "/resources/life/"
      },
      {
        primaryText: "Development",
        leftIcon: <FontIcon>desktop_mac</FontIcon>,
        component: Link,
        to: "/resources/development"
      },
      {
        divider: true
      }
    ]
  });

  // Contact
  NavList.push(
    {
      primaryText: "Contact Me",
      component: Link,
      to: "/contact-me/"
    },
    {
      divider: true
    }
  );

  return NavList;
}
export default GetNavList;
