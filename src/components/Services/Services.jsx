import React from 'react';
import ServicesData from '../../../data/ServicesData';
import ServiceList from '../ServiceList/ServiceList';

// styling
import './Services.scss';

/**
 * Services page component
 */
const Services = () => (
  <div className="services wrapper-flex-column--center mobile-fix animated fadeIn slow">
    <ServiceList services={ServicesData} />
  </div>
);

export default Services;
