import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList() {
  const NavList = [];

  // Home / About me
  NavList.push(
    {
      key: "blog",
      primaryText: "Blog",
      component: Link,
      to: "/"
    },
    {
      key: "about-me",
      primaryText: "About Me",
      component: Link,
      to: "/about-me/"
    }
  );

  // Professional
  NavList.push({
    key: "professional-header",
    primaryText: "Professional",
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: "drawer-nav-nested-list-item",
    nestedItems: [
      {
        key: "portfolio",
        primaryText: "Portfolio",
        leftIcon: <FontIcon>zoom_in</FontIcon>,
        component: Link,
        to: "/professional/portfolio/"
      },
      {
        key: "services",
        primaryText: "Services",
        leftIcon: <FontIcon>business_center</FontIcon>,
        component: Link,
        to: "/professional/services/"
      },
      {
        divider: true
      }
    ]
  });

  // Journey to Achieve
  NavList.push({
    key: "journey-to-achieve-header",
    primaryText: "Journey to Achieve",
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: "drawer-nav-nested-list-item",
    nestedItems: [
      {
        key: "about-the-journey",
        primaryText: "About the Journey",
        leftIcon: <FontIcon>info</FontIcon>,
        component: Link,
        to: "/journey-to-achieve/about-the-journey/"
      },
      {
        key: "core-fundamentals",
        primaryText: "Core Fundamentals",
        leftIcon: <FontIcon>fitness_center</FontIcon>,
        component: Link,
        to: "/journey-to-achieve/core-fundamentals/"
      },
      {
        primaryText: "Scholarship",
        leftIcon: <FontIcon>school</FontIcon>,
        component: Link,
        to: "/journey-to-achieve/scholarship/"
      },
      {
        key: "observations",
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
    key: "resources-header",
    primaryText: "Resources",
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: "drawer-nav-nested-list-item",
    nestedItems: [
      {
        key: "life-resources",
        primaryText: "Life",
        leftIcon: <FontIcon>local_library</FontIcon>,
        component: Link,
        to: "/resources/life/"
      },
      {
        key: "dev-resources",
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

  // Contact and archives
  NavList.push(
    {
      key: "contact-me",
      primaryText: "Contact Me",
      component: Link,
      to: "/contact-me/"
    },
    {
      key: "archives",
      primaryText: "Archives",
      component: Link,
      to: "/archives"
    },
    {
      divider: true
    }
  );
  return NavList;
}
export default GetNavList;
