import React, { Component } from "react";
import find from "lodash/find";

import Button from "react-md/lib/Buttons/Button";
import Card from "react-md/lib/Cards/Card";
import CardActions from "react-md/lib/Cards/CardActions";
import CardText from "react-md/lib/Cards/CardText";
import CardTitle from "react-md/lib/Cards/CardTitle";
import { ExpansionList, ExpansionPanel, Slider } from "react-md";
import { navigateTo } from "gatsby-link";

import "./ServiceCard.scss";

class ServiceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPackage: props.packageOptions[0],
      contactPath: "/contact-me"
    };

    // event binding to access this
    this.setPackageOnSliderChange = this.setPackageOnSliderChange.bind(this);
    this.navigateToContactPage = this.navigateToContactPage.bind(this);
  }

  /**
   * When the slider changes, this function will find the package within the
   * package options that match the given price and set it to selectedPackage.
   * @param {Number} value The value of the slider on change
   */
  setPackageOnSliderChange(value) {
    const selectedPackage = find(this.props.packageOptions, [
      "totalPrice",
      value
    ]);

    this.setState({
      selectedPackage
    });
  }

  /**
   * Navigates to the contact me page - used for card actions
   */
  navigateToContactPage() {
    navigateTo(this.state.contactPath);
  }

  render() {
    return (
      <Card
        raise
        className="serviceCard--mb md-cell--6 md-cell--center md-cell--top"
      >
        <CardTitle title={this.props.title} subtitle={this.props.subtitle} />

        <CardText>
          <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
          <br />
          {this.props.sliderOptions.showSlider ? (
            <div>
              <p>
                <em>
                  Prices are estimates and will vary based on project
                  requirements. To truly estimate a price and dev time, user
                  stories should be created and estimated together.
                </em>
              </p>
              <Slider
                discrete
                discreteTicks={this.props.sliderOptions.discreteTicks}
                id={`${this.props.title}-slider`}
                label={this.props.sliderOptions.label}
                max={this.props.sliderOptions.max}
                min={this.props.sliderOptions.min}
                onChange={this.setPackageOnSliderChange}
                step={this.props.sliderOptions.step}
                valuePrecision={1}
              />
              <h2>{this.state.selectedPackage.title}</h2>
              <ExpansionList className="md-cell md-cell--12">
                {this.state.selectedPackage.options.map(option => (
                  <ExpansionPanel
                    key={option.name}
                    label={option.name}
                    secondaryLabel={option.price}
                    footer={null}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: option.description }}
                    />
                  </ExpansionPanel>
                ))}
              </ExpansionList>
            </div>
          ) : (
            <div />
          )}
        </CardText>

        <CardActions className="md-divider-border md-divider-border--top md-text--theme-primary serviceCard-action--alignleft">
          <Button flat secondary onClick={this.navigateToContactPage}>
            Contact Kaleb
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default ServiceCard;
