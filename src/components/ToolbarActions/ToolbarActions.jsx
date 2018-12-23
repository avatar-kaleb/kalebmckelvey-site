import React from 'react';
import UserLinks from '../UserLinks/UserLinks';
import './ToolbarActions.scss';

const Toolbar = ({ config }) => (
  <div className="toolbar-actions">
    <div className="userlinks-container">
      <UserLinks config={config} />
    </div>
  </div>
);
export default Toolbar;
