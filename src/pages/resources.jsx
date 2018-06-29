import React, { Component } from "react";
import Helmet from "react-helmet";
import Tab from "react-md/lib/Tabs/Tab";
import Tabs from "react-md/lib/Tabs/Tabs";
import TabsContainer from "react-md/lib/Tabs/TabsContainer";

import DevelopmentResources from "../../src/components/DevelopmentResources/DevelopmentResources";
import LifeResources from "../../src/components/LifeResources/LifeResources";

import config from "../../data/SiteConfig";

class ResourcesPage extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title>{`Resources | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/resources/`} />
        </Helmet>
        <TabsContainer colored>
          <Tabs tabId="life-resources">
            <Tab label="Life Resources">
              <LifeResources />
            </Tab>
            <Tab label="Dev Resources">
              <DevelopmentResources />
            </Tab>
          </Tabs>
        </TabsContainer>
      </div>
    );
  }
}

export default ResourcesPage;
