import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import UserLinks from '../UserLinks/UserLinks';
import './ToolbarActions.scss';
/**
 * Displays the top toolbar in navigation, with user links if provided
 * @param {Object} config - the site config that contains user links
 */
const Toolbar = ({ config, location, setIsLightTheme }) => (
  <ThemeContext.Consumer>
    {({ isLightTheme, _ }) => (
      <div className="toolbar-actions">
        <div className="userlinks-container">
          <UserLinks
            config={config}
            setIsLightTheme={setIsLightTheme}
            isLightTheme={isLightTheme}
            canSwitchTheme={location.pathname === '/'}
          />
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
);
export default Toolbar;
