import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Media from "react-md/lib/Media/Media";
import kalebWelcomeImage from "../../images/AboutMe-WeddingPic.jpg";
import "./AboutMe.scss";

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMe-wrapper md-grid mobile-fix">
        <Card raise className="md-cell md-cell--8 md-cell--10-tablet">
          <Media aspectRatio="4-3">
            <img
              src={kalebWelcomeImage}
              alt="A white male with a black tuxedo on in a nature setting."
            />
          </Media>
          <CardText>
            <h1>My Story</h1>
            <p>
              I&apos;m a young professional with aspirations to inspire, grow,
              and achieve in various areas of my life.
            </p>
            <h2>Small town life</h2>
            <p>
              Growing up in a small town built the foundation of who I am today
              in a few ways.
            </p>
            <p>
              First, and most important, my family instilled in me the values of
              responsibility, character, and integrity.  Second, my coaches and
              teachers taught me the values of work ethic and accountability.
              Lastly, it gave me the opportunity to understand that boredom can
              be replaced with canoe trips down the river, swimming in the
              quarry, and learning new technologies!
            </p>

            <h2>College Years</h2>
            <p>
              Technology for me began with video games, leading to a desire for
              becoming a developer.
            </p>
            <p>
              It was this desire that my college journey began, a journey that
              changed my perspective by opening my mind and meeting great people
              with unique stories. A place to learn how to program from experts
              and the skill of time management through balance.
            </p>
            <p>
              By graduation, I completed my dream of learning to develop and
              became a member of the greatest fraternity in the world, Kappa
              Alpha Psi.
            </p>
            <p>
              My family, fraternity brothers, and colleagues guided me to a new
              vision on life, one that looks at the future as much as the
              present.
            </p>
            <h2>Becoming a Software Engineer!</h2>
            <p>
              Since then, I began working at GE in their Digital Technology
              Leadership Program. Two years later, February 2017, I achieved my
              dream of becoming a software engineer! GE is a company that
              focuses on the development of both technical and leadership
              skill-sets. Because of this, I have grown in both my professional
              and personal worlds thanks to the fabulous people I&apos;ve met on
              the way.
            </p>
            <p>
              With that all being said, I hope to influence your journey towards
              achieving anything you want. I truly believe you are the executive
              of your life.
            </p>

            <hr />

            <h1>My Skills:</h1>

            <p>
              In the last few years I have been offered the opportunities to
              learn expertise in various areas:
              <br />
              <br />
              <strong>Modern Web Development:</strong>
              <br />
              UX, MEAN stack, Javascript, HTML5, CSS, Polymer, Bootstrap, and
              other libraries. I feel that every new project leads to learning
              new areas within this field
              <br />
              <br />
              <strong>Predix:</strong>
              <br />
              The Industrial Internet of Things platform. In February 2017, I
              became a Predix Certified Developer
              <br />
              <br />
              <strong>AX Dynamics:</strong>
              <br /> 4+ years of development experience designing custom
              solutions to meet user needs, providing business value
              <br />
              <br />
              <strong>Leadership:</strong>
              <br />I graduated from GE&apos;s Digital Technology Leadership
              Program in February 2017. From this, I led through experience and
              learned from many top IT professionals in GEHC
            </p>

            <hr />
            <br />

            <p>
              Overall I am excited to grow through new experiences! My passion
              for technology and desire to make the world a better place drives
              me to continue learning. Life is a feeling process and a journey
              to achieve all that you want on the way!
            </p>
            <p>
              With that being said, I look forward to hearing from you -
              comment, subscribe, and enjoy!
            </p>
            <p>
              Best wishes,
              <br />
              <br />
              Kaleb McKelvey
            </p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default AboutMe;
