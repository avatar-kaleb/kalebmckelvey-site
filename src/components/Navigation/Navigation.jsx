import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers/NavigationDrawer";
import ToolbarActions from "../ToolbarActions/ToolbarActions";
import Footer from "../Footer/Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

class Navigation extends Component {
  componentDidMount() {
    //  * set default visible on page load to prevent weird animations
    if (NavigationDrawer.getCurrentMedia().mobile) {
      NavigationDrawer.defaultVisible = "false";
    } else {
      NavigationDrawer.defaultVisible = "true";
    }
  }

  render() {
    const { children, config, LocalTitle } = this.props;
    const footerLinks = LocalTitle !== "About";
    return (
      <NavigationDrawer
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
