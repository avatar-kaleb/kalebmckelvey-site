import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import UserLinks from '../UserLinks/UserLinks';
import './ToolbarActions.scss';
/**
 * Displays the top toolbar in navigation, with user links if provided
 * @param {Object} config - the site config that contains user links
 */
const Toolbar = ({ config, location }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className='toolbar-actions'>
      <div className='userlinks-container'>
        <UserLinks
          config={config}
          // setIsLightTheme={setIsLightTheme}
          // isLightTheme={themeContext.isLightTheme}
          canSwitchTheme={location.pathname === '/'}
        />
      </div>
    </div>
  );
};
export default Toolbar;
