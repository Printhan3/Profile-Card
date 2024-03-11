import PropTypes from "prop-types";
import React from 'react'

export const OneofSample = (props) => {
    const {color} = props;
  return (
    <div style={{background:color, padding:"20px",color:"white"}}>
        <p>This Component has a background color of {color}.</p>
    </div>
  );
};

OneofSample.prototypes = {
    color: PropTypes.oneOf(["red","green","blue"]).isRequired
};
