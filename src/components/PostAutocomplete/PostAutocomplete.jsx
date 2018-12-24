import React from 'react';
import Autocomplete from 'react-md/lib/Autocompletes/Autocomplete';

/**
 * Wrapper for the MD autocomplete used for mental model dictionary views
 * @param {Object} props - Props passed in to component: array -allMentalModels, function - filterMentalModels, String - placeholder
 */
const PostAutocomplete = ({ allPostTitles = [], filterPosts, placeholder = '' }) => (
  <Autocomplete
    id="post-autocomplete"
    label="Search posts"
    onAutocomplete={filterPosts}
    onChange={filterPosts}
    placeholder={placeholder}
    data={allPostTitles}
  />
);

export default PostAutocomplete;
