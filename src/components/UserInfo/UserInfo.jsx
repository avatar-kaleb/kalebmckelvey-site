import React from 'react';
import Avatar from 'react-md/lib/Avatars';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import FontIcon from 'react-md/lib/FontIcons';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import { Follow } from 'react-twitter-widgets';
import './UserInfo.scss';

/**
 * Shows user info at the bottom of a page before the comments
 * @param {Object} config - site config with user info data
 * @param {Boolean} expanded - is the text expanded?
 */
const UserInfo = ({ config, expanded }) => {
  const { userAvatar, userName, userLocation, userDescription, userLinks, userTwitter } = config;
  if (!userAvatar && !userName && !userLocation && !userDescription) {
    return null;
  }
  return (
    <Card className="md-grid md-cell md-cell--12 user-info">
      <CardTitle
        expander={!expanded}
        avatar={userAvatar && <Avatar src={userAvatar} role="presentation" />}
        title={userName}
        subtitle={
          userTwitter ? <Follow username={userTwitter} options={{ count: 'none' }} /> : 'Author'
        }
      />
      <CardText expandable={!expanded}>
        {userLocation && (
          <IconSeparator component="p" label={userLocation} iconBefore>
            <FontIcon iconClassName="fa fa-map-marker" />
          </IconSeparator>
        )}
        <p>{userDescription}</p>
      </CardText>
    </Card>
  );
};

export default UserInfo;
