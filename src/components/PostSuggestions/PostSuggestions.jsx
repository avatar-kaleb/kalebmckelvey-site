import React, { Component } from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";
import "./PostSuggestions.scss";

export default class PostSuggestions extends Component {
  render() {
    const { postNode } = this.props;
    const postFields = postNode.fields;
    return (
      <div className="post-suggestions md-grid md-cell--12">
        <Link to={postFields.prevSlug} className="post-suggestion">
          <FontIcon forceFontSize forceSize={32} className="secondary-color arrow-nav">
            arrow_back
          </FontIcon>
          <div className="headline-container">
            <h6 className="md-headline secondary-color">Previous</h6>
          </div>
        </Link>
        <Link to={postFields.nextSlug} className="post-suggestion">
          <div className="headline-container">
            <h6 className="md-headline secondary-color ">Next</h6>
          </div>
          <FontIcon forceFontSize forceSize={32} className="secondary-color arrow-nav">
            arrow_forward
          </FontIcon>
        </Link>
      </div>
    );
  }
}
