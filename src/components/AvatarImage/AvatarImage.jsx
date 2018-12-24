import React from 'react';
import './AvatarImage.scss';

/**
 * Avatar image with an animation given through props
 * @param {String} alt - the alt tag for the image
 * @param {String} animation - animation from the animate.css library
 * @param {String} src - the image source
 */
const AvatarImage = ({ alt, animation = 'fadeInLeft', src }) => (
  <div className="avatar-image wrapper-flex-column--center">
    <img className={`animated ${animation}`} src={src} alt={alt} />
  </div>
);

export default AvatarImage;
