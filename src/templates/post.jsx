import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Card from 'react-md/lib/Cards';
import CardText from 'react-md/lib/Cards/CardText';
import config from '../../data/SiteConfig';
import Disqus from '../components/Disqus/Disqus';
import PostCover from '../components/PostCover/PostCover';
import PostInfo from '../components/PostInfo/PostInfo';
import PostSuggestions from '../components/PostSuggestions/PostSuggestions';
import PostTags from '../components/PostTags/PostTags';
import SEO from '../components/SEO/SEO';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import UserInfo from '../components/UserInfo/UserInfo';
import './b16-tomorrow-dark.css';
import './post.scss';

export default class PostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
    }
  }

  render() {
    const { isMobile } = this.state;
    const {
      data: { markdownRemark: postNode },
      pathContext: { slug }
    } = this.props;
    const expanded = !isMobile;
    const post = postNode.frontmatter;
    const postOverlapClass = isMobile ? 'post-overlap-mobile' : 'post-overlap';

    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div className="post-page md-grid md-grid--no-spacing animated fadeIn slow">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <PostCover postNode={postNode} isMobile={isMobile} />
        <div className={`md-grid md-cell--9 post-page-contents mobile-fix ${postOverlapClass}`}>
          <Card className="md-grid md-cell md-cell--12 post">
            <CardText className="post-body">
              <h1 className="md-display-1 post-header">{post.title}</h1>
              <PostInfo postNode={postNode} />
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </CardText>
            <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} isMobile={isMobile} />
              <PostSuggestions postNode={postNode} />
            </div>
          </Card>
          <UserInfo className="md-grid md-cell md-cell--12" config={config} expanded={expanded} />
          <Disqus postNode={postNode} expanded={expanded} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
      }
    }
  }
`;
