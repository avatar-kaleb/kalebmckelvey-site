import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

/**
 * Displays a list of service cards
 * @param {Array} services - list of services from service data
 */
const ServicesList = ({ services }) => (
  <div className="md-grid">
    {services.map(service => (
      <ServiceCard
        key={service.title}
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        sliderOptions={service.sliderOptions}
        packageOptions={service.packageOptions}
      />
    ))}
  </div>
);

export default ServicesList;
