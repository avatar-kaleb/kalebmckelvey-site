import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Media from "react-md/lib/Media/Media";
import chalkboardImage from "../../images/LifeResources - Chalkboard.jpeg";

import "./LifeResources.scss";

class LifeResources extends Component {
  render() {
    return (
      <div className="lifeResources-container md-grid mobile-fix">
        <Card raise className="md-cell md-cell--8 md-cell--10-tablet">
          <Media aspectRatio="4-3">
            <img
              src={chalkboardImage}
              alt="A white male with a black tuxedo on in a nature setting."
            />
          </Media>
          <CardText>
            <p>
              <em>
                Below are lists of tools I find useful on my own journey to
                achieve. Currently, these are non affiliate links. Feel free to
                use them on your journey as well!
              </em>
            </p>
            <h1>Apps:</h1>
            <ul>
              <li>
                <a
                  href="https://www.thefabulous.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fabulous App
                </a>{" "}
                - Routines
              </li>
              <li>
                <a href="https://www.headspace.com/">Headspace</a> - Meditation
              </li>
              <li>
                <a
                  href="https://www.jefit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JEFIT
                </a>{" "}
                - Workout tracker
              </li>
              <li>
                <a
                  href="https://www.mint.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mint
                </a>{" "}
                - Budgeting
              </li>
              <li>
                <a
                  href="https://www.onenote.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OneNote
                </a>{" "}
                - Notes
              </li>
              <li>
                <a
                  href="http://www.podbean.com/start-podcast?sourceid=goog_66&amp;gclid=Cj0KEQjw6LXIBRCUqIjXmdKBxZUBEiQA_f50Plfbdw8ODcy0AAy7tbnT89Br32zmF8wSpqjYXeSGpoAaAgAs8P8HAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Podbean
                </a>{" "}
                - Podcasts
              </li>
              <li>
                <a
                  href="https://trello.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trello
                </a>{" "}
                - Task manager
              </li>
            </ul>
            <hr />
            <h1>Books:</h1>
            <h3>Auto/Biography</h3>
            <ul>
              <li>
                <a
                  href="https://www.amazon.com/Benjamin-Franklin-American-Walter-Isaacson/dp/074325807X/ref=pd_lpo_sbs_14_t_1?_encoding=UTF8&amp;psc=1&amp;refRID=CWGHCC0H0CFNJB916PDE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ben Franklin's Autobiography
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Poor-Charlies-Almanack-Charles-Expanded/dp/1578645018"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Poor Charlie's Almanack
                </a>
              </li>
            </ul>
            <h3>Fantasy</h3>
            <ul>
              <li>
                <a
                  href="https://www.amazon.com/Bartimaeus-3-book-boxed-set-Trilogy/dp/1423136829"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bartimaeus Trilogy
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Harry-Potter-Paperback-Box-Books/dp/0545162076/ref=sr_1_1?ie=UTF8&amp;qid=1502646670&amp;sr=8-1&amp;keywords=harry+potter+books"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Harry Potter
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Inheritance-Cycle-4-Book/dp/B00ZJ6W7SI/ref=sr_1_1_ha?s=digital-text&amp;ie=UTF8&amp;qid=1494126056&amp;sr=1-1&amp;keywords=inheritance+cycle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inheritance Cycle
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Rangers-Apprentice-Complete-Book-Set/dp/B00PHO4HZ8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Ranger's Apprentice
                </a>
              </li>
            </ul>
            <h3>Personal Development</h3>
            <ul>
              <li>
                <a
                  href="https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1451639619/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1494126313&amp;sr=1-1&amp;keywords=7+habits+of+highly+effective+people"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7 Havits of Highly Effective People
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0142000280"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Getting Things Done
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034/ref=pd_bxgy_14_img_2?_encoding=UTF8&amp;pd_rd_i=0671027034&amp;pd_rd_r=3Q782TYE90YTFVGNG6VN&amp;pd_rd_w=KPGtN&amp;pd_rd_wg=lJ7r7&amp;psc=1&amp;refRID=3Q782TYE90YTFVGNG6VN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How to Win Friend and Influence People
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Ching-Wisdom-One-Guidance-Answers/dp/0943015421"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IChing Wisdom
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Leading-Heart-Successful-Strategies-Basketball/dp/0446676780"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leading With Heart
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subtle Art of Not Giving a F***
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Magic-Thinking-Big-David-Schwartz/dp/0671646788/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1494126421&amp;sr=1-1&amp;keywords=magic+of+thinking+big"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Magic of Thinking Big
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/TransForm-Dramatically-Improve-Business-Relationships-ebook/dp/B00MTNC6L2/ref=sr_1_fkmr0_1?s=books&amp;ie=UTF8&amp;qid=1494126388&amp;sr=1-1-fkmr0&amp;keywords=transform+john+haden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Transform
                </a>
              </li>
            </ul>
            <h3>Personal Finance</h3>
            <ul>
              <li>
                <a
                  href="https://www.amazon.com/Charlie-Munger-Complete-Investor-Publishing/dp/023117098X/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1494126694&amp;sr=1-1&amp;keywords=the+complete+investor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Complete Investor
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661/ref=pd_sim_14_6?_encoding=UTF8&amp;pd_rd_i=0060555661&amp;pd_rd_r=AC8CAKNPDQMPK7BT1GXR&amp;pd_rd_w=nDz7x&amp;pd_rd_wg=Dc1SN&amp;psc=1&amp;refRID=AC8CAKNPDQMPK7BT1GXR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Intelligent Investor
                </a>
              </li>
              <li>
                <a
                  href="https://dukeofdollars.com/building-wealth/millionaire-next-door-review/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Millionaire Next Door
                </a>
              </li>
              <li>
                <a
                  href="https://dukeofdollars.com/building-wealth/unshakeable-review-p1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unshakeable
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Your-Money-Life-Transforming-Relationship/dp/0143115766/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1494126565&amp;sr=1-1&amp;keywords=your+life+or+your+money">
                  Your Life or Your Money
                </a>
              </li>
            </ul>
            <h3>Programming</h3>
            <ul>
              <li>
                <a
                  href="https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1494126829&amp;sr=1-1&amp;keywords=clean+code+2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code Complete
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1494126792&amp;sr=1-1&amp;keywords=pragmatic+programmer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pragmatic Programmer
                </a>
              </li>
            </ul>
            <hr />
            <h1>Podcasts:</h1>
            <h3>Personal Development</h3>
            <ul>
              <li>
                <a
                  href="https://etinspires.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eric Thomas Podcast
                </a>
              </li>
              <li>
                <a href="http://www.goodlifeproject.com/radio/">
                  Good Life Project
                </a>
              </li>
              <li>
                <a
                  href="https://lewishowes.com/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  School of Greatness
                </a>
              </li>
              <li>
                <a
                  href="https://www.tonyrobbins.com/podcast/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tony Robbins Podcast
                </a>
              </li>
            </ul>
            <h3>Technology</h3>
            <ul>
              <li>
                <a
                  href="http://kaleb.mckelvey@ge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coding Blocks
                </a>
              </li>
            </ul>
            <hr />
            <h1>Sites/Blogs:</h1>
            <h3>Personal Development</h3>
            <ul>
              <li>
                <a
                  href="http://projectlifemastery.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Life Mastery
                </a>
              </li>
            </ul>
            <h3>Personal Finance</h3>
            <ul>
              <li>
                <a
                  href="https://dukeofdollars.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Duke of Dollars
                </a>
              </li>
              <li>
                <a
                  href="https://www.mrmoneymustache.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mr. Money Mustache
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/personalfinance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reddit PF
                </a>
              </li>
              <li>
                <a
                  href="http://www.thegreenswan.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Green Swan
                </a>
              </li>
            </ul>
            <h3>Technology</h3>
            <ul>
              <li>
                <a
                  href="https://engadget.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Engadget
                </a>
              </li>
              <li>
                <a
                  href="https://www.wired.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wired
                </a>
              </li>
            </ul>
            <h3>Other</h3>
            <ul>
              <li>
                <a
                  href="http://www.badassoftheweek.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bad A** of the Week
                </a>
              </li>
              <li>
                <a
                  href="https://joshuakennon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Joshua Kennon
                </a>
                <ul>
                  <li>
                    <a href="https://kalebmckelvey.com/insights-from-joshua-kennons-blog/">
                      Insights From Reading 769+ Joshua Kennon Blog Posts!
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="http://lifehacker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lifehacker
                </a>
              </li>
            </ul>
            &nbsp;
          </CardText>
        </Card>
      </div>
    );
  }
}

export default LifeResources;
