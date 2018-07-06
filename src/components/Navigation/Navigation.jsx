import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers/NavigationDrawer";
import ToolbarActions from "../ToolbarActions/ToolbarActions";
import Footer from "../Footer/Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

class Navigation extends Component {
  constructor() {
    super();

    // Update the items so they have an onClick handler to change the current page
    this.navItems = GetNavList().map(item => {
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
            onClick: () => this.setPage(nestedItem.key)
          };
        });
      }

      return {
        ...item,
        onClick: () => this.setPage(item.key)
      };
    });

    console.log(this.navItems);
  }

  setPage = key => {
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

  render() {
    const { children, config, LocalTitle } = this.props;
    const footerLinks = LocalTitle !== "About";
    const title = (
      <div>
        <h2>{config.siteTitle}</h2>
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
        <Footer userLinks={footerLinks} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
