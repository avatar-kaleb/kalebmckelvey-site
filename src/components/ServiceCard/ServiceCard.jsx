import React, { Component } from 'react';
import find from 'lodash/find';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import { navigate } from 'gatsby';
import { ExpansionList, ExpansionPanel, Slider } from 'react-md';

import './ServiceCard.scss';

/**
 * Navigates to the contact me page - used for card actions
 */
const navigateToContactPage = () => navigate('/contact-me');

/**
 * Card to display different services with their package options
 */
class ServiceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPackage: props.packageOptions[0]
    };
  }

  /**
   * When the slider changes, this function will find the package within the
   * package options that match the given price and set it to selectedPackage.
   * @param {Number} value The value of the slider on change
   */
  setPackageOnSliderChange = value => {
    const { packageOptions } = this.props;
    const selectedPackage = find(packageOptions, ['totalPrice', value]);

    this.setState({
      selectedPackage
    });
  };

  /**
   * React render function
   */
  render() {
    const { selectedPackage } = this.state;
    const { description, sliderOptions, subtitle, title } = this.props;

    return (
      <Card raise className="service-card md-cell--6 md-cell--center md-cell--top">
        <CardTitle title={title} subtitle={subtitle} />

        <CardText>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <br />
          {sliderOptions.showSlider && (
            <div>
              <p>
                <em>
                  Prices are estimates and will vary based on project requirements. To truly estimate a price and dev
                  time, user stories should be created and estimated together.
                </em>
              </p>
              <Slider
                discrete
                discreteTicks={sliderOptions.discreteTicks}
                id={`${title}-slider`}
                label={sliderOptions.label}
                max={sliderOptions.max}
                min={sliderOptions.min}
                onChange={this.setPackageOnSliderChange}
                step={sliderOptions.step}
                valuePrecision={1}
              />
              <h2>{selectedPackage.title}</h2>
              <ExpansionList className="md-cell md-cell--12">
                {selectedPackage.options.map(option => (
                  <ExpansionPanel key={option.name} label={option.name} secondaryLabel={option.price} footer={null}>
                    <div dangerouslySetInnerHTML={{ __html: option.description }} />
                  </ExpansionPanel>
                ))}
              </ExpansionList>
            </div>
          )}
        </CardText>

        <CardActions className="md-divider-border md-divider-border--top md-text--theme-primary serviceCard-action--alignleft">
          <Button flat secondary onClick={navigateToContactPage}>
            Contact Kaleb
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default ServiceCard;
