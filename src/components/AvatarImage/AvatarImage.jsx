import React, { Component } from "react";
import "./AvatarImage.scss";

export default class AvatarImage extends Component {
  render() {
    const { alt, animation = 'fadeInLeft', src } = this.props;
    return (
      <div className="avatarImage-wrapper wrapper-flex-column--center">
        <img className={`animated ${animation}`} src={src} alt={alt} />
      </div>
    );
  }
}
