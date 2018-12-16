import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Tab from 'react-md/lib/Tabs/Tab';
import Tabs from 'react-md/lib/Tabs/Tabs';
import TabsContainer from 'react-md/lib/Tabs/TabsContainer';

import CopyrightNotice from '../../src/components/Legals/CopyrightNotice';
import Disclaimer from '../../src/components/Legals/Disclaimer';
import PrivacyPolicy from '../../src/components/Legals/PrivacyPolicy';
import TermsAndConditions from '../../src/components/Legals/TermsAndConditions';

import config from '../../data/SiteConfig';

class LegalPage extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title>{`Resources | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/legal/`} />
        </Helmet>
        <TabsContainer colored>
          <Tabs tabId="legal-pages">
            <Tab label="Copyright Notice">
              <CopyrightNotice />
            </Tab>
            <Tab label="Disclaimer">
              <Disclaimer />
            </Tab>
            <Tab label="Privacy Policy">
              <PrivacyPolicy />
            </Tab>
            <Tab label="Terms and Conditions">
              <TermsAndConditions />
            </Tab>
          </Tabs>
        </TabsContainer>
      </div>
    );
  }
}

export default LegalPage;
