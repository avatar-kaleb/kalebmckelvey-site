import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';

/**
 * Copyright Notice Page Component
 */
const CopyrightNotice = () => (
  <div className="copyright-notice wrapper-flex-column--center md-grid mobile-fix">
    <Card className="md-cell md-cell--10 md-cell--10-tablet" title="Copyright Notice">
      <CardText>
        <p>
          This website and its content is copyright of &nbsp;
          <i>Kaleb McKelvey</i>
          &nbsp;- ©<i>Kaleb McKelvey</i>
          &nbsp;2017. All rights reserved. Any redistribution or reproduction of part or all of the
          contents in any form is prohibited other than the following:
          <ul>
            <li>
              you may print or download to a local hard disk extracts for your personal and
              non-commercial use only
            </li>
            <li>
              you may copy the content to individual third parties for their personal use, but only
              if you acknowledge the website as the source of the material
            </li>
          </ul>
          You may not, except with our express written permission, distribute or commercially
          exploit the content. Nor may you transmit it or store it in any other website or other
          form of electronic retrieval system.
        </p>
      </CardText>
    </Card>
  </div>
);

export default CopyrightNotice;
