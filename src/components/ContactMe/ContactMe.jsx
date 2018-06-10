import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./ContactMe.scss";

class ContactMe extends Component {
  render() {
    return (
      <div className="contactMe-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="contactMe-wrapper">
            <img
              src={config.userAvatar}
              className="contactMe-img"
              alt={config.userName}
            />
            <CardText>
              <p className="contactMe-text md-body-1">
                {config.userDescription}
              </p>
            </CardText>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default ContactMe;
