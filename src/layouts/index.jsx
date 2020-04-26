import 'font-awesome/scss/font-awesome.scss';
import compact from 'lodash/compact';
import last from 'lodash/last';
import split from 'lodash/split';
import startCase from 'lodash/startCase';
import truncate from 'lodash/truncate';
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Navigation from '../components/Navigation/Navigation';
import { ThemeContext } from '../context/themeContext';
import './global.scss';
import './index.scss';

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
      separator: ' ',
    });
  } else if (window.innerWidth >= 360 && window.innerWidth < 768) {
    title = truncate(title, {
      length: 30,
      separator: ' ',
    });
  } else if (window.innerWidth >= 768 && window.innerWidth < 1025) {
    title = truncate(title, {
      length: 45,
      separator: ' ',
    });
  }

  return title || 'Home'; // if title is blank, means we are at / path
}

const Layout = ({ children, location, ...props }) => {
  const storedIsLightTheme = localStorage.getItem('isLightTheme') === 'true';
  const [isLightTheme, setIsLightTheme] = useState(storedIsLightTheme);

  if (storedIsLightTheme !== isLightTheme) {
    localStorage.setItem('isLightTheme', isLightTheme);
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme }}>
      <div className={`${isLightTheme ? '' : 'dark-theme'}`}>
        <Navigation
          config={config}
          LocalTitle={getLocalTitle(location.pathname)}
          location={location}
          setIsLightTheme={setIsLightTheme}
        >
          <Helmet>
            <meta
              htmlAttributes="{ lang: 'en', class: 'custom-theme'}"
              name="description"
              content={config.siteDescription}
            />
          </Helmet>
          {children}
        </Navigation>
      </div>
    </ThemeContext.Provider>
  );
};
export default Layout;
