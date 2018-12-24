import React from 'react';
import UserLinks from '../UserLinks/UserLinks';
import './ToolbarActions.scss';

/**
 * Displays the top toolbar in navigation, with user links if provided
 * @param {Object} config - the site config that contains user links
 */
const Toolbar = ({ config }) => (
  <div className="toolbar-actions">
    <div className="userlinks-container">
      <UserLinks config={config} />
    </div>
  </div>
);
export default Toolbar;
