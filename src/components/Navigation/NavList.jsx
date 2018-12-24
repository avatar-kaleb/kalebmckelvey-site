import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'gatsby';

function GetNavList() {
  const NavList = [];

  // home
  NavList.push({
    key: 'home',
    primaryText: 'Home',
    component: Link,
    to: '/'
  });

  // Blog
  NavList.push({
    key: 'blog-header',
    primaryText: 'Blog',
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: 'drawer-nav-nested-list-item',
    nestedItems: [
      {
        key: 'journey-to-achieve-category',
        primaryText: 'Journey to Achieve',
        leftIcon: <FontIcon>flight_takeoff</FontIcon>,
        component: Link,
        to: '/categories/journey-to-achieve/'
      },
      {
        key: 'new-york-city-category',
        primaryText: 'New York City',
        leftIcon: <FontIcon>location_city</FontIcon>,
        component: Link,
        to: '/categories/new-york-city/'
      },
      {
        key: 'tech-category',
        primaryText: 'Tech',
        leftIcon: <FontIcon>computer</FontIcon>,
        component: Link,
        to: '/categories/tech/'
      },
      {
        key: 'archives',
        primaryText: 'Archives',
        leftIcon: <FontIcon>folder</FontIcon>,
        component: Link,
        to: '/archives'
      },
      {
        divider: true
      }
    ]
  });

  // about me / bucket list
  NavList.push(
    {
      key: 'about-me',
      primaryText: 'About Me',
      component: Link,
      to: '/about-me/'
    },
    {
      key: 'nyc-bucket-list',
      primaryText: 'NYC Bucket List',
      component: Link,
      to: '/nyc-bucket-list/'
    }
  );

  // Journey to Achieve
  NavList.push({
    key: 'journey-to-achieve-header',
    primaryText: 'Journey to Achieve',
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: 'drawer-nav-nested-list-item',
    nestedItems: [
      {
        key: 'about-the-journey',
        primaryText: 'About the Journey',
        leftIcon: <FontIcon>info</FontIcon>,
        component: Link,
        to: '/journey-to-achieve/about-the-journey/'
      },
      {
        key: 'core-fundamentals',
        primaryText: 'Core Fundamentals',
        leftIcon: <FontIcon>fitness_center</FontIcon>,
        component: Link,
        to: '/journey-to-achieve/core-fundamentals/'
      },
      {
        primaryText: 'Scholarship',
        leftIcon: <FontIcon>school</FontIcon>,
        component: Link,
        to: '/journey-to-achieve/scholarship/'
      },
      {
        key: 'observations',
        primaryText: 'Observations',
        leftIcon: <FontIcon>language</FontIcon>,
        component: Link,
        to: '/journey-to-achieve/observations/'
      },
      {
        divider: true
      }
    ]
  });

  // Resources
  NavList.push({
    key: 'resources-header',
    primaryText: 'Resources',
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: 'drawer-nav-nested-list-item',
    nestedItems: [
      {
        key: 'life-resources',
        primaryText: 'Life',
        leftIcon: <FontIcon>local_library</FontIcon>,
        component: Link,
        to: '/resources/life/'
      },
      {
        key: 'dev-resources',
        primaryText: 'Development',
        leftIcon: <FontIcon>desktop_mac</FontIcon>,
        component: Link,
        to: '/resources/development'
      },
      {
        divider: true
      }
    ]
  });

  // Professional
  NavList.push({
    key: 'professional-header',
    primaryText: 'Professional',
    expanderIcon: <FontIcon>arrow_drop_down</FontIcon>,
    nestedListClassName: 'drawer-nav-nested-list-item',
    nestedItems: [
      {
        key: 'portfolio',
        primaryText: 'Portfolio',
        leftIcon: <FontIcon>zoom_in</FontIcon>,
        component: Link,
        to: '/professional/portfolio/'
      },
      {
        key: 'services',
        primaryText: 'Services',
        leftIcon: <FontIcon>business_center</FontIcon>,
        component: Link,
        to: '/professional/services/'
      },
      {
        divider: true
      }
    ]
  });

  // Contact
  NavList.push(
    {
      key: 'contact-me',
      primaryText: 'Contact Me',
      component: Link,
      to: '/contact-me/'
    },
    {
      divider: true
    }
  );
  return NavList;
}
export default GetNavList;
