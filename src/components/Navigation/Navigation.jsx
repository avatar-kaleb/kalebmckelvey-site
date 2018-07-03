import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers/NavigationDrawer";
import ToolbarActions from "../ToolbarActions/ToolbarActions";
import Footer from "../Footer/Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

class Navigation extends Component {
  componentDidMount() {
    if (NavigationDrawer.getCurrentMedia().desktop) {
      NavigationDrawer.defaultVisible = true;
    } else {
      NavigationDrawer.defaultVisible = false;
    }
  }

  render() {
    const { children, config, LocalTitle } = this.props;
    const footerLinks = LocalTitle !== "About";
    return (
      <NavigationDrawer
        includeDrawerHeader
        contentClassName="main-content"
        desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        drawerTitle={config.siteTitle}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        navItems={GetNavList()}
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
