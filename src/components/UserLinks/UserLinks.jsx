import React from 'react';
import Button from 'react-md/lib/Buttons';
import './UserLinks.scss';

/**
 * User links for users to follow me from
 *
 * @param {Array} userLinks
 * @param {Boolean} labeled
 * @returns
 */
function getLinkElements(userLinks, labeled) {
  return userLinks.map(link => (
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

const UserLinks = ({ config: { userLinks }, labeled }) => {
  if (!userLinks) {
    return null;
  }
  return <div className="user-links">{getLinkElements(userLinks, labeled)}</div>;
};

export default UserLinks;
