import React, { Component } from "react";

// my components
import ServiceList from "./ServiceList";

// Data
import ServicesData from "../../../data/ServicesData";
// styling
import "./Services.scss";

class Services extends Component {
  render() {
    return (
      <div className="mobile-fix">
        <ServiceList className="" services={ServicesData} />
      </div>
    );
  }
}

export default Services;
