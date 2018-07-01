import React, { Component } from "react";
import _ from "lodash";
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
    this.state = { ...props, selectedPackage: props.packageOptions[0] };

    // event binding to access this
    this.setPackageOnSliderChange = this.setPackageOnSliderChange.bind(this);
  }

  navigateToContactPage() {
    navigateTo("/contact-me");
  }

  setPackageOnSliderChange(value) {
    const selectedPackage = _.find(this.state.packageOptions, [
      "totalPrice",
      value
    ]);
    this.setState({
      selectedPackage
    });
  }

  render() {
    return (
      <Card raise className="serviceCard--mb md-cell--6 md-cell--center">
        <CardTitle title={this.state.title} subtitle={this.state.subtitle} />

        <CardText>
          <div dangerouslySetInnerHTML={{ __html: this.state.description }} />
          <br />
          <Slider
            discrete
            discreteTicks={this.state.sliderOptions.discreteTickets}
            id={`${this.state.title}-slider`}
            label={this.state.sliderOptions.label}
            max={this.state.sliderOptions.max}
            min={this.state.sliderOptions.min}
            onChange={this.setPackageOnSliderChange}
            step={this.state.sliderOptions.step}
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
                <div dangerouslySetInnerHTML={{ __html: option.description }} />
              </ExpansionPanel>
            ))}
          </ExpansionList>
        </CardText>

        <CardActions className="md-divider-border md-divider-border--top md-text--theme-primary">
          <Button flat secondary onClick={this.navigateToContactPage}>
            Contact Kaleb
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default ServiceCard;
