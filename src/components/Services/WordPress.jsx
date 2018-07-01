import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import CardTitle from "react-md/lib/Cards/CardTitle";
import {
  ExpansionList,
  ExpansionPanel,
  List,
  ListItemControl,
  Switch,
  FontIcon,
  Slider
} from "react-md";
import "./WordPress.scss";

class Services extends Component {
  render() {
    return (
      <div className="services-container md-grid mobile-fix">
        <Card raise className="md-grid md-cell--8" title="WordPress">
          <CardTitle
            title="WordPress"
            subtitle="User friendly, professional blog or website!"
          />
          <CardText>
            <Slider
              id="custom-range-step-slider"
              label="Budget"
              min={365}
              max={815}
              step={150}
              discreteTicks={150}
              discrete
            />
            <h2>Basic</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              laboriosam quam suscipit odit facilis facere et porro? Rerum
              magnam, architecto doloribus reprehenderit at deserunt iure modi
              quas fuga, quo quae.
            </p>
            <ExpansionList className="md-cell md-cell--12">
              <ExpansionPanel
                label="Shared Hosting"
                secondaryLabel="~$150/year"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  quas possimus ut at rerum debitis delectus aut ab autem sit
                  odio voluptatum facere rem, dolore omnis quibusdam
                  consequuntur facilis vero.
                </p>
                <Slider id="expansion-slider" />
              </ExpansionPanel>
              <ExpansionPanel
                label="Domain Purchase"
                secondaryLabel="~$20/year"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  quas possimus ut at rerum debitis delectus aut ab autem sit
                  odio voluptatum facere rem, dolore omnis quibusdam
                  consequuntur facilis vero.
                </p>
                <Slider id="expansion-slider" />
              </ExpansionPanel>
              <ExpansionPanel label="Free WordPress Theme" secondaryLabel="$0">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, fugiat commodi cumque debitis, tenetur culpa
                  laudantium, iusto eaque eius est numquam ea quo corporis?
                  Cumque omnis ipsa perferendis ipsam nemo.
                </p>
              </ExpansionPanel>
              <ExpansionPanel
                label="Basic Development Package"
                secondaryLabel="300$"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, fugiat commodi cumque debitis, tenetur culpa
                  laudantium, iusto eaque eius est numquam ea quo corporis?
                  Cumque omnis ipsa perferendis ipsam nemo.
                </p>
              </ExpansionPanel>
            </ExpansionList>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Services;
