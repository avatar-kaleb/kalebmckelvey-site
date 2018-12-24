import React from 'react';
import Helmet from 'react-helmet';
import compact from 'lodash/compact';
import last from 'lodash/last';
import split from 'lodash/split';
import startCase from 'lodash/startCase';

import truncate from 'lodash/truncate';
import Navigation from '../components/Navigation/Navigation';
import config from '../../data/SiteConfig';
import './index.scss';
import './global.scss';
import 'font-awesome/scss/font-awesome.scss';

function getLocalTitle(pathname) {
  // fix gatsby build -- window won't be available during build
  if (typeof window === 'undefined') {
    return '';
  }

  // this takes the last part of the path by splittng with /, then removes the
  // blank strings from the array, and transforms the last element to start case
  let title = startCase(last(compact(split(pathname, '/'))));

  if (window.innerWidth < 360) {
    title = truncate(title, {
      length: 25,
      separator: ' '
    });
  } else if (window.innerWidth >= 360 && window.innerWidth < 768) {
    title = truncate(title, {
      length: 30,
      separator: ' '
    });
  } else if (window.innerWidth >= 768 && window.innerWidth < 1025) {
    title = truncate(title, {
      length: 45,
      separator: ' '
    });
  }

  return title || 'Home'; // if title is blank, means we are at / path
}

const Layout = ({ children, location, ...props }) => (
  <Navigation config={config} LocalTitle={getLocalTitle(location.pathname)}>
    <div>
      <Helmet>
        <meta
          htmlAttributes="{ lang: 'en', class: 'custom-theme'}"
          name="description"
          content={config.siteDescription}
        />
      </Helmet>
      {children}
    </div>
  </Navigation>
);
export default Layout;
