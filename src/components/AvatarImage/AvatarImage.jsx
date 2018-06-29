import React, { Component } from "react";
import "./AvatarImage.scss";

export default class AvatarImage extends Component {
  render() {
    const { alt, src } = this.props;
    return (
      <div className="avatarImage-wrapper">
        <img className="animated bounce" src={src} alt={alt} />
      </div>
    );
  }
}
