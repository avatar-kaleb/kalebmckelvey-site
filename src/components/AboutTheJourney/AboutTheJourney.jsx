import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import CardTitle from "react-md/lib/Cards/CardTitle";

import Media from "react-md/lib/Media/Media";
import MediaOverlay from "react-md/lib/Media/MediaOverlay";
import kappaKnightImage from "../../images/AboutTheJourney-KappaKnight.jpg";

// import { Card, CardText, Media } from "react-md";

// import CardText from "react-md/lib/Cards/CardText";
// import UserLinks from "../UserLinks/UserLinks";
// import config from "../../../data/SiteConfig";
import "./AboutTheJourney.scss";

class AboutTheJourney extends Component {
  render() {
    return (
      <div className="aboutTheJourney-wrapper md-grid mobile-fix">
        <Card raise className="md-cell md-cell--8 md-cell--10-tablet">
          <Media aspectRatio="4-3">
            <img
              src={kappaKnightImage}
              alt="A white male with a black tuxedo on in a nature setting."
            />
            <MediaOverlay>
              <CardTitle
                title="Kappa Knight"
                subtitle="This image and site is not endorsed by Kappa Alpha Psi Fraternity in any way."
              />
            </MediaOverlay>
          </Media>
          <CardText>
            <h2>Knighthood</h2>
            <p>
              In the medieval days, knighthood was the noble honor to serve
              one&apos;s king in exchange for property and status within the
              kingdom. Knights dedicated their life&apos;s younger years to
              training, so they could prove themselves worthy to achieve the
              noble title. A knight must follow the knight&apos;s code of
              conduct, or Chivalry.
            </p>
            <p>
              This romanticized code came late into the history of knights,
              requiring them to demonstrate  respect for the honor of women,
              defending those of less status, and working for the welfare of
              others. Overall, they were expected to live up to their entitled
              "Sir" title.
            </p>
            <p>
              Fast forward to 2017, although feudalism has died off (good
              riddance), the values we uphold greatly impacts our future. The
              character traits we choose to uphold into our value system holds
              more weight than how people perceive us. Character is more
              important than image in the perspective of achievement, because{" "}
              <strong>
                it is who you are, not who people think you are, which grants
                opportunities in your life.
              </strong>
            </p>

            <h2>Achievement</h2>
            <p>
              In our days since medieval times, many of these codes have been
              changed along with the definition of success.
            </p>
            <p>
              In my humble opinion, life is less about success in terms of
              money, but achieving in making a positive impact on our world.
              Achievement represents the opportunity to give back to others,
              develop strong relationships with the people you care about, and
              spend time in accordance to your purpose.
            </p>
            <p>
              As a brother of Kappa Alpha Psi, Fraternity, I hope to live by our
              motto of &quot;Achievement in Every Field of Human Endeavor,&quot;
              as it guides us well.
            </p>
            <p>
              It&apos;s truly because of the experiences gained from the
              brotherhood, that I have developed the right mindset to
              continuously achieve on my own journey. By incorporating our
              fraternity values - in addition to modern day principles - we can
              become the person we aspire to be.
            </p>
            <h2>The Journey to Achieve</h2>
            <p>
              The journey represents a marathon versus a sprint in your life.
            </p>
            <p>
              It&apos;s the process of making mistakes, growing from them, and
              become wiser each day. It&apos;s creating the life you want. How?
              By being your own executive when making decisions that traverse
              life&apos;s unknown path. It&apos;s learning to achieve
              vicariously from great role models in our life like - Charlie
              Munger, Stephen Covey, or Will Smith - to incorporate life
              principles or proven mental models when making decisions. Lastly,
              its learning to think independently by focusing on the process
              leading your life towards achievement! Join me in your journey to
              achieve!
            </p>
            <h2>Where to start?</h2>
            <p>
              <strong>First</strong> -&gt; check out the{" "}
              <a
                href="https://kalebmckelvey.com/journey-to-achieve/core-fundamentals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Core Fundamentals
              </a>{" "}
              to incorporate as you begin changing the trajectory of your life
              <br />
              <br />
              <strong>Second</strong> -&gt; head over to{" "}
              <a
                href="https://kalebmckelvey.com/tags/journey-to-achieve/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Journey to Achieve Blogroll
              </a>{" "}
              to catch up on the latest journey to achieve articles
              <br />
              <br />
              <strong>Third </strong>-&gt; begin utilizing the tools in{" "}
              <a
                href="https://kalebmckelvey.com/resources"
                target="_blank"
                rel="noopener noreferrer"
              >
                Life Resources Page
              </a>
            </p>
            <hr />
            <p>
              Thank you for taking the time to read the blog and definitely look
              forward to hearing from you through the journey! Start today!!
            </p>
            <p>
              <em>
                I am a Spring 13 initiate of the Nu Lambda of Kappa Alpha Psi
                Fraternity - The Rolling Stone Nupes of James Madison
                University.
              </em>
            </p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default AboutTheJourney;
