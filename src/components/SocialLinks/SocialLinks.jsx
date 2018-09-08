import React, { Component } from "react";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon
} from "react-share";
import config from "../../../data/SiteConfig";
import "./SocialLinks.scss";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = config.siteUrl + config.pathPrefix + postPath;
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");

    return (
      <div>
        <div className="social-links">
          <RedditShareButton className="shareButton--cursor" url={url} title={post.title}>
            <RedditIcon round size={iconSize} />
            <RedditShareCount className="shareButton--cursor" url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </RedditShareCount>
          </RedditShareButton>
          <TwitterShareButton className="shareButton--cursor" url={url} title={post.title}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <GooglePlusShareButton className="shareButton--cursor" url={url}>
            <GooglePlusIcon round size={iconSize} />
            <GooglePlusShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </GooglePlusShareCount>
          </GooglePlusShareButton>
          <FacebookShareButton className="shareButton--cursor" url={url} quote={postNode.excerpt}>
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <LinkedinShareButton
            className="shareButton--cursor"
            url={url}
            title={post.title}
            description={postNode.excerpt}
          >
            <LinkedinIcon round size={iconSize} />
            <LinkedinShareCount className="shareButton--cursor" url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </LinkedinShareCount>
          </LinkedinShareButton>
        </div>
        <h6 className="social-links">Share this post!</h6>
      </div>
    );
  }
}

export default SocialLinks;
