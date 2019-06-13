import React from "react";

const TextField = ({ hasError, name, inputProps = {} }) => (
  <input
    type="text"
    className={`form-control ${hasError ? "is-invalid" : ""}`}
    name={name}
    {...inputProps}
  />
);

export default TextField;
