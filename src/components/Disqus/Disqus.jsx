import { DiscussionEmbed } from 'disqus-react';
import React, { useState } from 'react';
import Avatar from 'react-md/lib/Avatars';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import FontIcon from 'react-md/lib/FontIcons';
import Snackbar from 'react-md/lib/Snackbars';
import config from '../../../data/SiteConfig';

const Disqus = ({ postNode, expanded }) => {
  const [toasts, setToasts] = useState([]);

  const onSnackbarDismiss = () => {
    const [, ...toasts] = toasts;
    setToasts(toasts);
  };

  const notifyAboutComment = () => {
    const newToasts = [...toasts];
    newToasts.push({ text: 'New comment available!' });
    setToasts(newToasts);
  };

  if (!config.disqusShortname) {
    return null;
  }
  const post = postNode.frontmatter;
  const disqusConfig = { identifier: post.title, title: post.title };

  return (
    <Card className="md-grid md-cell md-cell--12 light">
      <CardTitle
        title="Comments"
        avatar={<Avatar icon={<FontIcon>comment</FontIcon>} />}
        expander={!expanded}
      />
      <CardText expandable={!expanded}>
        <DiscussionEmbed
          onLoad={() => console.log('loaded')}
          shortname={config.disqusShortname}
          config={disqusConfig}
        />
      </CardText>
      <Snackbar toasts={toasts} onDismiss={onSnackbarDismiss} />
    </Card>
  );
};

/**
 * Discus Component for comments
 * This came with the Material Design Starter
 */
// class DisqusOld extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toasts: []
//     };
//     this.notifyAboutComment = this.notifyAboutComment.bind(this);
//     this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
//   }

//   onSnackbarDismiss() {
//     const [, ...toasts] = this.state.toasts;
//     this.setState({ toasts });
//   }

//   notifyAboutComment() {
//     const toasts = this.state.toasts.slice();
//     toasts.push({ text: 'New comment available!' });
//     this.setState({ toasts });
//   }

//   render() {
//     const { postNode, expanded } = this.props;
//     if (!config.disqusShortname) {
//       return null;
//     }
//     const post = postNode.frontmatter;
//     const url = `${config.siteUrl}${config.pathPrefix !== '/' ? config.pathPrefix : ''}${
//       postNode.fields.slug
//     }`;

//     const disqusConfig = {
//       identifier: post.title,
//       title: post.title
//     };

//     return (
//       <Card className="md-grid md-cell md-cell--12 light">
//         <CardTitle
//           title="Comments"
//           avatar={<Avatar icon={<FontIcon>comment</FontIcon>} />}
//           expander={!expanded}
//         />
//         <CardText expandable={!expanded}>
//           <DiscussionEmbed
//             onLoad={() => console.log('loaded')}
//             shortname={config.disqusShortname}
//             config={disqusConfig}
//           />
//         </CardText>
//         <Snackbar toasts={this.state.toasts} onDismiss={this.onSnackbarDismiss} />
//       </Card>
//     );
//   }
// }

export default Disqus;
