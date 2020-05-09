import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Media from 'react-md/lib/Media/Media';
import inspirationalImage from '../../images/Fundamentals-ArmsOpen.jpeg';

/**
 * Core Fundamental Page Component
 */
const CoreFundamentals = () => (
  <div className="core-fundamentals wrapper-flex-column--center md-grid mobile-fix">
    <Card className="md-cell--center md-cell--8 md-cell--10-tablet">
      <Media aspectRatio="4-3">
        <img
          className="animated pulse"
          src={inspirationalImage}
          alt="A shadow of a male with his arms held straight out from his sides, while looking out into the open scene"
        />
      </Media>
      <CardText className="animated zoomInUp cardText-text">
        <h1>The 6 Core Fundamentals of Achievement</h1>
        <p>
          Below are the core foundations I believe in that will assist our journey towards achieving
          anything we want in life! Learn about where these fundamentals will take you by checking
          out{' '}
          <a
            href="https://kalebmckelvey.com/journey-to-achieve/about-the-journey/"
            rel="noopener noreferrer"
          >
            About the Journey
          </a>
          .
        </p>
        <p>
          <em>
            These fundamentals will be continuously improved when new ideas are developed and each
            will be written about in the future.
          </em>
        </p>
        <h3>1. Character Traits</h3>
        <ul>
          <li>
            <a href="https://kalebmckelvey.com/tags/integrity/" rel="noopener noreferrer">
              Integrity
            </a>
          </li>
          <li>Kindness</li>
          <li>Respect</li>
          <li>Reliability</li>
          <li>Responsibility</li>
          <li>Golden Rule</li>
          <li>Work ethic</li>
          <li>Humility</li>
        </ul>
        <h3>2. Independent Thinking</h3>
        <ul>
          <li>
            <a href="https://kalebmckelvey.com/categories/mental-models/">Mental models</a>
          </li>
          <li>Checklists</li>
          <li>Logic techniques</li>
        </ul>
        <h3>3. Life Learner</h3>
        <ul>
          <li>Overcoming fear</li>
          <li>Vicarious wisdom</li>
          <li>Adapting to grow</li>
        </ul>
        <h3>4. Plan and Purpose</h3>
        <ul>
          <li>
            <a
              href="https://kalebmckelvey.com/how-bad-do-you-want-to-achieve-in-your-life/"
              rel="noopener"
            >
              How Bad Do You Want to Achieve?
            </a>
          </li>
          <li>
            <a
              href="https://kalebmckelvey.com/each-day-in-our-lives-matter-live-them-with-purpose/"
              rel="noopener"
            >
              Make Each Day Matter
            </a>
          </li>
        </ul>
        <h3>5. Productivity Guru</h3>
        <ul>
          <li>System for getting things done</li>
          <li>Apps to simplify tasks</li>
          <li>Automation</li>
        </ul>
        <h3>6. Strong Relationships</h3>
        <ul>
          <li>
            <a href="https://kalebmckelvey.com/tags/friendship/" rel="noopener noreferrer">
              Friendships
            </a>
          </li>
          <li>Active listening</li>
        </ul>
        <hr />
        <p>Thank you for checking out the core fundamentals!</p>
      </CardText>
    </Card>
  </div>
);

export default CoreFundamentals;
