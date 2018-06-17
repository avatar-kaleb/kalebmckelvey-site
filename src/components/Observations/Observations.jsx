import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Media from "react-md/lib/Media/Media";

import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";

import inspirationalImage from "../../images/Observations-AustriaPic.jpg";

import "./Observations.scss";

class Observations extends Component {
  render() {
    return (
      <div className="observations-container md-grid mobile-fix">
        <Card className="md-cell md-cell--8 md-cell--10-tablet">
          <Media aspectRatio="4-3">
            <img
              src={inspirationalImage}
              alt="A white male with a black tuxedo on in a nature setting."
            />
          </Media>
          <CardText>
            <p>
              Below are a list of random thoughts, inspirations, and
              observations recorded through my journey to become an achiever.
              This will be one easy place to track them all, letting me revisit
              them as needed.
            </p>
            <h1>Inspirations</h1>
            <p>
              #1:{" "}
              <a
                href="https://www.youtube.com/watch?v=MsTCsmqkezQ&amp;t=1s"
                target="_blank"
                rel="noopener"
              >
                Nothing Funny -
              </a>
            </p>
            <p>
              Eric Thomas shows us the real reason he speaks and the power of
              using your platform to change the lives of those who need hope!
              Honesty is sometimes the best policy.
            </p>
            <hr />
            <p>
              #2{" "}
              <a
                href="https://www.youtube.com/watch?v=7Oxz060iedY"
                target="_blank"
                rel="noopener"
              >
                You Owe You -
              </a>
            </p>
            <p>
              How many times have you made a guarantee to yourself in your life?
              We will quickly call a company after their product breaks before
              the guarantee, but what do you do when you break your own
              warranties?
            </p>
            <hr />
            <p>
              #3{" "}
              <a
                href="https://www.joshuakennon.com/give-yourself-permission-to-be-disliked/"
                target="_blank"
                rel="noopener"
              >
                Give Yourself Permission to be Disliked -
              </a>
            </p>
            <p>
              This article has changed my perspective on the world - what an
              incredible view and honest article.
            </p>
            <hr />
            <p>
              {" "}
              #4{" "}
              <a href="https://www.youtube.com/watch?v=5U0TE4oqj24">
                Charlie Munger USC Commencement Speech -
              </a>
            </p>
            <p>
              A video of one of the greatest thinkers giving keys to a good
              life.
            </p>
            <br />
            <h1>Thoughts &amp; Observations</h1>
            <p>#1 -</p>
            <p>
              Relationships and You Many positives are commonly mentioned about
              relationships - support, love, friendship, and more - while one I
              believe is left out. That one thing? The amount you grow and learn
              about your own character, helping you to become not only a better
              partner but a better individual too!
            </p>
            <hr />
            <p>#2 -</p>
            <p>
              {" "}
              Doing Something Lessons Sometimes just doing something before you
              actually have the full plan ready results in better focus to grow
              the plan, or the fail fast mentality of projects you don't
              actually enjoy - meaning you don't spend a bunch of time planning
              for something you find out you dislike.
            </p>
            <hr />
            <p>#3 -</p>
            <p>
              {" "}
              Habits are key The person you are, the success you bring or
              happiness you have doesn't come in spikes. Instead, they are like
              compound interest, gradually growing into the high levels you
              eventually see. This gives more reason to not procrastinate, but
              break down big tasks into smaller daily ones (like do 1 hour of
              training a day vs 4 on Friday).
            </p>
            <hr />
            <p>#4 -</p>
            <p>
              {" "}
              Actions Always Speak Like Pictures Describe People in your life
              can tell you how much they respect you, care about you, appreciate
              you, etc. These declarations are great and an important part of
              friendships, yet it is always the actions that either dispel or
              backup these statements that truly matter.
            </p>
            <hr />
            <p>#5 -</p>
            <p>
              {" "}
              Spending Time &gt; Spending Money You can always do more to
              increase the amount of money you have in bank accounts, but there
              is an account that decreases every second. Your time balance.
              There is nothing more important than giving the people you love in
              your life some of those ticking seconds.
            </p>
            <hr />
            <p>#6 -</p>
            <p>
              {" "}
              Measurements in Your Life We each use different measurements for
              other people in our life, friendships or spouses as we want to
              have balance within those relationships. One key point to
              remember? You can't control others and if they don't have the same
              measurements in place - you may end up disappointed often.
              Communicate those expectations if necessary, or accept them for
              who they are. The boundary should be of their character, not the
              measurements of their contact.
            </p>
            <hr />
            <p>#7 -</p>
            <p>
              {" "}
              Social Media Doesn't Paint the Truth Taking a peek at someone's
              social media accounts as an indicator of their life doesn't work.
              People post in different ways, only show specific information, and
              there is no true connection in a page visit. Real friendships are
              those who catch up through face to face or phone calls that
              produce intimate conversations to build trust. There is no other
              way.
            </p>
            <hr />
            <p>#8 -</p>
            <p>
              {" "}
              Imposter Syndrome is Real Expertise is a fluid concept that
              doesn't have defined expectations. In reality, most of the time,
              there is someone who is more expert than you on a subject. Let
              them be and live your life in peace. Instead, do your best to get
              a little smart, and a little wiser each day. As you get closer and
              closer to your life expectancy...you will be smarter for it.
            </p>
            <hr />
            <p>#9 -</p>
            <p>
              A Key to a Good Life is Avoiding Big Mistakes Mistakes are going
              to happen in your life, there is no mistaking that. Decide where
              you want to be at the end of your life and start using inversion
              to see which actions take you there. For each action, ask yourself
              - what would be detrimintal to reaching these goals....avoid them
              like the plague, or bitcoin.
            </p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Observations;
