import React from 'react';
import './AvatarImage.scss';

const AvatarImage = ({ alt, animation = 'fadeInLeft', src }) => (
  <div className="avatar-image wrapper-flex-column--center">
    <img className={`animated ${animation}`} src={src} alt={alt} />
  </div>
);

export default AvatarImage;
