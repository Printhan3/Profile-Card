import PropTypes from "prop-types";
import React from 'react';

export const ArraySample = (props) => {
  const { items } = props;
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

ArraySample.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired // Corrected the second property to name
    })
  ).isRequired
};

