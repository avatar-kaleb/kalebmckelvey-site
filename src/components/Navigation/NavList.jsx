import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList(config) {
  const NavList = [
    // {
    //   primaryText: "Home",
    //   leftIcon: <FontIcon>home</FontIcon>,
    //   component: Link,
    //   to: "/"
    // },
    // {
    //   divider: true
    // }
  ];

  // About
  NavList.push(
    {
      primaryText: "Home",
      component: Link,
      to: "/"
    },
    {
      primaryText: "About Me",
      component: Link,
      to: "/about-me/"
    }
  );

  // Professional
  NavList.push({
    primaryText: "Professional",
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: "drawer-nav-nested-list-item",
    nestedItems: [
      {
        primaryText: "Portfolio",
        leftIcon: <FontIcon>zoom_in</FontIcon>,
        component: Link,
        to: "/professional/portfolio/",
        activeClassName: "md-text-active--theme-primary"
      },
      {
        primaryText: "Resume",
        leftIcon: <FontIcon>file_copy</FontIcon>,
        component: Link,
        to: "/professional/resume/"
      },
      {
        primaryText: "Services",
        leftIcon: <FontIcon>work</FontIcon>,
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
    primaryText: "Journey to Achieve",
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
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
      {
        primaryText: "Scholarship",
        leftIcon: <FontIcon>school</FontIcon>,
        component: Link,
        to: "/journey-to-achieve/scholarship/"
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
    nestedItems: [
      {
        primaryText: "Development",
        leftIcon: <FontIcon>developer_mode</FontIcon>,
        component: Link,
        to: "/resources/development"
      },
      {
        primaryText: "Life",
        leftIcon: <FontIcon>notes</FontIcon>,
        component: Link,
        to: "/resources/life"
      },
      {
        divider: true
      }
    ]
  });

  // contact and observations
  NavList.push(
    {
      primaryText: "Contact Me",
      component: Link,
      to: "/contact-me/"
    },
    {
      primaryText: "Observations",
      component: Link,
      to: "/observations/"
    },
    {
      divider: true
    }
  );

  return NavList;
}
export default GetNavList;
