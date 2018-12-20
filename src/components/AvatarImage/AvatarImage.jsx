import React from 'react';
import './AvatarImage.scss';

export default function AvatarImage({ alt, animation = 'fadeInLeft', src }) {
  return (
    <div className="avatarImage wrapper-flex-column--center">
      <img className={`animated ${animation}`} src={src} alt={alt} />
    </div>
  );
}
