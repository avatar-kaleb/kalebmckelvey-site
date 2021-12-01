import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import Media from 'react-md/lib/Media/Media';
// media
import kalebWelcomeImage from '../../images/AboutMe-Santorini.jpg';

/**
 * About Me Page Component
 */
const AboutMe = () => (
  <div className="about-me wrapper-flex-column--center md-grid mobile-fix">
    <Card className="md-cell--center md-cell--8 md-cell--10-tablet">
      <Media aspectRatio="4-3">
        <img
          className="animated fadeInDown slow"
          src={kalebWelcomeImage}
          alt="A black silhouette of an male's head looking out towards a beautiful sunset."
        />
      </Media>
      <CardText className="animated slideInUp slow cardText-text">
        <p>
          Hola. I&#39;m Kaleb - a coffee connoisseur, frequent traveler, health enthusiast, and
          nature walker!
          <br />
          <br />
          Thanks for stopping by!
        </p>
        <h1>What I Do:</h1>
        <p>
          <strong>I help solve business problems through modern custom web applications.</strong>
        </p>
        <p>
          Combining leadership and technical skills, I collaborate with our team to design and
          develop solutions on tough requirements.
        </p>
        <p>
          In the past, my focus was on increasing productivity in GE Healthcare manufacturing shops,
          and helping financial planners deliver financial plans to achieve their dreams. From there, I
          helped bring the magic to the world as a Software Engineer at Disney working on Disney+ and Star+!
          Today, I work at Netflix on the Growth Engineer team - helping people subscribe as we bring joy to the world!
        </p>
        <p>
          In addition to solving business problems, I continuously explore new technologies and
          focus on improving code bases as I learn from mistakes, grow through experience, and heed
          the advice from top developers on the web!
        </p>
        <h1>My Skills:</h1>
        <p>
          In the last few years I&#39;ve been offered the opportunities to learn and grow through
          various experiences.
        </p>
        <h2>Modern Web Development:</h2>
        <p>
          I&#39;ve worked on multiple projects utilizing various technologies, check out the table
          for details!
        </p>
        <br />
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
              <TableColumn>React/Redux</TableColumn>
              <TableColumn>Predix Platform</TableColumn>
            </TableRow>
            <TableRow key={2}>
              <TableColumn>CSS3</TableColumn>
              <TableColumn>Angular</TableColumn>
              <TableColumn>User Experience</TableColumn>
            </TableRow>
            <TableRow key={3}>
              <TableColumn>HTML5</TableColumn>
              <TableColumn>Polymer</TableColumn>
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
              <TableColumn>GraphQL</TableColumn>
              <TableColumn>Webpack</TableColumn>
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
          I graduated from GE&apos;s Digital Technology Leadership Program in February 2017. From
          this, I led through experience and learned from many top IT professionals in GE. Becoming
          a tech lead on our Milwaukee Software team, I mentored junior team members, led
          initiatives, improved our code base with every new feature, and helped architect designs
          to meet requirements from our Product Owners.
          <br />
          <br />I look forward to continuing using this experience in my new role!
        </p>
        <br />
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
          4+ years of development experience designing custom solutions to meet user needs,
          providing business value.
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
          I believe everyone has a wonderful story to explain how in the world they got to the
          current moment we call now. Here&#39;s a bit of mine!
        </p>
        <h2>TLDR:</h2>
        <p>
          I&apos;m Kaleb McKelvey, a small town raised young professional, who focuses on exhibiting
          high character combined with strong ambition to continously grow a little bit each day.
          <br />
          <br />I began my career working as a Jr AX Dynamics developer at Shentel, transitioned to
          a leadership program at GE Healthcare which led to becoming a Staff Software Engineer;
          since then, I made the move to a new industry and city - New York - to close the distance
          with my girlfriend and take on a new role!
          <br />
          <br />
          My experiences in leadership and technical depth, has molded me into a well rounded
          Software Engineer who has a true passion for technology!
        </p>
        <h2>Long Version</h2>
        <p>
          I&apos;m a young professional with aspirations to inspire, grow, and achieve in various
          areas of my life.
        </p>
        <h3>Small town life</h3>
        <p>Growing up in a small town built the foundation of who I am today in a few ways.</p>
        <p>
          First, and most important, my family instilled in me the values of responsibility,
          character, and integrity.  Second, my coaches and teachers taught me the values of work
          ethic and accountability. Lastly, it gave me the opportunity to understand that boredom
          can be replaced with canoe trips down the river, swimming in the quarry, and learning new
          technologies!
        </p>
        <h3>College Years</h3>
        <p>
          Technology for me began with video games, leading to a desire for becoming a developer.
        </p>
        <p>
          It was this desire that my college journey began, a journey that changed my perspective by
          opening my mind and meeting great people with unique stories. A place to learn how to
          develop software from experts and the skill of time management through balance.
        </p>
        <p>
          By graduation, I completed my dream of learning to develop and became a member of the
          greatest fraternity in the world, Kappa Alpha Psi.
        </p>
        <p>
          My family, fraternity brothers, and colleagues guided me to a new vision on life, one that
          looks at the future as much as the present.
        </p>
        <h3>Becoming a Software Engineer!</h3>
        <p>
          After college, I began working at GE in their Digital Technology Leadership Program that
          led to achieving my dream of becoming a Software Engineer in my first role after
          graduating! GE is a company that focuses on the development of both technical and
          leadership skill-sets. Because of this, I have grown in both my professional and personal
          worlds thanks to the fabulous people I&apos;ve met on the way.
        </p>
        <p>
          A few years later, I decided to change cities and change industries. I joined Northwestern
          Mutual - a company that has more than a century under its belt -&nbsp; adventuring through
          a digital transformation. Personal finance has long been a passion of mine, so getting an
          opportunity to spend 40+ hours a week developing software to help people with that area of
          their life was a great experience!
        </p>
        <p>
          An amazing opportunity came up while working at NM - joining Disney to work on Disney+
          right after their launch in 2019. I decided to take the new role and have baby yoda as my
          new teammate! I'm excited to see where this new adventure takes me as I help bring the
          magic to the world!
        </p>
        <h3>Concluding Thoughts</h3>
        <p>
          Overall I am excited to grow through new experiences! My passion for technology and desire
          to make the world a better place drives me to continue learning. Life is a feeling process
          and a journey to achieve all that you want on the way!
        </p>
        <p>
          I hope to influence your journey towards achieving anything you want. I truly believe you
          are the executive of your life.
        </p>
        <p>
          With all that being said, I look forward to hearing from you - comment, subscribe, and
          enjoy!
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
export default AboutMe;
