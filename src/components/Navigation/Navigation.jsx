import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers/NavigationDrawer';
import ToolbarActions from '../ToolbarActions/ToolbarActions';
import Footer from '../Footer/Footer';
import GetNavList from './NavList';
import './Navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);

    // Update the items so they have an onClick handler to change the current page
    this.navItems = this._createNavItems();
  }

  /**
   * on first load of the site, decorate the nav items with two things:
   * active property - Determined by current active url location for nav item
   * onClick - set to custom event handler to set primary text color / styling properly
   * @returns {Array}
   */
  _createNavItems() {
    return GetNavList().map(item => {
      if (item.divider) {
        return item;
      }

      // handle active class on page load
      item.active = this._isNavItemActive(item.key);

      let hasFoundActive = false; // prevent looking for active once found
      if (item.nestedItems && item.nestedItems.length) {
        item.nestedItems = item.nestedItems.map(nestedItem => {
          if (nestedItem.divider) {
            return nestedItem;
          }

          // handle active class for sub nav on page load
          if (hasFoundActive === false && this._isNavItemActive(nestedItem.key)) {
            nestedItem.active = true;
            item.defaultVisible = true;
            hasFoundActive = true;
          }

          return {
            ...nestedItem,
            onClick: () => this._setPage(nestedItem.key)
          };
        });
      }

      return {
        ...item,
        onClick: () => this._setPage(item.key)
      };
    });
  }

  /**
   * Determines whether the nav item should be active based on two conditions
   * 1. If the key is included in the path name
   * 2. if the key is blog, and pathname is, which handles page load on homepage
   * @param {Object} key - key from nav item
   * @returns {Boolean}
   */
  _isNavItemActive(key) {
    if (typeof window !== `undefined` && window.location) {
      const {
        location: { pathname }
      } = window;
      return pathname.includes(key) || (key === 'blog' && pathname === '/');
    }

    return false;
  }

  /**
   * Event handler for nav item clicks, it rebuilds the nav items based on
   * the new key, setting the item or nested item to active
   *
   * Since the Nav list is only ~10 items, this should be quick but
   * can optimize if needed
   * @param {Object} key
   */
  _setPage = key => {
    this.navItems = this.navItems.map(item => {
      if (item.divider) {
        return item;
      }

      if (item.nestedItems && item.nestedItems.length) {
        item.nestedItems = item.nestedItems.map(nestedItem => {
          if (nestedItem.divider) {
            return nestedItem;
          }

          return {
            ...nestedItem,
            active: nestedItem.key === key
          };
        });
      }

      return { ...item, active: item.key === key };
    });
  };

  /**
   * React component method
   */
  render() {
    const { children, config, LocalTitle } = this.props;

    const title = (
      <div>
        <h2 className="drawer-title--color">{config.siteTitle}</h2>
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
        toolbarActions={<ToolbarActions config={config} />}
        toolbarTitle={LocalTitle}
      >
        <div className="main-container">{children}</div>
        <Footer className="footer" />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
