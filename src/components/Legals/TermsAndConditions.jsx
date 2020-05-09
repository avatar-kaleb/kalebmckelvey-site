import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';

/**
 * Terms and Conditions Page Component
 */
const TermsAndConditions = () => (
  <div className="terms-and-conditions wrapper-flex-column--center md-grid mobile-fix">
    <Card className="md-cell md-cell--8 md-cell--10-tablet" title="Terms and Conditions">
      <CardText>
        <p>
          Welcome to &nbsp;
          <i>Kaleb McKelvey</i>. If you continue to browse and use this website you are agreeing to
          comply with and be bound by the following terms and conditions of use, which together with
          our privacy policy govern &nbsp;
          <i>Kaleb McKelvey</i>
          &apos;s relationship with you in relation to this website. The term &nbsp;
          <i>Kaleb McKelvey</i>
          &nbsp; or &apos;us&apos; or &apos;we&apos; refers to the owner of the website. The term
          &apos;you&apos; refers to the user or viewer of our website. The use of this website is
          subject to the following terms of use:
          <ul>
            <li>
              The content of the pages of this website is for your general information and use only.
              It is subject to change without notice.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
              timeliness, performance, completeness or suitability of the information and materials
              found or offered on this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and we expressly exclude
              liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on this website is entirely at your own risk,
              for which we shall not be liable. It shall be your own responsibility to ensure that
              any products, services or information available through this website meet your
              specific requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to us. This material
              includes, but is not limited to, the design, layout, look, appearance and graphics.
              Reproduction is prohibited other than in accordance with the copyright notice, which
              forms part of these terms and conditions.
            </li>
            <li>
              All trademarks reproduced in this website, which are not the property of, or licensed
              to the operator, are acknowledged on the website.
            </li>
            <li>
              Unauthorized use of this website may give rise to a claim for damages and/or be a
              criminal offense.
            </li>
            <li>
              From time to time this website may also include links to other websites. These links
              are provided for your convenience to provide further information. They do not signify
              that we endorse the website(s). We have no responsibility for the content of the
              linked website(s).
            </li>
          </ul>
        </p>
      </CardText>
    </Card>
  </div>
);

export default TermsAndConditions;
