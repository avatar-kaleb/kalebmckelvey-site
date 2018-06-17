import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Media from "react-md/lib/Media/Media";
import inspirationalImage from "../../images/Fundamentals-ArmsOpen.jpeg";

// import CardText from "react-md/lib/Cards/CardText";
// import config from "../../../data/SiteConfig";
import "./CoreFundamentals.scss";

class CoreFundamentals extends Component {
  render() {
    return (
      <div className="coreFundamentals-wrapper md-grid mobile-fix">
        <Card className="md-cell md-cell--8 md-cell--10-tablet">
          <Media aspectRatio="4-3">
            <img
              src={inspirationalImage}
              alt="A shadow of a male with his arms held straight out from his sides, while looking out into the open scene"
            />
          </Media>
          <CardText>
            <p>
              Below are the core foundations I believe in that will assist our
              journey towards achieving anything we want in life! Learn about
              where these fundamentals will take you by checking out{" "}
              <a
                href="https://kalebmckelvey.xyz/journey-to-achieve/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Journey to Achieve page
              </a>.
            </p>
            <p>
              <em>
                These fundamentals will be continuously improved when new ideas
                are developed and each will be written about in the future.
              </em>
            </p>
            <h1>
              The 6 Core{" "}
              <a href="https://www.kalebmckelvey.xyz/tag/fundamental/">
                Fundamentals
              </a>{" "}
              of Achievement
            </h1>
            <h3>1. Character Traits</h3>
            <ul>
              <li>
                <a
                  href="https://kalebmckelvey.xyz/tag/integrity/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a href="https://kalebmckelvey.xyz/tag/mental-models/">
                  Mental models
                </a>
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
                How do you want to be remembered? What are you doing to be
                remembered in that way?
                <ul>
                  <li>
                    <a
                      href="https://kalebmckelvey.xyz/journey_to_achieve/how-bad-do-you-want-to-achieve/"
                      target="_blank"
                      rel="noopener"
                    >
                      How Bad Do You Want to Achieve?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://kalebmckelvey.xyz/journey_to_achieve/live-each-day-with-purpose/"
                      target="_blank"
                      rel="noopener"
                    >
                      Make Each Day Matter
                    </a>
                  </li>
                </ul>
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
                <a
                  href="https://kalebmckelvey.xyz/tag/friendship/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Friendships
                </a>
              </li>
              <li>Active listening</li>
            </ul>
            <hr />
            <p>Thank you for checking out the core fundamentals!</p>
            <p>
              <em>
                If you're interested in getting these post into your inbox,
                subscribe on the right!
              </em>
            </p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default CoreFundamentals;
