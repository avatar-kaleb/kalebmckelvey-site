import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Media from 'react-md/lib/Media/Media';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

// media
import kalebWelcomeImage from '../../images/AboutMe-Santorini.jpg';

const AboutMe = () => (
  <div className="about-me wrapper-flex-column--center md-grid mobile-fix">
    <Card className="md-cell md-cell--8 md-cell--10-tablet">
      <Media aspectRatio="4-3">
        <img
          className="animated fadeInDown"
          src={kalebWelcomeImage}
          alt="A black silhouette of an male's head looking out towards a beautiful sunset."
        />
      </Media>
      <CardText className="animated slideInUp cardText-text">
        <p>
          Hola. I&#39;m Kaleb - a coffee connoisseur, frequent traveler, health enthusiast, mental model extraordinaire,
          nature walker, and reddit lurker.
          <br />
          <br />
          Thanks for stopping by!
        </p>
        <h1>What I Do:</h1>
        <p>
          <strong>I help solve business problems through modern custom web applications.</strong>
        </p>
        <p>
          Combining leadership and technical skills, I collaborate with our team to design and develop solutions on
          tough requirements.
        </p>
        <p>
          In the past my focus was doing this for GE Healthcare manufacturing shops. Recently, I changed to a new
          industry, city, and role - Sr Software Engineer (Front End) in New York at Northwestern Mutual!
        </p>
        <p>
          In addition to solving business problems, I continuously explore new technologies and focus on improving code
          bases as I learn from mistakes, grow through experience, and heed the advice from top developers on the web!
        </p>
        <h1>My Skills:</h1>
        <p>
          In the last few years I&#39;ve been offered the opportunities to learn and grow through various experiences.
        </p>
        <h2>Modern Web Development:</h2>
        <p>I&#39;ve worked on multiple projects utilizing various technologies, check out the table for details!</p>
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Core</TableColumn>
              <TableColumn>Libraries</TableColumn>
              <TableColumn>General</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow key={1}>
              <TableColumn>Javascript - ES5/ES6+</TableColumn>
              <TableColumn>Polymer</TableColumn>
              <TableColumn>Predix Platform</TableColumn>
            </TableRow>
            <TableRow key={2}>
              <TableColumn>CSS3</TableColumn>
              <TableColumn>React</TableColumn>
              <TableColumn>User Experience</TableColumn>
            </TableRow>
            <TableRow key={3}>
              <TableColumn>HTML5</TableColumn>
              <TableColumn>Redux</TableColumn>
              <TableColumn>Progressive Web Apps</TableColumn>
            </TableRow>
            <TableRow key={4}>
              <TableColumn>Responsive Design</TableColumn>
              <TableColumn>Sass</TableColumn>
              <TableColumn>Material Design</TableColumn>
            </TableRow>
            <TableRow key={5}>
              <TableColumn>Node.js</TableColumn>
              <TableColumn>Express</TableColumn>
              <TableColumn>VS Code</TableColumn>
            </TableRow>
            <TableRow key={6}>
              <TableColumn>Spring Boot</TableColumn>
              <TableColumn>Gulp</TableColumn>
              <TableColumn>WebSockets</TableColumn>
            </TableRow>
            <TableRow key={7}>
              <TableColumn>WordPress</TableColumn>
              <TableColumn>Bootstrap</TableColumn>
              <TableColumn>CI/CD</TableColumn>
            </TableRow>
            <TableRow key={8}>
              <TableColumn>Postgres</TableColumn>
              <TableColumn>Gatsby</TableColumn>
              <TableColumn>Unit/E2E Testing</TableColumn>
            </TableRow>
          </TableBody>
        </DataTable>
        <hr />

        <br />
        <h2>Leadership:</h2>
        <p>
          I graduated from GE&apos;s Digital Technology Leadership Program in February 2017. From this, I led through
          experience and learned from many top IT professionals in GE. Now as a Staff Software Engineer, I mentor junior
          members, lead initiatives in the team, improve our code base with every new feature, and help architect
          designs to meet requirements from our Product Owners.
        </p>
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Communication</TableColumn>
              <TableColumn>Relationship</TableColumn>
              <TableColumn>Responsibility</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow key={1}>
              <TableColumn>Public Speaking</TableColumn>
              <TableColumn>Collaboration & Peer Programming</TableColumn>
              <TableColumn>Rational Thinker</TableColumn>
            </TableRow>
            <TableRow key={2}>
              <TableColumn>Business Story Telling</TableColumn>
              <TableColumn>Respectful and Encouraging</TableColumn>
              <TableColumn>Acknowledging Mistakes</TableColumn>
            </TableRow>
            <TableRow key={3}>
              <TableColumn>Active Listening</TableColumn>
              <TableColumn>Mentorship and Guidance</TableColumn>
              <TableColumn>Transparency & Openness</TableColumn>
            </TableRow>
            <TableRow key={4}>
              <TableColumn>Written Communication</TableColumn>
              <TableColumn>Teaching</TableColumn>
              <TableColumn>Time Management</TableColumn>
            </TableRow>
          </TableBody>
        </DataTable>
        <hr />

        <br />
        <h2>AX Dynamics:</h2>
        <p>
          4+ years of development experience designing custom solutions to meet user needs, providing business value.
        </p>
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Core</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow key={1}>
              <TableColumn>.NET and X++</TableColumn>
            </TableRow>
            <TableRow key={2}>
              <TableColumn>AIF</TableColumn>
            </TableRow>
            <TableRow key={3}>
              <TableColumn>SQL</TableColumn>
            </TableRow>
            <TableRow key={4}>
              <TableColumn>SRSS</TableColumn>
            </TableRow>
            <TableRow key={5}>
              <TableColumn>Data Migration</TableColumn>
            </TableRow>
          </TableBody>
        </DataTable>
        <hr />

        <br />
        {/* Story! */}
        <h1>My Story</h1>
        <p>
          I believe everyone has a wonderful story to explain how in the world they got to the current moment we call
          now. Here&#39;s a bit of mine!
        </p>
        <h2>TLDR:</h2>
        <p>
          I&apos;m Kaleb McKelvey, a small town raised young professional who focuses on exhibiting high character
          combined with strong ambition to continously grow a little bit wiser each day.
          <br />
          <br />
I started my career at a small company called Shentel, followed by transit working at General Electric
          for ~4 years with experiences in both leadership and technical depth, molding me into a well rounded Software
          Engineer who has a true passion for technology!
        </p>
        <h2>Long Version</h2>
        <p>I&apos;m a young professional with aspirations to inspire, grow, and achieve in various areas of my life.</p>
        <h3>Small town life</h3>
        <p>Growing up in a small town built the foundation of who I am today in a few ways.</p>
        <p>
          First, and most important, my family instilled in me the values of responsibility, character, and integrity. 
          Second, my coaches and teachers taught me the values of work ethic and accountability. Lastly, it gave me the
          opportunity to understand that boredom can be replaced with canoe trips down the river, swimming in the
          quarry, and learning new technologies!
        </p>
        <h3>College Years</h3>
        <p>Technology for me began with video games, leading to a desire for becoming a developer.</p>
        <p>
          It was this desire that my college journey began, a journey that changed my perspective by opening my mind and
          meeting great people with unique stories. A place to learn how to develop software from experts and the skill
          of time management through balance.
        </p>
        <p>
          By graduation, I completed my dream of learning to develop and became a member of the greatest fraternity in
          the world, Kappa Alpha Psi.
        </p>
        <p>
          My family, fraternity brothers, and colleagues guided me to a new vision on life, one that looks at the future
          as much as the present.
        </p>
        <h3>Becoming a Software Engineer!</h3>
        <p>
          Since then, I began working at GE in their Digital Technology Leadership Program followed achieving my dream
          of becoming a Software Engineer! GE is a company that focuses on the development of both technical and
          leadership skill-sets. Because of this, I have grown in both my professional and personal worlds thanks to the
          fabulous people I&apos;ve met on the way.
        </p>
        <p>
          Fast forward today, I work at Northwestern Mutual - a company that has more than a century under its belt - as
          it adventures through a digital transformation. Personal finance has long been a passion of mine, so getting
          an opportunity to spend 40+ hours a week developing software to help people with that area of their Life has
          been great!
        </p>
        <h3>Concluding Thoughts</h3>
        <p>
          Overall I am excited to grow through new experiences! My passion for technology and desire to make the world a
          better place drives me to continue learning. Life is a feeling process and a journey to achieve all that you
          want on the way!
        </p>
        <p>
          I hope to influence your journey towards achieving anything you want. I truly believe you are the executive of
          your life.
        </p>
        <p>With all that being said, I look forward to hearing from you - comment, subscribe, and enjoy!</p>
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
export default AboutMe;
