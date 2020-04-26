import { Link } from 'gatsby';
import LogRocket from 'logrocket';
import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers/NavigationDrawer';
import Footer from '../Footer/Footer';
import ToolbarActions from '../ToolbarActions/ToolbarActions';
import './Navigation.scss';
import GetNavList from './NavList';

/**
 * Determines whether the nav item should be active based on two conditions
 * 1. If the key is included in the path name
 * 2. if the key is blog, and pathname is, which handles page load on homepage
 * @param {Object} key - key from nav item
 * @returns {Boolean}
 */
function _isNavItemActive(key) {
  if (typeof window !== `undefined` && window.location) {
    const {
      location: { pathname },
    } = window;
    return pathname.includes(key) || (key === 'home' && pathname === '/');
  }

  return false;
}

/**
 * Navigation Component that also initialized Log Rocket
 */
class Navigation extends Component {
  constructor(props) {
    super(props);

    // Update the items so they have an onClick handler to change the current page
    this.navItems = this._createNavItems();

    // add log rocket error handling in prod!
    if (process.env.NODE_ENV === 'production') {
      LogRocket.init('0my3ji/kaleb-mckelvey-site');
    }
  }

  /**
   * Event handler for nav item clicks, it rebuilds the nav items based on
   * the new key, setting the item or nested item to active
   *
   * Since the Nav list is only ~10 items, this should be quick but
   * can optimize if needed
   * @param {Object} key
   */
  _setPage = (key) => {
    this.navItems = this.navItems.map((item) => {
      if (item.divider) {
        return item;
      }

      const newItem = { ...item };
      if (newItem.nestedItems && newItem.nestedItems.length) {
        newItem.nestedItems = newItem.nestedItems.map((nestedItem) => {
          if (nestedItem.divider) {
            return nestedItem;
          }

          return {
            ...nestedItem,
            active: nestedItem.key === key,
          };
        });
      }

      return { ...newItem, active: newItem.key === key };
    });
  };

  /**
   * on first load of the site, decorate the nav items with two things:
   * active property - Determined by current active url location for nav item
   * onClick - set to custom event handler to set primary text color / styling properly
   * @returns {Array}
   */
  _createNavItems() {
    return GetNavList().map((item) => {
      if (item.divider) {
        return item;
      }

      // handle active class on page load
      const newItem = { ...item };
      newItem.active = _isNavItemActive(newItem.key);

      let hasFoundActive = false; // prevent looking for active once found
      if (newItem.nestedItems && newItem.nestedItems.length) {
        newItem.nestedItems = newItem.nestedItems.map((nestedItem) => {
          if (nestedItem.divider) {
            return nestedItem;
          }

          const newNestedItem = { ...nestedItem };
          // handle active class for sub nav on page load
          if (hasFoundActive === false && _isNavItemActive(newNestedItem.key)) {
            newNestedItem.active = true;
            newItem.defaultVisible = true;
            hasFoundActive = true;
          }

          return {
            ...newNestedItem,
            onClick: () => this._setPage(newNestedItem.key),
          };
        });
      }

      return {
        ...newItem,
        onClick: () => this._setPage(newItem.key),
      };
    });
  }

  /**
   * React component method
   */
  render() {
    const { children, config, LocalTitle, location, setIsLightTheme } = this.props;

    const title = (
      <div>
        <h2>
          <Link className="drawer-title--color" to="/" onClick={() => this._setPage('home')}>
            {config.siteTitle}
          </Link>
        </h2>
        <p>{config.siteTagline}</p>
      </div>
    );

    return (
      <NavigationDrawer
        contentClassName="main-content"
        desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        drawerTitle={title}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        navItems={this.navItems}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarActions={
          <ToolbarActions config={config} location={location} setIsLightTheme={setIsLightTheme} />
        }
        toolbarTitle={LocalTitle}
      >
        <div className="main-container">{children}</div>
        <Footer className="footer" />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
