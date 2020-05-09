import { Link } from 'gatsby';
import React from 'react';
import Button from 'react-md/lib/Buttons';
import config from '../../../data/SiteConfig';
import './Footer.scss';

/**
 * Functonal component to wrap the footer
 */
const Footer = () => {
  const url = config.siteRss;
  const { copyright, fixedFooter } = config;

  if (!copyright) {
    return null;
  }

  return (
    <footer className={fixedFooter ? 'footer footer-fixed' : 'footer'}>
      <section className="notice-container">
        <div className="copyright">
          <h4>{copyright}</h4>
        </div>
        <div className="rss">
          <Link to={url}>
            <Button swapTheming primary flat iconClassName="fa fa-rss">
              Subscribe
            </Button>
          </Link>
        </div>
        <div className="legal">
          <Link to="/legal">
            <Button swapTheming primary flat>
              Legal Pages
            </Button>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
