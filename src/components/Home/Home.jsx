// absolute
import React, { useContext, useEffect, useState } from 'react';
import Cell from 'react-md/lib/Grids/Cell';
import Paper from 'react-md/lib/Papers/Paper';
import Typed from 'typed.js';
import { ThemeContext } from '../../context/ThemeContext';
import kalebWelcomeImage from '../../images/Home-KalebWelcomePic.png';
// relative
import AvatarImage from '../AvatarImage/AvatarImage';
import PostListing from '../PostListing/PostListing';
// CSS
import './Home.scss';

const Home = ({ postEdges }) => {
  let typed = null;
  const { isLightTheme } = useContext(ThemeContext);

  useEffect(() => {
    typed = new Typed('#typed', {
      startDelay: 1000,
      stringsElement: '#typed-strings',
      typeSpeed: 15,
      showCursor: false
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const [darkThemeClass, setDarkThemeClass] = useState('');
  useEffect(() => {
    setDarkThemeClass(isLightTheme ? '' : 'dark-theme');
  }, [isLightTheme]);

  return (
    <section className={`home mobile-fix ${darkThemeClass}`}>
      <Paper className='md-grid md-background--card intro-card' zDepth={3}>
        <Cell
          align='middle'
          desktopOffset={1}
          desktopSize={3}
          tabletSize={3}
          phoneSize={4}
          position='center'
        >
          <AvatarImage
            src={kalebWelcomeImage}
            alt='Kaleb with a blue shirt on with arms wide open smiling!'
          />
        </Cell>
        <Cell
          align='middle'
          desktopOffset={1}
          desktopSize={6}
          tabletSize={5}
          phoneSize={4}
          position='center'
        >
          <h3>Welcome to the Site!</h3>
          <section id='typed-strings'>
            <p className='md-body-2'>
              Hi there - I&apos;m Kaleb, a Software Engineer at Disney striving to make my dreams
              into reality!
            </p>
          </section>
          <span id='typed' style={{ color: isLightTheme ? 'black' : 'white' }} />
          <br />
          <section>
            <p className='md-body-1 p-margin--top'>
              On my blog, I&apos;ll be sharing my principles, recommendations, adventures, and web
              development tips on my journey to achieve.
            </p>
            <p className='md-body-1'>
              <strong>Join me</strong>
              &nbsp;on the road to achievement as we make a positive impact on the world together!!
            </p>
          </section>
        </Cell>
      </Paper>

      <PostListing postEdges={postEdges} />
    </section>
  );
};

export default Home;
