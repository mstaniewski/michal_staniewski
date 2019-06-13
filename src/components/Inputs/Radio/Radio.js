import React from "react";

const Radio = ({ name, options = [], inputProps }) => (
  <div className="form-check">
    {options.map(option => (
      <div key={option}>
        <input
          name={name}
          className="form-check-input"
          type="radio"
          id={`${option}-radio`}
          value={option}
          {...inputProps}
        />
        <label className="form-check-label" htmlFor={`${option}-radio`}>
          {option}
        </label>
      </div>
    ))}
  </div>
);

export default Radio;
