import React, { useContext } from 'react';
import Button from 'react-md/lib/Buttons';
import { ThemeContext } from '../../context/ThemeContext';
import './UserLinks.scss';

/**
 * User links for users to follow me from
 *
 * @param {Array} userLinks
 * @param {Boolean} labeled
 * @returns
 */
function getLinkElements(userLinks, labeled) {
  return userLinks.map((link) => (
    <Button
      icon={!labeled}
      flat={labeled}
      secondary
      key={link.label}
      iconClassName={link.iconClassName}
      href={link.url}
    >
      {labeled ? link.label : ''}
    </Button>
  ));
}

const UserLinks = ({ config: { userLinks }, labeled, canSwitchTheme }) => {
  if (!userLinks) {
    return null;
  }

  const themeContext = useContext(ThemeContext);

  return (
    <div className='user-links'>
      {getLinkElements(userLinks, labeled)}
      {canSwitchTheme ? (
        <>
          {' | '}
          <Button
            className='md-divider-border--left'
            icon
            onClick={(e) => themeContext.setIsLightTheme(!themeContext.isLightTheme)}
          >
            lightbulb
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default UserLinks;
