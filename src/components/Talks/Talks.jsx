import React from 'react';
import TalkData from '../../../data/TalkData';
import TalksList from '../TalksList/TalksList';

// styling
import './Talks.scss';

/**
 * Talks page component
 */
const Talks = () => (
  <div className='talks wrapper-flex-column--center mobile-fix animated fadeIn slow'>
    <TalksList talks={TalkData} />
  </div>
);

export default Talks;
